import React, { useState } from 'react'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import { RiSearchLine } from "react-icons/ri";
import Grid from '@mui/material/Grid';
import { AiOutlinePlus } from 'react-icons/ai'; // Import the "+" icon
import { FaUser } from "react-icons/fa";
import { LuFileEdit } from "react-icons/lu";
import { FaEye } from "react-icons/fa6";
import { TfiTag } from "react-icons/tfi";
import activeicon from "../utils/bookmark_8899818.png"
import { NavBar } from './NavBar';
const SideBar = () => {
  const [searchText, setSearchText] = useState('');
  const [showAlert, setShowAlert] = useState(false);



  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <>
      <div className='dashboard' style={{ display: "flex" }}>

        <NavBar />
        <div style={{ width: "76%" }} >
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "19px", justifyContent: "space-between", marginLeft: "14px", marginTop: "12px" }}>

            <div className="search-container">
              <RiSearchLine color="white" className="search-icon" />
              <input type="text" className="search-input" placeholder="Search" />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "19px" }}>
              <NotificationsNoneRoundedIcon />
              <button className="create-button">
                <AiOutlinePlus className="plus-icon" />
                Create New Project
              </button>
            </div>

          </div>

          <div
            style={{
              display: 'flex',
              marginTop: "-19px",
              flexDirection: 'column',
              alignItems: "flex-start",
              gap: '2px',
              marginLeft: " 8px",
              padding: '16px',
            }}
          >
            <div
            >
              <h1>Welcome back , Olivio</h1>
            </div>
            <div>
              Track, message researchers and submission
            </div>
          </div>


          <div className="cards" style={{ marginLeft: " 22px", }}>

            <div className="outer-box">
              <div className="inner-box">
                <div className="heading-box">
                  <div className='count-of-projects'>
                    <h1>

                      07
                    </h1>
                  </div>
                  <div>Active Projects</div>
                </div>
                <div className="user-icon-box">
                  <FaUser className="user-icon" color="white" />
                </div>
              </div>
            </div>
            <div className="outer-box">
              <div className="inner-box">
                <div className="heading-box">
                  <div className='count-of-projects'>
                    <h1>

                      04
                    </h1>
                  </div>
                  <div>Proposals</div>
                </div>
                <div className="user-icon-box">
                  <LuFileEdit className="user-icon" color="white" />
                </div>
              </div>
            </div>
            <div className="outer-box">
              <div className="inner-box">
                <div className="heading-box">
                  <div className='count-of-projects'>
                    <h1>

                      03
                    </h1>
                  </div>
                  <div>Active Jobs</div>
                </div>
                <div className="user-icon-box">
                  <TfiTag className="user-icon" color="white" />

                </div>
              </div>
            </div>
            <div className="outer-box">
              <div className="inner-box">
                <div className="heading-box">
                  <div className='count-of-projects'>
                    <h1>

                      240
                    </h1>
                  </div>
                  <div>Application</div>
                </div>
                <div className="user-icon-box">
                  <FaEye className="user-icon" color="white" />


                </div>
              </div>
            </div>

          </div>
          <div style={{
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: "32px",
            gap: "23px",
            marginLeft: "110p,,x"
          }} className="cards">
            <div
              className='mainbox'
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "280px",
                  justifyContent: "space-around",
                  borderRadius: "12px"
                }}
              >
                <div className="inner-box-1">
                  <h3>Post Projects</h3>
                </div>
                <div className="inner-box-2">
                  <a>See All</a>
                </div>
              </div>
              <hr className='hr-lines' />
              <div>
                <div
                  style={{ display: "flex", gap: "12px", flexDirection: "column" }}
                >
                  <div
                    className="boxes"
                  >
                    <div>

                      <p>Thermal protective performance an... </p>
                    </div>
                    <p>Resume review</p>
                  </div>
                  <div
                    className="boxes"
                  >
                    <div>

                      <p>Effect of heat flux and moisture cont...</p>
                    </div>
                    <p>Interview </p>
                  </div>
                  <div
                    className="boxes"
                  >
                    <p>Thermal protective performance an... </p>
                    <p>Task</p>
                  </div>
                  <div
                    className="boxes"
                  >
                    <p>Testing and evaluation of functional... </p>
                    <p>Payment </p>
                  </div>
                  <div
                    className="boxes"
                  >
                    <p>Development of thermal liner for Ext... </p>
                    <p>Closed </p>
                  </div>
                  <div
                    className="boxes"
                  >
                    <p>Testing and evaluation of functional... </p>
                    <p>Payment</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='mainbox'
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "100px",
                  justifyContent: "space-around"
                }}
              >
                <div className="inner-box-1">
                  <h3>Recent Activities</h3>
                </div>
                <div className="inner-box-2">
                  <a>See All</a>
                </div>
              </div>
              <hr className='hr-lines' />
              <div>
                <div
                  style={{ display: "flex", gap: "12px", flexDirection: "column" }}
                >
                  <div
                    className="boxes"
                  >
                    <p>Interview is scheduled for 12PM </p>
                    <p>6:29PM</p>
                  </div>
                  <div
                    className="boxes"
                  >
                    <p>Application Applied on Technical resear... </p>
                    <p>8:21PM </p>
                  </div>
                  <div
                    className="boxes"
                  >
                    <p> Interview is cancelled</p>
                    <p> 7:10PM</p>
                  </div>
                  <div
                    className="boxes"
                  >
                    <p>Application Applied on Technical resear.. </p>
                    <p>6:29PM </p>
                  </div>
                  <div
                    className="boxes"
                  >
                    <p>Recieved Proposal </p>
                    <p>6:29PM</p>
                  </div>
                  <div
                    className="boxes"
                  >
                    <p>Interview is scheduled for 12PM </p>
                    <p>6:29PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



export default SideBar