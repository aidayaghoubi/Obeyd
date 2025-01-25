"use client"
import JokeModal from "@/app/components/AddJoke/JokeModal";
import { TActiveTab } from "../../page";
import Avatar from "./components/Avatar";
import Tabs from "./components/Tabs";
import { motion } from "framer-motion";
import { useState } from "react";


interface ISideMenu {
  activeTab: TActiveTab;
  changeTab: (e: TActiveTab) => void;
  jokeCount:number,
  likeCount:number,
}

const SideMenu = ({ activeTab, changeTab ,jokeCount,likeCount }: ISideMenu) => {

  const [showAddJokeModal, setShowAddJokeModal] = useState(false)

  function onCloseModal() {
    setShowAddJokeModal(false)
  }

  return <motion.div
    initial={{ x: 50 }}
    animate={{ x: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="bg-white rounded-xl shadow-md ">
      <Avatar likeCount={likeCount} jokeCount={jokeCount} onShowAddJokeModal={() => setShowAddJokeModal(true)} />
      <Tabs activeTab={activeTab} changeTab={changeTab} />
    </div>
    <JokeModal showModal={showAddJokeModal} onCloseModal={onCloseModal} />
  </motion.div>
}
export default SideMenu