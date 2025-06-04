"use client";
import { Star } from "lucide-react";

type RatingGenProps = {
  rating: number;
  size?: number;
};

const RatingGen: React.FC<RatingGenProps> = ({ rating, size }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        if (rating < index) {
          return (
            <span key={index}>
              <Star size={size ? size : 16} fill="none" stroke="#ff8002" />
            </span>
          );
        }
        return (
          <span key={index}>
            <Star size={size ? size : 16} fill="#ff8002" stroke="#ff8002" />
          </span>
        );
      })}
    </div>
  );
};

export default RatingGen;
