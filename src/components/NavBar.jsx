import React, { useState, useEffect } from 'react'
import logo from "../utils/logo.png"
import Userimg from "../utils/download.webp"
// BiBarChart
import { FiLogOut } from "react-icons/fi";
import { BiBarChart } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { TbMessage2 } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";
export const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(true); // Automatically open the sidebar on larger screens
      } else {
        setIsSidebarOpen(false);
      }
    };

    // Add event listener to window resize
    window.addEventListener('resize', handleResize);

    // Initial check for screen size
    handleResize();

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="app">
      <button onClick={toggleSidebar} className="toggle-button">
        ☰
      </button>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="logo-header">

          <img width={'139px'} className='logo' src={logo} alt="" />
        </div>
        <div>

          <div>

            <ul>
              <li> <BiBarChart />Dashboard</li>
              <li><FiLayers /> Projects</li>
              <li> <FaUserFriends />Staffing</li>
              <li><TbMessage2 /> Messages</li>
            </ul>
          </div>
          <div>

            <div className="additional-content">
              <ul>
                <li><BiBarChart /> Support</li>
                <li><AiFillSetting /> Setting</li>

              </ul>
            </div>
          </div>
          <hr />
          <div>
            <div className="user-info">
              <div>
                <img className='user-img' src={Userimg} alt="" />
              </div>
              <div>
                <div>Olivia Rhye</div>
                <div>olivia@untitledui.com</div>
              </div>
              <div style={{ fontSize: "20px" }}>
                <FiLogOut />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">

      </div>
    </div>
  )
}
