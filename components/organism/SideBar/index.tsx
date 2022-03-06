import React from "react";
import MenuItem from "./MenuItem";
import Profile from "./Profile";
import SideBarFooter from "./SideBarFooter";

interface SideBarProps {
  activeMenu : "overview" | "transactions" | "messages" |
              "card" | "reward" | "settings" | "logout"
}
export default function SideBar(props:SideBarProps) {
  const {activeMenu} = props

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
         <MenuItem title="Overview" icon="ic-menu-overview" href="/member" active = {activeMenu == "overview"}/>
         <MenuItem title="Transactions" icon="ic-menu-transactions" href="/member/transactions" active = {activeMenu == "transactions"}/> 
         <MenuItem title="Messages" icon="ic-menu-messages" href="/member" active = {activeMenu == "messages"} />
         <MenuItem title="Card" icon="ic-menu-card" href="/member" active = {activeMenu == "card"} />
         <MenuItem title="Reward" icon="ic-menu-reward" href="/member"  active = {activeMenu == "reward"}/>
         <MenuItem title="Settings" icon="ic-menu-settings" href="/member/edit-profile" active = {activeMenu == "settings"}/>
         <MenuItem title="Log Out" icon="ic-menu-logout" href="/sign-in" active = {activeMenu == "logout"}/>
          
        </div>
       <SideBarFooter />
      </div>
    </section>
  );
}
