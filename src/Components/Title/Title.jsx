import React from "react";

const Title = ({ text }) => {
  return (
    <div>
      <p className="font-bold text-xl">{text}</p>
      <hr className="border-2 w-1/12 border-light-yellow" />
    </div>
  );
};

export default Title;
