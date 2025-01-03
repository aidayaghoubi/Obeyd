"use client";
// import Image from "next/image";

export default function FunnyCard({ item }) {
  const { joke, index, color, bgColor, indexPos } = item;
  console.log();
  const indexPosition = indexPos === "center" ? "top-[30%]" : indexPos === "bottom" ? "bottom-2" : "top-2";
  const indexBgColor = index % 2 === 0 ? "#FFE3E3" : "#C9E9D2";

  return (
    <div className="mt-20 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 relative">
      <div
        className={`${indexPosition} sm:right-[-5%] lg:right-[-3%] right-[-8%] z-10 h-[70px] flex items-center justify-center rounded-full text-3xl w-[70px] absolute`}
        style={{ backgroundColor: indexBgColor }}
      >
        <p className="mr-[-15px]">{index}</p>
      </div>
      <div
        className="relative flex items-center justify-center min-h-[150px] z-40 text-base rounded-xl p-5 py-10 mx-4 sm:mx-8"
        style={{ color: color, backgroundColor: bgColor }}
      >
        <p>
          {joke}
        </p>
      </div>
    </div>
  );
}