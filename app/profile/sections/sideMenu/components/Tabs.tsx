"use client"
import { TActiveTab } from "@/app/profile/page";
import TabButton, { TTab } from "./TabButton";
import { FaUserCog } from "react-icons/fa";
import { BsEmojiLaughingFill } from "react-icons/bs";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import Button from "@/app/components/Button";
import { useAuth } from "@/context/AuthContext";



const TABS = [
  { id: "lastJokes", title: "آخرین جوک هات", icon: <BsEmojiLaughingFill /> },
  { id: "userInfo", title: "اطلاعات کاربری", icon: <FaUserCog /> },
  { id: "services", title: "پشتیبانی", icon: <BsFillPatchQuestionFill /> }, ,
] as TTab[]



interface ISideMenu {
  activeTab: TActiveTab;
  changeTab: (e: TActiveTab) => void;
}

const Tabs = ({ activeTab, changeTab }: ISideMenu) => {

  const {logout} = useAuth()

  function onLogout(){
    logout()
  }

  return <div className="px-4 py-4">
    {
      TABS.map(el => <TabButton activeTab={activeTab} onChangeTab={changeTab} tab={el} key={el.id} />)
    }
    <Button
      variant=""
      disabled={false}
      onClick={onLogout}
      title="خروج از حساب" />
  </div>
}
export default Tabs