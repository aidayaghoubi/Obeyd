import Image from "next/image";
import FooterLogo from './Icons/footerLogo.svg';

const Footer = () => {
  return (
    <footer className="bg-white h-32 relative w-full">
      <div
        style={{ width: 'calc(100% - 14rem)' }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
      >
        <div className="rounded-sm w-[100%] bg-mainBlue min-h-[200px] relative p-4 md:flex md:items-center md:justify-between">
          <div className="absolute left-20 top-0">
            <Image src={FooterLogo} alt="Footer Logo" width={350} height={350} />
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
      </div>
    </footer>
  );
};

export default Footer;
