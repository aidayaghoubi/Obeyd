"use client"
import Image from "next/image";
import FooterLogo from './Icons/footerLogo.svg';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: false });
  return (<motion.div
    ref={ref}
    initial={{ opacity: 0 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5 }}
  >
    <footer className="bg-white h-32 relative w-full">
      <div
        style={{ width: 'calc(100% - 14rem)' }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
      >
        <div className="rounded-lg w-[100%] bg-mainBlue min-h-[200px] relative p-4 md:flex md:items-center md:justify-between">
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
              <a href="mailto:Obeyd@gmail.com">پشتیبانی: Obeyd@gmail.com</a>
            </div>
            <div className="w-1/2 flex gap-3">
              <div className="hover:scale-105 transition cursor-pointer">
                <Image
                  src="/instagram.png"
                  width={35}
                  height={35}
                  alt="Instagram"
                />
              </div>
              <div className="hover:scale-105 transition cursor-pointer">
                <Image
                  src="/twitter.png"
                  width={35}
                  height={35}
                  alt="Twitter"
                />
              </div>
              <div className="hover:scale-105 transition cursor-pointer">
                <Image
                  src="/telegram.png"
                  width={35}
                  height={35}
                  alt="Telegram"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </motion.div>
  );
};

export default Footer;
