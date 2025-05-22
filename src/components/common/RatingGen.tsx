import { Star } from "lucide-react";

type RatingGenProps = {
  rating: number;
};

const RatingGen: React.FC<RatingGenProps> = ({ rating }) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: rating }).map((_, index) => (
        <span key={index}>
          <Star size={16} fill="#FF9747" stroke="none" />
        </span>
      ))}
    </div>
  );
};

export default RatingGen;
