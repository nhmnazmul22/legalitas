import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageSquare, Send, Star } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const Reviews = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Daftar Review</h2>
        <p className="text-gray-600">
          Berikan review untuk layanan yang telah Anda gunakan
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Tulis Review Baru
          </CardTitle>
          <CardDescription>
            Bagikan pengalaman Anda menggunakan layanan Legalitas
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-sm font-medium">Rating</Label>
            <div className="flex gap-1 mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-6 h-6 text-gray-300 hover:text-yellow-400 cursor-pointer"
                />
              ))}
            </div>
          </div>
          <div>
            <Label htmlFor="review">Review Anda</Label>
            <Textarea
              id="review"
              placeholder="Ceritakan pengalaman Anda menggunakan layanan kami..."
              rows={4}
              className="mt-1"
            />
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
            <Send className="w-4 h-4 mr-2" />
            Kirim Review
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Review Anda</CardTitle>
          <CardDescription>Review yang telah Anda berikan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">Pendirian PT</h4>
              <Badge>Published</Badge>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">• 10 Jan 2024</span>
            </div>
            <p className="text-gray-700 mb-3">
              Pelayanan sangat memuaskan, proses cepat dan tim sangat
              profesional. Terima kasih Legalitas!
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-3">
              <p className="text-sm font-medium text-blue-800 mb-1">
                Respon dari Legalitas
              </p>
              <p className="text-sm text-blue-700">
                Terima kasih atas review positifnya! Kami senang dapat membantu
                Anda.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reviews;
