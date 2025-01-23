import { TActiveTab } from "../../page";
import Avatar from "./components/Avatar";
import Tabs from "./components/Tabs";
import { motion } from "framer-motion";


interface ISideMenu {
  activeTab: TActiveTab;
  changeTab: (e: TActiveTab) => void;
}

const SideMenu = ({ activeTab, changeTab }: ISideMenu) => {


  return <motion.div
    initial={{ x: 5 }}
    animate={{ x: 0 }}
    transition={{ duration: 0.6 }}
    style={{ overflow: "hidden" }}
  >
    <div className="bg-white rounded-lg">
      <Avatar />
      <Tabs activeTab={activeTab} changeTab={changeTab} />
    </div>
  </motion.div>
}
export default SideMenu