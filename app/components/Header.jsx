"use client";
import Image from "next/image";
import { useRouter } from 'next/navigation'

const Header = () => {
  const router = useRouter()
  const toggleModal = () => {
    router.push('/login')
  };

  return (
    <header className="z-20 relative px-16">
      <div className="py-6 px-8 rounded-b-[50px] mx-auto bg-mainBlue flex justify-between items-center w-full">
        <div className="w-1/3">
          <h1 className="text-xl font-semibold text-mainRed">
            جوکامون
          </h1>
        </div>
        <div className="w-1/3 flex justify-center">
          <Image
            src="/logo.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="w-1/3 text-end">
          <button onClick={toggleModal} className="text-textColor font-medium py-2 px-6 rounded-lg  hover:bg-gray-100 transition duration-300">
            ورود / ثبت نام
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
