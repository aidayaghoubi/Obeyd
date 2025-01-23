import { TActiveTab } from "@/app/profile/page";
import { ReactElement } from "react";


export type TTab = {
  title: string,
  id: TActiveTab,
  icon?: ReactElement
}
interface ITabButton {
  tab: TTab,
  activeTab: TActiveTab,
  onChangeTab: (e: TActiveTab) => void;
}

const TabButton = ({ tab, onChangeTab, activeTab }: ITabButton) => {
  const { title, id, icon } = tab

  return <div
    className={`${id === activeTab ? "bg-[#F7F9FA]" : "bg-white"} flex items-center gap-2 cursor-pointer px-4 my-4 py-2 rounded-lg`}
    onClick={() => onChangeTab(id)}>
    {icon}{title}
  </div>
}
export default TabButton