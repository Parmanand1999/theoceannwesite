// Profile.js
import styles from "./profile.module.css"
import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import PersonalDetails from "../../Componants/personalDetails/personalDetails";
import Subscriptions from "../../Componants/subscriptions/subscriptions";

const Profile = () => {
  // const [user, setUser] = useState({});
  // const navigate = useNavigate();
  const [showTabs, setShowTabs] = useState([]);
  const [component, setComponent] = useState();

  const myData = {
    personalDetails: <PersonalDetails />,
    subscriptions: <Subscriptions />,
  };

  useEffect(() => {
    setComponent(myData.personalDetails);
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
    isAdmin ? setShowTabs(adminTabs) : setShowTabs(userTabs);
  }, []);

  const adminTabs = [
    {
      text: "Personal Details",
      componentName: "personalDetails",
      isAdmin: true,
      function: (userInput) => {
        console.log(userInput);
        setComponent(myData[userInput]);
      },
    },
    {
      text: "Subscriptions",
      componentName: "subscriptions",
      isAdmin: true,
      function: (userInput) => {
        const userData = JSON.parse(localStorage.getItem("oceanAllUserData"));
        if (userData.is_subscribed) {
          setComponent(myData[userInput]);
        } else {
          Swal.fire({
            title: "Not subscribed",
            text: "Please buy now to proceed ",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Buy Now",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/plans";
            }
          });
        }
      },
    },
    {
      text: "My Portal",
      componentName: "myportal",
      isAdmin: true,
      function: (userInput) => {
        const token = localStorage.getItem("oceanAllToken");
        const userData = JSON.parse(localStorage.getItem("oceanAllUserData"));
        if (userData.is_subscribed) {
          window.location.href = `http://beta.theoceann.com/login?token=${token}`;
        } else {
          Swal.fire({
            title: "Not subscribed",
            text: "Please buy now to proceed ",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Buy Now",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/plans";
            }
          });
        }

        // setComponent(myData[userInput]);
      },
    },
    {
      text: "Admin Dashboard",
      componentName: "admindashboard",
      isAdmin: true,
      function: (userInput) => {
        const userData = JSON.parse(localStorage.getItem("oceanAllUserData"));
        const token = localStorage.getItem("oceanAllToken");
        if (userData.is_subscribed) {
          window.location.href = `http://${userData.user_domain}.brocode.online/login?token=${token}`;
        } else {
          Swal.fire({
            title: "Not subscribed",
            text: "Please buy now to proceed ",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Buy Now",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/plans";
            }
          });
        }

        // setComponent(myData[userInput]);
      },
    },
  ];
  const userTabs = [
    {
      text: "Personal Details",
      componentName: "personalDetails",
      isAdmin: true,
      function: (userInput) => {
        setComponent(myData[userInput]);
      },
    },
    {
      text: "My Portal",
      componentName: "myportal",
      isAdmin: true,
      function: (userInput) => {
        const token = localStorage.getItem("oceanAllToken");
        window.location.href = `http://beta.theoceann.com/login?token=${token}`;
        // setComponent(myData[userInput]);
      },
    },
  ];

  return (
    <>
      {/* <div className="navbardiv">dfsdg</div> */}
      <div className={styles.tableBox}>
        <div className={styles.leftPart}>
          <div className={styles.imgBox}>
            <img
              src={require("../../Componants/Assets/profile-img/profile_photo.png")}
              alt=""
              className={styles.profilePhoto}
            />
          </div>

          <div className="linkBox">
            {showTabs.map((tab) => (
              <div
                className={styles.linkItems}
                onClick={() => {
                  tab.function(tab.componentName);
                }}
              >
                {tab.text}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.rightPart}>{component}</div>
      </div>
    </>
  );
};

export default Profile;
