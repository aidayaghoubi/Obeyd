"use client"
import { useRouter } from 'next/navigation'
import { IoArrowBack } from "react-icons/io5";


const BackButton = () => {
  const router = useRouter()

  const onClickOnBack = () => {
    router.push('/')
  };

  return <div className="absolute top-10 left-10">
    <button onClick={onClickOnBack} className="bg-[#EFF4F7]  px-5 py-2 rounded-sm cursor-pointer">
      <IoArrowBack size={28} className='hover:scale-110 transition' color='#838383'/>
    </button>
  </div>
}
export default BackButton