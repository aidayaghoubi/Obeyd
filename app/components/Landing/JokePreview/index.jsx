"use client"
import Image from "next/image";
import FunnyCard from './components/FunnyCard'
import MainLogo from '../../MainLogo'
import { useRef } from "react";
import {motion, useInView } from "framer-motion";
export const FUNNIEST_JOKES = [
  {
    joke: "یارو لنگ بوده با کشتی میره سفر… وقتی برمی‌گرده رفیقش میگه خب سفر خوش گذشت؟؟ میگه نه بابا همش استرس داشتم هی می‌گفتن لنگرو بندازین تو آب؟",
    color: "white",
    bgColor: '#70A6B2',
    user: "آیدا",
    indexPos: "top"
  },
  {
    joke: 'یارو داشته جلو پمپ بنزين سيگار ميكشیده بهش ميگن آقا اينجا پمپ بنزينه سيگار نكش ميگه  برو بابا من جلو بابامم سيگار می‌كشم!',
    color: "black",
    bgColor: '#F5EEE4',
    user: "آیدا",
    indexPos: "center"
  },
  {
    joke: 'یارو میره جبهه فرداش بر می‌گرده میگن چرا برگشتی؟ میگه پدر سوخته‌ها به قصد کشت تفنگ بازی می‌کردن!',
    color: "black",
    bgColor: '#FFFFFF',
    user: "آیدا",
    indexPos: "bottom"
  },
  {
    joke: 'دو ترم پیش یه رفیق داشتم تو دو روز شیش تا امتحان داشت، از اون روز به بعد صداش زدیم سردار ازمون!',
    color: "black",
    bgColor: '#F5EEE4',
    user: "آیدا",
    indexPos: "top"
  },
  {
    joke: 'از طرف می‌پرسن: برای زلزله زده‌ها چه کمکی کردی؟ میگه: خیلی شرمندم، دستم خالی بود… انشاءالله زلزله بعدی جبران می‌کنم!',
    color: "black",
    bgColor: '#FFFFFF',
    user: "آیدا",
    indexPos: "center"
  },
  {
    joke: 'یکی از فانتزیام اینه که در حال رانندگی با عوض شدن اهنگ تغییر سرعت بدم…ولی حیف با پراید نمیشه امتحانش کرد',
    color: "white",
    bgColor: '#70A6B2',
    user: "آیدا",
    indexPos: "bottom"
  },
]

export default function Funniest() {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: false });

  return <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 70 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
  >
    <div id="jokes" className="mt-96 bg-[#EFF4F7] relative px-28 py-8 pb-60 ">
      <div className="absolute w-full left-0 h-80 top-[-16rem]">
        <Image
          src="/bgfunny.png"
          alt="image"
          sizes="100vw"
          objectFit="fit"
          fill
        />
      </div>
      <div className="flex justify-center pt-4 relative z-20 mb-16 mt-[-8rem]">
        <div className="flex items-center">
          <MainLogo />
          <h4 className="font-bold text-3xl">
            باهم بخندیم        </h4>
        </div>

      </div>
      <div className='w-full flex justify-center'>
        <div className='flex flex-wrap gap-8 justify-between items-center'>
          {FUNNIEST_JOKES?.map((joke, i) => <FunnyCard key={i} item={{ ...joke, index: i + 1 }} />)}
        </div>
      </div>

    </div>
  </motion.div>
}