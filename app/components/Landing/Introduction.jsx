'use client';
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Introduction() {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });

  return  <div id="intro" className="w-full mt-[-45px] flex justify-center px-16">
    <div className="flex relative min-h-[60vh] rounded-2xl bg-[#EFF4F7] w-full pt-20 p-8 justify-center gap-20">
      <div className="flex justify-center flex-col items-center mb-10">
        <h2 className="text-center text-4xl font-semibold">عبید راهی برای خنده</h2>
        <h4 className="text-2xl mt-8 leading-10">
          سلام! به عبید خوش اومدی! اینجا جاییه که میتونی کلی بخندی و حال کنی. ما یه سایت باحالیم که <br /> توش میتونی جک های خنده دارت رو با بقیه به اشتراک بذاری و به جک های بقیه واکنش نشون بدی.
        </h4>
        <button className="text-xl bg-[#D21341] text-white px-9 py-3 mt-4 rounded-lg">بزن بریم</button>
      </div>
      {/* <div className="absolute z-50 right-[15%] bottom-[-55%]">
        <Image
          src="/menLaugh.png"
          width={280}
          height={280}
          alt="Picture of the author"
        />
      </div>
      <div className="absolute z-50 left-[15%] bottom-[-60%]">
        <Image
          src="/womenLaugh.png"
          width={280}
          height={280}
          alt="Picture of the author"
        />
      </div> */}
      <div className="z-40 absolute left-[10%] top-[3%]">
        <Image
          src="/pin.png"
          width={15}
          height={20}
          alt="Picture of the author"
        />
      </div>
      <div className="z-40 absolute right-[10%] top-[3%]">
        <Image
          src="/pin.png"
          width={15}
          height={20}
          alt="Picture of the author"
        />
      </div>
    </div>
  </div>
}