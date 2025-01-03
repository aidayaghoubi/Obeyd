import Image from "next/image";

export default function AboutUs() {
  return <div className="w-full mt-20 relative h-full px-16 my-8">
    <div className="absolute right-16 bottom-0 z-40">
      <Image
        src="/LaughChar.png"
        width={230}
        height={200}
        alt="Picture of the author"
      />
    </div>
    <div className="relative w-full h-[450px]">
      <Image
        src="/aboutUs.png"
        alt="image"
        sizes="100vw"
        objectFit="fit"
        fill
      />
    </div>

    <div className="absolute px-16 m-auto top-0">
      <h3 className="text-right mt-28 mr-20 mb-8 text-3xl font-bold">
        درباره ی عبید
      </h3>
      <p className="text-2xl px-40">
      سلام! به عبید خوش اومدی! اینجا جاییه که میتونی کلی بخندی و حال کنی. ما یه سایت باحالیم که توش میتونی جک های خنده دارت رو با بقیه به اشتراک بذاری و به جک های بقیه واکنش نشون بدی.
      </p>
    </div>
  </div>
}