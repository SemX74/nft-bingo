import {Outlet, NavLink} from "react-router-dom"
import { ReactComponent as Telegram} from "../../Misc/LinksLogo/Telegram.svg"
import { ReactComponent as Discord} from "../../Misc/LinksLogo/Discord.svg"
import { ReactComponent as Twitter} from "../../Misc/LinksLogo/Twitter.svg"
import React,{useState} from 'react';
import "./Layout.css"


const Layout = () => {
    const [isActive, setIsActive] = useState(false);
    const ToggleBar = () =>{
        if(window.innerWidth  < 1030){
            setIsActive(prev => !prev)
        }
        if(window.innerWidth  > 1030){
            setIsActive(false)
        }
    }
    return (
        <>
        <div className="Layout">
            <div className="Container">
                <header className="Header">
                    <div className="Header-logo"></div>
                    <div className="Header-links">
                        <a href=""><Twitter /></a>
                        <a href=""><Telegram /></a>
                        <a href=""><Discord /></a>
                    </div>
                    <nav  onClick={ToggleBar} className={isActive? "Opened" : "Closed"}>
                            <NavLink to='/' className={({ isActive }) => (isActive ? " Hader-nav_linkactive" : "Hader-nav_link")}>Home</NavLink>
                            <NavLink to='/History' className={({ isActive }) => (isActive ? "Hader-nav_linkactive" : "Hader-nav_link")}>History</NavLink>
                            <NavLink to='/About' className={({ isActive }) => (isActive ? "Hader-nav_linkactive" : "Hader-nav_link")}>About us</NavLink>
                            <NavLink to='/FAQ' className={({ isActive }) => (isActive ? "Hader-nav_linkactive" : "Hader-nav_link")}>FAQ</NavLink>
                    </nav>
                </header>
                <Outlet />
            </div>
        </div>
        </>
      );
}
 
export {Layout};