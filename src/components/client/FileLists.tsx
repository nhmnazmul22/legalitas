"use client";
import { Download, FileText, FolderOpen } from "lucide-react";
import { Badge } from "../ui/badge";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { fetchFiles } from "@/store/FileSlice";
import { convertMb, formatDate } from "@/lib/utils";
import Link from "next/link";

const FileLists = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch<AppDispatch>();
  const { data: files } = useSelector((state: RootState) => state.files.items);

  useEffect(() => {
    if (session?.user) {
      dispatch(fetchFiles(session.user.id));
    }
  }, [session]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FolderOpen className="w-5 h-5" />
          Dokumen Anda
        </CardTitle>
        <CardDescription>Daftar semua dokumen yang tersimpan</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {files.length > 0 ? (
            files.map((doc) => (
              <div
                key={doc._id}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-blue-600" />
                  <div>
                    <h4 className="font-medium">{doc.fileName}</h4>
                    <p className="text-sm text-gray-500">
                      {convertMb(Number(doc.size))} •{" "}
                      {formatDate(doc.createdAt!)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      doc.status === "accepted"
                        ? "secondary"
                        : doc.status === "draft"
                        ? "outline"
                        : "destructive"
                    }
                  >
                    {`${doc.status[0].toUpperCase()}${doc.status.slice(
                      1,
                      doc.status.length
                    )}`}
                  </Badge>
                  <Link href={doc.fileLink} target="_blank">
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center italic">No saved files</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default FileLists;
