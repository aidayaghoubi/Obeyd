import Image from "next/image";
import FunnyCard from './FunnyCard'
import MainLogo from './../MainLogo'
import Button from "../Button";
const FUNNIEST_JOKES = [
  {
    joke: "یارو لنگ بوده با کشتی میره سفر… وقتی برمی‌گرده رفیقش میگه خب سفر خوش گذشت؟؟ میگه نه بابا همش استرس داشتم هی می‌گفتن لنگرو بندازین تو آب؟",
    color: "white",
    bgColor: '#70A6B2',
    indexPos: "top"
  },
  {
    joke: 'یارو داشته جلو پمپ بنزين سيگار ميكشیده بهش ميگن آقا اينجا پمپ بنزينه سيگار نكش ميگه  برو بابا من جلو بابامم سيگار می‌كشم!',
    color: "black",
    bgColor: '#F5EEE4',
    indexPos: "center"
  },
  {
    joke: 'یارو میره جبهه فرداش بر می‌گرده میگن چرا برگشتی؟ میگه پدر سوخته‌ها به قصد کشت تفنگ بازی می‌کردن!',
    color: "black",
    bgColor: '#FFFFFF',
    indexPos: "bottom"
  },
  {
    joke: 'دو ترم پیش یه رفیق داشتم تو دو روز شیش تا امتحان داشت، از اون روز به بعد صداش زدیم سردار ازمون!',
    color: "black",
    bgColor: '#F5EEE4',
    indexPos: "top"
  },
  {
    joke: 'از طرف می‌پرسن: برای زلزله زده‌ها چه کمکی کردی؟ میگه: خیلی شرمندم، دستم خالی بود… انشاءالله زلزله بعدی جبران می‌کنم!',
    color: "black",
    bgColor: '#FFFFFF',
    indexPos: "center"
  },
  {
    joke: 'یکی از فانتزیام اینه که در حال رانندگی با عوض شدن اهنگ تغییر سرعت بدم…ولی حیف با پراید نمیشه امتحانش کرد',
    color: "white",
    bgColor: '#70A6B2',
    indexPos: "bottom"
  },
]

export default function Funniest() {
  return <div id="jokes" className="mt-20 bg-[#EFF4F7] relative px-16 py-8">
    <div className="absolute w-full left-0 h-10 top-[-30px]">
      <Image
        src="/path1.png"
        alt="image"
        sizes="100vw"
        objectFit="fit"
        fill
      />
    </div>
    <div className="absolute left-0 top-[-5rem]">
      <Image
        src="/candy.png"
        width={200}
        height={100}
        alt="Picture of the author"
      />
    </div>
    <div className="flex justify-center pt-4">
      <div className="flex items-center">
        <MainLogo />
        <h4 className="font-bold text-3xl">
          بامزه ترینامون
        </h4>
      </div>

    </div>
    <div className='w-full flex justify-center'>
      <div className='flex flex-wrap justify-between items-center px-16'>
        {FUNNIEST_JOKES.map((joke, i) => <FunnyCard key={i} item={{ ...joke, index: i + 1 }} />)}
      </div>
    </div>
    <div className="flex mt-8 justify-center">
      <div className="w-40">
        <Button disabled={false} title="بیشتر" varient="submit" />
      </div>
    </div>
  </div>
}