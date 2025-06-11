import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import api from "@/lib/config/axios";
import { ParamValue } from "next/dist/server/request/params";

type BlogType = {
  blogId: ParamValue;
  onSuccuss: () => void;
};

const CommentForm: React.FC<BlogType> = ({ blogId, onSuccuss }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const reset = () => {
    setName("");
    setEmail("");
    setWebsite("");
    setComment("");
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const comments = {
        name,
        email,
        website,
        comment,
      };

      const res = await api.put(`/api/artikel/${blogId}`, { comments });
      if (res.status === 201) {
        toast.success("Comment Submitted");
        reset();
        onSuccuss();
      }
    } catch (err: any) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <div className="my-5 w-full">
      <h3 className="text-2xl font-semibold">Tulis Komentar</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 w-full">
        <div className="flex flex-col space-y-2">
          <Label htmlFor="name">
            Nama Anda<span className="text-destructive">*</span>
          </Label>
          <Input
            placeholder="Nama Anda"
            id="name"
            className="text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <Label htmlFor="email">
            Email Anda<span className="text-destructive">*</span>
          </Label>
          <Input
            placeholder="Email Anda"
            id="email"
            className="text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <Label htmlFor="website">Nama Website</Label>
          <Input
            placeholder="Nama Website"
            id="website"
            className="text-sm"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <Label htmlFor="message">Tulis Komentar Anda</Label>
        <Textarea
          id="message"
          placeholder="Write something...."
          className="text-sm"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <Button
        className="mt-3 btn-gradient"
        disabled={loading}
        onClick={handleSubmit}
      >
        {loading ? "Submitting..." : "Submit"} <Send />
      </Button>
    </div>
  );
};

export default CommentForm;
