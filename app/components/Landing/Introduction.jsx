'use client';
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const text = "عبید راهی برای خنده"

export default function Introduction() {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });

  return <div id="intro" className="w-full mt-[-45px] flex justify-center px-16">
    <div className="flex relative min-h-[60vh] rounded-2xl bg-[#EFF4F7] w-full p-2 justify-center gap-20">
      <div className="flex justify-center flex-col items-center mb-10">
        <h2 className="text-center text-4xl font-semibold">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1, // Delay each character
                duration: 0.3,
              }}
            >
              {char}
            </motion.span>
          ))}
        </h2>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          <h4 className="text-2xl mt-8 leading-10">
            سلام! به عبید خوش اومدی! اینجا جاییه که میتونی کلی بخندی و حال کنی. ما یه سایت باحالیم که <br /> توش میتونی جک های خنده دارت رو با بقیه به اشتراک بذاری و به جک های بقیه واکنش نشون بدی.
          </h4>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          <button className="text-xl hover:scale-105 transition bg-[#D21341] text-white px-12 py-2 mt-8 rounded-lg">بزن بریم</button>
        </motion.div>
      </div>
      <motion.div
        initial={{ x: 50 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="absolute z-50 right-[15%] bottom-[-60%]"
      >
        <Image
          src="/menLaugh.png"
          width={340}
          height={340}
          alt="Picture of the author"
        />
      </motion.div>
      <motion.div
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="absolute z-50 left-[15%] bottom-[-60%]"
      >
        <Image
          src="/womenLaugh.png"
          width={300}
          height={300}
          alt="Picture of the author"
        />
      </motion.div>
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