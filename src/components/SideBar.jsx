import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import { RiSearchLine } from "react-icons/ri";
import Grid from '@mui/material/Grid';
import { AiOutlinePlus } from 'react-icons/ai'; // Import the "+" icon
import { FaUser } from "react-icons/fa";

export const Sidebar = () => {
    const [searchText, setSearchText] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleSearch = () => {
        // Perform your search logic here
        // For demonstration purposes, we'll just show an alert with the input value
        alert(`Searching for: ${searchText}`);
    };

    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleAlertClose = () => {
        setShowAlert(false);
    };

    return (
        <>
            <div style={{ display: "flex", alignItems: "center", gap: "19px", justifyContent: "space-around", marginTop: "12px" }}>
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
                    marginTop: "30px",
                    flexDirection: 'column',
                    alignItems: "flex-start",
                    gap: '2px',
                    border: '1px solid #ccc',
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


            <div className="main-outer-box">

                <div className="outer-box">
                    <div className="inner-box">
                        <div className="heading-box">
                            <div>Active Projects</div>
                            <div>07</div>
                        </div>
                        <div className="user-icon-box">
                            <FaUser className="user-icon" color="white" />
                        </div>
                    </div>
                </div>
                <div className="outer-box">
                    <div className="inner-box">
                        <div className="heading-box">
                            <div>Active Projects</div>
                            <div>07</div>
                        </div>
                        <div className="user-icon-box">
                            <FaUser className="user-icon" color="white" />
                        </div>
                    </div>
                </div>
                <div className="outer-box">
                    <div className="inner-box">
                        <div className="heading-box">
                            <div>Active Projects</div>
                            <div>07</div>
                        </div>
                        <div className="user-icon-box">
                            <FaUser className="user-icon" color="white" />
                        </div>
                    </div>
                </div>
                <div className="outer-box">
                    <div className="inner-box">
                        <div className="heading-box">
                            <div>Active Projects</div>
                            <div>07</div>
                        </div>
                        <div className="user-icon-box">
                            <FaUser className="user-icon" color="white" />
                        </div>
                    </div>
                </div>

            </div>
            

      <div  style={{
            display: "flex",
            flexDirection: "row",
            border: "2px solid black",
            alignItems: "center",
            justifyContent:"space-around"
          }}>
      <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "2px solid black",
            alignItems: "center"
          }}
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
              <h1>Post Projects</h1>
            </div>
            <div className="inner-box-2">
              <a>See All</a>
            </div>
          </div>
          <hr />
          <div>
            <div
              style={{ display: "flex", gap: "12px", flexDirection: "column" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  padding: "20px",
                  width: "320px",
                  justifyContent: "space-around"
                }}
              >
                <p>Thermal </p>
                <p>Resume review</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  padding: "20px",
                  width: "320px",
                  justifyContent: "space-around"
                }}
              >
                <p>Thermal </p>
                <p>Resume review</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  padding: "20px",
                  width: "320px",
                  justifyContent: "space-around"
                }}
              >
                <p>Thermal </p>
                <p>Resume review</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  padding: "20px",
                  width: "320px",
                  justifyContent: "space-around"
                }}
              >
                <p>Thermal </p>
                <p>Resume review</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  padding: "20px",
                  width: "320px",
                  justifyContent: "space-around"
                }}
              >
                <p>Thermal </p>
                <p>Resume review</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  padding: "20px",
                  width: "320px",
                  justifyContent: "space-around"
                }}
              >
                <p>Thermal </p>
                <p>Resume review</p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "2px solid black",
            alignItems: "center"
          }}
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
              <h1>Post Projects</h1>
            </div>
            <div className="inner-box-2">
              <a>See All</a>
            </div>
          </div>
          <hr />
          <div>
            <div
              style={{ display: "flex", gap: "12px", flexDirection: "column" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  padding: "20px",
                  width: "320px",
                  justifyContent: "space-around"
                }}
              >
                <p>Thermal </p>
                <p>Resume review</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  padding: "20px",
                  width: "320px",
                  justifyContent: "space-around"
                }}
              >
                <p>Thermal </p>
                <p>Resume review</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  padding: "20px",
                  width: "320px",
                  justifyContent: "space-around"
                }}
              >
                <p>Thermal </p>
                <p>Resume review</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  padding: "20px",
                  width: "320px",
                  justifyContent: "space-around"
                }}
              >
                <p>Thermal </p>
                <p>Resume review</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  padding: "20px",
                  width: "320px",
                  justifyContent: "space-around"
                }}
              >
                <p>Thermal </p>
                <p>Resume review</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  padding: "20px",
                  width: "320px",
                  justifyContent: "space-around"
                }}
              >
                <p>Thermal </p>
                <p>Resume review</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
        </>
    )
}
