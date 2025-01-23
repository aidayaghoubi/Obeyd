"use client";
import React, { useState } from "react"
import Layout from "../components/Layout"
import SideMenu from "./sections/sideMenu"
import UserInfo from "./sections/userInfo";
import LastJokes from "./sections/lastJokes";
import Logout from "./sections/logout";
import Support from "./sections/support";


const MapComponent = {
  userInfo: <UserInfo />,
  lastJokes: <LastJokes />,
  logout: <Logout />,
  services: <Support />
}
export type TActiveTab = "userInfo" | "lastJokes" | "logout" | "services"

function SignIn() {

  const [activePage, setActivePage] = useState<TActiveTab>("services")

  return <Layout>
    <div className="px-28  bg-[#F8FAFC] min-h-[100vh] flex gap-8 pb-60 justify-center items-start py-8">
      <div className="w-1/4">
        <SideMenu activeTab={activePage} changeTab={setActivePage} />
      </div>
      <div className="w-3/4 bg-red">
        {MapComponent[activePage]}
      </div>
    </div>
  </Layout>

}
export default SignIn
