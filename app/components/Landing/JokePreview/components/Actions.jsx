
import { FiEye } from "react-icons/fi";
import Image from "next/image";
import Like from '../../../Icons/like.svg';
import Dislike from '../../../Icons/dislike.svg';
import Poker from '../../../Icons/poker.svg';
import Reply from '../../../Icons/replay.svg';



const Actions = () => {

  return <div className="w-full">
  <div className="h-0.5 w-full bg-gray-100 mb-1 mt-1" />
    <div className="flex">
      <div className="w-3/4 flex gap-5 color-700">
        <button>
          <Image src={Reply} alt="Footer Logo" width={20} height={20} />

        </button>
        <button>
          <Image src={Like} alt="Footer Logo" width={20} height={20} />
        </button>
        <button>
          <Image src={Dislike} alt="Footer Logo" width={20} height={20} />
        </button>
        <button>
          <Image src={Poker} alt="Footer Logo" width={20} height={20} />
        </button>
      </div>
      <div className="w-1/4 gap-2 flex items-center justify-end text-gray-600">
        <button>
          <FiEye color="grey" />
        </button>
        35
      </div>
    </div>
  </div>
}
export default Actions