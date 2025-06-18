"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import api from "@/lib/config/axios";
import { toast } from "sonner";
import { useCallback, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { Upload } from "lucide-react";
import FileLists from "./FileLists";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { fetchFiles } from "@/store/FileSlice";

const Document = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch<AppDispatch>();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");

  const reset = () => {
    setIsDragging(false);
    setUploadedUrl("");
  };

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    const formData = new FormData();
    formData.append("file", file);
    try {
      setUploading(true);
      const res = await fetch("/api/pdf/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setUploadedUrl(data.url);
      if (res.ok) {
        const fileInfo = {
          fileName: file.name,
          size: file.size,
          fileLink: data.url,
          clientId: session?.user.id,
        };
        const res = await api.post("/api/file", fileInfo);
        if (res.status === 201) {
          toast.success("File upload successful");
          reset();
        }
      }
    } catch (err) {
      console.error(err);
      toast.error("File upload failed");
      reset();
    } finally {
      setUploading(false);
      dispatch(fetchFiles(session?.user.id!));
      reset();
    }
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Brankas Legalitas</h2>
        <p className="text-gray-600">
          Dokumen legal Anda tersimpan aman dan dapat diakses kapan saja
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="w-5 h-5" />
            Upload Dokumen
          </CardTitle>
          <CardDescription>
            Upload dokumen pendukung untuk layanan Anda
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 ${
              isDragging ? "border-blue-400 bg-blue-50" : "border-gray-300"
            }`}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={() => inputRef.current?.click()}
          >
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Upload Dokumen</h3>
            <p className="text-gray-500 mb-4">
              Drag & drop file atau klik untuk browse
            </p>
            <Button
              variant="outline"
              onClick={(e) => {
                e.stopPropagation();
                inputRef.current?.click();
              }}
            >
              <Upload className="w-4 h-4 mr-2" />
              Pilih File
            </Button>
            <input
              type="file"
              ref={inputRef}
              className="hidden"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              onChange={(e) => handleFiles(e.target.files)}
            />
            <p className="text-xs text-gray-400 mt-2">
              Maksimal 10MB • PDF, DOC, JPG, PNG
            </p>

            {uploading && (
              <p className="text-sm text-blue-500 mt-4">Uploading...</p>
            )}
            {uploadedUrl && (
              <p className="text-sm text-green-600 mt-4">
                Uploaded:{" "}
                <a href={uploadedUrl} target="_blank" className="underline">
                  {uploadedUrl}
                </a>
              </p>
            )}
          </div>
        </CardContent>
      </Card>
      <FileLists />
    </div>
  );
};

export default Document;
