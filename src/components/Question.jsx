import { useEffect, useState } from "react";

const TypingText = ({
  text = "Typing...",
  speed = 2,
  loop = false,
  className = "font-semibold ",
  textcolor ='text-gray-800'
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (loop) {
      setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 1500);
    }
  }, [index, text, speed, loop]);

  return (
    <span
      className={`font-sans text-xl h-[200px] sm:text-lg ${textcolor} ${className} `}
    >
      {displayedText}
      <span className="inline-block ml-0.5 animate-pulse">|</span>
    </span>
  );
};

export default TypingText;
