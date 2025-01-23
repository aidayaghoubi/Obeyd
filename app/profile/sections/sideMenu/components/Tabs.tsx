import { TActiveTab } from "@/app/profile/page";
import TabButton, { TTab } from "./TabButton";
import { FaUserCog } from "react-icons/fa";
import { BsEmojiLaughingFill } from "react-icons/bs";
import { IoExit } from "react-icons/io5";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import Button from "@/app/components/Button";



const TABS = [
  { id: "userInfo", title: "اطلاعات کاربری", icon: <FaUserCog /> },
  { id: "lastJokes", title: "آخرین جوک هات", icon: <BsEmojiLaughingFill /> },
  { id: "services", title: "پشتیبانی", icon: <BsFillPatchQuestionFill /> }, ,
] as TTab[]



interface ISideMenu {
  activeTab: TActiveTab;
  changeTab: (e: TActiveTab) => void;
}

const Tabs = ({ activeTab, changeTab }: ISideMenu) => {


  return <div className="px-4 py-4">
    {
      TABS.map(el => <TabButton activeTab={activeTab} onChangeTab={changeTab} tab={el} key={el.id} />)
    }
    <Button
      variant=""
      disabled={false}
      onClick={() => console.log("d")}
      title="خروج از حساب" />
  </div>
}
export default Tabs