import Image from "next/image";

export default function Introduction() {
  return <div id="intro" className="w-full mt-[-45px] flex justify-center px-16">
    <div className="flex relative rounded-2xl bg-[#EFF4F7] w-full pt-20 p-8 justify-center gap-20">
      <Image
        src="/menLaugh.png"
        width={300}
        height={300}
        alt="Picture of the author"
      />
      <Image
        src="/womenLaugh.png"
        width={300}
        height={300}
        alt="Picture of the author"
      />
    <div className="absolute left-[-3%] bottom-[-2%]">
      <Image
        src="/kaktos1.png"
        width={77}
        height={110}
        alt="Picture of the author"
      />
    </div>
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