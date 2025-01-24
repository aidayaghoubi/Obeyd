"use client";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { useRouter } from 'next/navigation'

const Header = () => {
  const router = useRouter()
  const { user } = useAuth()
  const navigateTo = (link) => {
    router.push(`/${link}`)
  };


  return (
    <header className="z-20 relative px-28">
      <div className="py-6 gap-24 rounded-b-[50px] mx-auto bg-mainBlue flex justify-center items-center w-full">
        <div className="w-2/6 flex justify-center">
          <button onClick={() => navigateTo("jokes")} className="text-[18px] font-semibold text-mainRed cursor-pointer ">
            جوکامون
          </button>
        </div>
        <div onClick={() => navigateTo("")}
          className="cursor-pointer w-2/6 flex justify-center">
          <Image
            src="/logo.png"
            width={80}
            height={80}
            alt="Picture of the author"
          />
        </div>
        <div className="w-2/6 flex justify-center text-[18px] text-end">

          {user?.name ?
            <button onClick={() => navigateTo("profile")}>
              {user?.name}
            </button>
            :
            <button onClick={() => navigateTo("login")} className="text-textColor font-medium py-2 px-6 rounded-lg  hover:bg-gray-100 transition duration-300">
              ورود / ثبت نام
            </button>
          }

        </div>
      </div>
    </header>
  );
};

export default Header;
