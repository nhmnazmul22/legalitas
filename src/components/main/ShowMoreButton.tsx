"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

type ShowMoreButtonProps = {
  children: React.ReactNode;
};

const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-5">
      <div
        className={` overflow-hidden ${
          isExpanded ? "max-h-auto" : "max-h-[350px]"
        }`}
      >
        {children}
      </div>
      <div
        className={`text-center  ${
          isExpanded ? "" : "white-background-effect"
        }`}
      >
        <Button
          variant="link"
          className="mt-2 theme-gradient relative z-1"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      </div>
    </div>
  );
};

export default ShowMoreButton;
