"use client";

import { Typewriter } from "react-simple-typewriter";

type TypeWriterTextType = {
  words?: string[];
};

const TypeWriterText: React.FC<TypeWriterTextType> = ({ words }) => {
  const typewriterOptions = {
    words: words ? words : ["Sejak 2002.", "Terbaik.", "Profesional."],
    loop: false,
    cursor: true,
    cursorStyle: "|",
  };

  return (
    <span className="theme-gradient text-primary">
      <Typewriter
        words={typewriterOptions.words}
        loop={typewriterOptions.loop}
        cursor={typewriterOptions.cursor}
        cursorStyle={typewriterOptions.cursorStyle}
      />
    </span>
  );
};

export default TypeWriterText;
