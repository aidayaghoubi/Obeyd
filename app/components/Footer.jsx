import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-mainBlue py-20 relative">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <div className="absolute left-20 top-0 ">
          <Image
            src="/footerBg.png"
            width={400}
            height={400}
            alt="Footer Background"
            layout="responsive"
            sizes="(max-width: 700px) 150px, 400px"
            style={{ width: '100%', height: 'auto' }}
          />

        </div>
        <div className="flex w-full flex-wrap justify-between">
          <div className="sm:w-full lg:w-1/2 text-lg">
            <div className="flex gap-6 mb-2">
              <a href="#">فرصت های شغلی</a>
              <a href="#intro">خانه</a>
              <a href="#jokes">جوکامون</a>
            </div>
            <a href="mailto:gmail@gmail.com">پشتیبانی: gmail@gmail.com</a>
          </div>
          <div className="w-1/2 flex gap-3">
            <div>
              <Image
                src="/instagram.png"
                width={50}
                height={50}
                alt="Instagram"
              />
            </div>
            <div>
              <Image
                src="/twitter.png"
                width={50}
                height={50}
                alt="Twitter"
              />
            </div>
            <div>
              <Image
                src="/telegram.png"
                width={50}
                height={50}
                alt="Telegram"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer