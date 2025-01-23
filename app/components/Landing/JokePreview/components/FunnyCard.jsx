"use client";
// import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import Actions from "./Actions"


export default function FunnyCard({ item }) {
  const { joke, user } = item;

  return (
    <div className="mt-10 p-2 bg-white w-full sm:w-1/2 md:w-1/2 lg:w-[calc(33%-64px)] rounded-xl shadow-lg relative">
      <div className="flex justify-between">
        <p>
          {user}
        </p>
        <button>
          <BsThreeDotsVertical color="grey" />
        </button>
      </div>
      <div className="max-h-20 min-h-20  my-4">
        <p>
          {joke}
        </p>
      </div>
      <Actions />
    </div>
  );
}