import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const CommentForm = () => {
  return (
    <div className="my-5 w-full">
      <h3 className="text-2xl font-semibold">Tulis Komentar</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 w-full">
        <div className="flex flex-col space-y-2">
          <Label htmlFor="name">
            Nama Anda<span className="text-destructive">*</span>
          </Label>
          <Input placeholder="Nama Anda" id="name" className="text-sm" />
        </div>
        <div className="flex flex-col space-y-2">
          <Label htmlFor="email">
            Email Anda<span className="text-destructive">*</span>
          </Label>
          <Input placeholder="Email Anda" id="email" className="text-sm" />
        </div>
        <div className="flex flex-col space-y-2">
          <Label htmlFor="website">Nama Website</Label>
          <Input placeholder="Nama Website" id="website" className="text-sm" />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <Label htmlFor="message">Tulis Komentar Anda</Label>
        <Textarea
          id="message"
          placeholder="Write something...."
          className="text-sm"
        />
      </div>
      <Button className="mt-3 btn-gradient">
        Submit <Send />
      </Button>
    </div>
  );
};

export default CommentForm;
