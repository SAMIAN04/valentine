import React from "react";

const Card = ({
  bgColor = "bg-pink-200",
  text,
  actions,
  gif,
  onClick,
}) => {
  return (
    <div className="w-full max-w-md text-center float">
      <div
        className={`p-5 rounded-lg shadow-md  ${bgColor} ${
          onClick ? "cursor-pointer" : ""
        }`}
        onClick={onClick}
      >
        {text}

        {gif && (
          <div className="mt-4 flex justify-center">
            <img src={gif} alt="gif" className="max-h-40 rounded" />
          </div>
        )}
      </div>

      <div className="mt-4 flex justify-center gap-6 flex-wrap">
        {actions}
      </div>
    </div>
  );
};

export default Card;
