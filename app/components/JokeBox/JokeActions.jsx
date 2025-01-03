import Image from 'next/image'
import menuIcon  from '../Icons/menu.svg'
const JokeActions = () => {

  return <div>
    <div className="cursor-pointer">
    <Image
      priority
      src={menuIcon}
      alt="menu"
    />
    </div>
  </div>
}
export default JokeActions