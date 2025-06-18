import { Separator } from "@/components/ui/separator";
import { CommentType } from "@/types";
import Image from "next/image";

type commentsType = {
  comments: CommentType[];
};

const CommentsList: React.FC<commentsType> = ({ comments }) => {
  return (
    <div className="my-10">
      <h3 className="text-2xl font-semibold">{comments?.length} Komentar</h3>
      {comments?.length > 0 ? (
        comments?.map((comment, index) => (
          <div key={index} className=" w-full p-2 rounded-sm flex gap-3 mt-2">
            <figure className="w-14">
              <Image
                src="/images/avater.png"
                alt="logo"
                width={300}
                height={300}
              />
            </figure>
            <div className="flex flex-col gap-0">
              <p className="flex-1 text-sm leading-[22px]">
                {comment.name}
              </p>
              <p className="flex-1 text-sm text-muted-foreground mt-[1px] leading-[22px]">
                {comment.comment}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center mb-5">No komentar Found</p>
      )}

      <Separator />
    </div>
  );
};

export default CommentsList;
