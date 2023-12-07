import React from "react";

export default function Card({ name, position, text }) {
    console.log(text.length)
  return (
    <div className={`bg-white rounded-xl h-[136px] ${text.length > 110 ? "w-[531px]" : "w-[353px]"} px-4 py-3 space-y-3`}>
      <div className="flex space-x-3">
        <div className="font-bold text-sm lg:text-md">{name}</div>
        <div className="text-gray-400 text-sm lg:text-md">{position}</div>
      </div>
      <div>{text}</div>
    </div>
  );
}
