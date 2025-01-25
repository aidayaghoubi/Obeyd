"use client";
import React, { useState } from "react"
import Layout from "../components/Layout"
import SideMenu from "./sections/sideMenu"
import UserInfo from "./sections/userInfo";
import LastJokes from "./sections/lastJokes";
import Logout from "./sections/logout";
import Support from "./sections/support";
import ProtectedRoute from "../components/ProtectedJokes";
import { useJokes } from "@/context/JokeContext";
import { useAuth } from "@/context/AuthContext";
import { IJoke } from "../jokes/JokeDirectory";


export type TActiveTab = "userInfo" | "lastJokes" | "services"

function SignIn() {
  const { jokes } = useJokes()
  const { user } = useAuth()
  
  const [activePage, setActivePage] = useState<TActiveTab>("lastJokes")
  const userJokes = jokes.filter((el:IJoke) => el.creator.id  === user?.userName)
  
  const likeCount = userJokes.reduce((acc:any,curr:any)=>acc + curr.likeCount , 0)
  
  const MapComponent = {
    userInfo: <UserInfo user={user}/>,
    lastJokes: <LastJokes  userJokes={userJokes}/>,
    logout: <Logout />,
    services: <Support />
  }

  return <ProtectedRoute>
    <Layout>
      <div className="px-28  bg-[#F8FAFC] min-h-[100vh] flex gap-8 pb-60 justify-center items-start py-8">
        <div className="w-[20%]">
          <SideMenu likeCount={likeCount} jokeCount={userJokes.length} activeTab={activePage} changeTab={setActivePage} />
        </div>
        <div className="w-[80%] bg-red">
          {MapComponent[activePage]}
        </div>
      </div>
    </Layout>
  </ProtectedRoute>


}
export default SignIn
