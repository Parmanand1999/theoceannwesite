// import "../styles/navbar.css";
import styles from "../styles/navbar.module.css";
import React, { useEffect, useMemo, useState } from "react";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
// import { spinnerStore } from "../store/globalStore";
// import { BiSolidDownArrow } from "react-icons/bi";
import { FaPen } from "react-icons/fa";
import { IoLockOpen } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useIsMobile from "../customHooks/useWindowSize";
import { SubMenu } from "./SubMenu";
import { MobileDropDown } from "./MobileDropDown";
import OceannLogo from "./Assets/signup-img/company_logo.svg";
import { SubMenuForSolutionKnowledgeHub } from "./subMenuForSolutionKnowledgeHub";
const Navbar = () => {
  const navigate = useNavigate();
  const subMenuProductContent = [
    {
      route: "/product/pre-trade-intelligence",
      title: "Trade Intelligence",
      logo: "",
      list: [
        "AI based Email Solution  for shipping",
        "Market Screens- Tonnage, Cargo trade",
        "Market Demand and Supply Analytics",
        "Map Overlay, AI enable Estimate",
        "Live Tracking, Bunker Live, Port Data",
        "Chatbot, Whatsapp, Notifications",
      ],
    },
    {
      route: "/product/oceann-zero",
      title: "Decarbonisation",
      logo: "",
      list: [
        "Voyage Optimisation",
        "Route Optimisation",
        "Weather Optimisation",
        "CII- Carbon Emissions Optimisation",
        "Predictive CII, EU ETS",
        "Voyage Reporting and Performance",
        "EU/UK MRV & Compliance report",
      ],
    },
    {
      route: "/product/chartering",
      title: "Chartering",
      logo: "",
      list: [
        "TC,VC & all Contract Management ",
        "Dynamic Voyage Estimate",
        "Cargo and Vessel Scheduling",
        "Freight Calculations Matrix",
        "Pooling",
        "Cargo Trade & Risk Management",
      ],
    },
    {
      route: "/product/operations",
      title: "Operation",
      logo: "",
      list: [
        "Voyage Management & Planning",
        "Voyage Scheduling ",
        "Bunker Hedging and Planning",
        "Port Disbursement Management",
        "Laytime and Claim Management",
        "Off hire and delay",
        "Freight Management",
      ],
    },
    {
      route: "/product/oceann-finance",
      title: "Finance",
      logo: "",
      list: [
        "Dynamic Voyage P&L",
        "Hire Payable & receivable",
        "Accounting management",
        "FFI, IFI and all freight invoicing",
        "TC Hire payable & Receivable",
        "Supplier invoicing and accounting",
        "All Financial Report",
      ],
    },
    {
      route: "/product/oceann-analytics",
      title: "Analytics And reporting",
      logo: "",
      list: [
        "Voyage Financial report",
        "Vessel Annual financial report",
        "Pooling annual report",
        "Bunker market performance report",
        "Voyage annual report",
        "Balance sheet",
      ],
    },
  ];
  const subMenuSolutionContent = [
    {
      route: "/solution/oceann-vm",
      title: "OceannVM ",
      logo: "",
      list: ["Integrated Freight Management Platform"],
    },
    {
      route: "/solution/oceann-mail",
      title: "OceannMail",
      logo: "",
      list: ["AI Enable Communication Intelligence"],
    },
    {
      route: "/product/oceann-zero",
      title: "OceannZero ",
      logo: "",
      list: ["Decarbonisation"],
    },
    {
      route: "/solution/oceann-bi",
      title: "OceannBI ",
      logo: "",
      list: ["Report & Analytics"],
    },

    {
      route: "/solution/oceann-ai",
      title: "OceannAI ",
      logo: "",
      list: ["AI Enable Trade Intelligence"],
    },
    {
      route: "/solution/oceann-api",
      title: "OceannAPI ",
      logo: "",
      list: ["Connecting digital voids with effective bridges"],
    },
  ];
  const SubMneuknowledgeHub = [
    {
      route: "/knowledge-Hub/news",
      title: "News",
      logo: "",
      list: [
        "Discover our latest news and innovations for easier global trade.",
      ],
    },
    {
      route: "/knowledge-Hub/events",
      title: "Events",
      logo: "",
      list: ["The Oceann engage in diverse events, join us to drive change."],
    },
  ];
  const [isNavOpen, setNavOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const [dropdownMenu, setIsDropdownMenu] = useState([]);
  const { isMobile } = useIsMobile();
  const isMobileView = useMemo(() => isMobile, [isMobile]);

  // const { isLoading, setIsLoading } = spinnerStore();
  const [isMenuVisible, setMenuVisible] = useState(false);
  const handleMouseEnter = () => {
    setMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setMenuVisible(false);
  };

  const loginMenu = [
    {
      navigateUrl: "/signup",
      text: "Sign Up",
      icon: () => {
        return <FaPen />;
      },
    },
    {
      navigateUrl: "/login",
      text: "Login",
      icon: () => {
        return <IoLockOpen />;
      },
    },
  ];

  const signupMenu = [
    {
      navigateUrl: "/login",
      text: "Login",
      icon: () => {
        return <IoLockOpen />;
      },
    },
  ];

  const profileMenu = [
    {
      navigateUrl: "/profile",
      text: "Profile",
      icon: () => {
        return <FaUserAlt />;
      },
    },
    {
      navigateUrl: "/login",
      text: "Log Out",
      isLogout: true,
      icon: () => {
        return <RiLogoutBoxLine />;
      },
    },
  ];

  const handleBodyClick = (event) => {
    const clickedElement = event.target;
    if (
      !clickedElement.closest(".myDropdown") &&
      !clickedElement.closest("#excludedElement")
    ) {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("oceanAllToken");
    const signUp = JSON.parse(localStorage.getItem("oceanAllSignupData"));
    document.body.addEventListener("click", handleBodyClick);
    if (signUp) {
      setIsDropdownMenu(signupMenu);
    } else if (token) {
      setIsDropdownMenu(profileMenu);
    } else {
      setIsDropdownMenu(loginMenu);
    }
  }, []);

  const dropdownHandler = () => {
    setIsDropdown(!isDropdown);
    // setIsLoading(!isLoading);
    const token = localStorage.getItem("oceanAllToken");
    const userData = localStorage.getItem("oceanAllSignupData");

    if (token) {
      setIsDropdownMenu(profileMenu);
    } else if (userData) {
      setIsDropdownMenu(signupMenu);
    } else {
      setIsDropdownMenu(loginMenu);
    }
  };

  const logoutFunction = () => {
    // console.log("logout function running");
    localStorage.removeItem("oceanAllToken");
    localStorage.removeItem("oceanAllUserData");
    localStorage.removeItem("oceanAllPaymentSession");
    localStorage.removeItem("isAdmin");
  };

  return (
    <div className="relative z-50  h-[15vh]">
      <div className="bg-[#003E78] z-10 h-[15vh] fixed text-white flex justify-between top-[0rem] right-0 left-0">
        {/* navbar logo */}
        <div className="ml-[2.24rem] max-sm:ml-3 flex justify-center items-center">
          <Link to="/">
            <img
              className="h-[4rem] max-sm:h-[3rem] max-sm:-[]"
              src={OceannLogo}
              alt=""
            />
          </Link>
        </div>
        {isMobileView ? (
          <div
            className={`w-full overflow-y-auto sm:w-[40%] h-[100vh] flex z-50  flex-col bg-[#003E78] transition-all duration-300
          ${!isNavOpen ? "right-[-200vw]" : "right-[0]"} fixed`}
          >
            <img
              className="h-[100px]  static ml-4 mb-4 w-[150px]"
              src={OceannLogo}
              alt=""
            />
            {/* mobile menu list */}
            <ul className="flex flex-col justify-center  capitalize  text-[1rem] text-white w-full text-uppercase  font-normal gap-[2rem]">
              <div className="flex gap-[2rem] px-4 items-center">
                <button
                  // onClick={handleBookDemobtn}
                  className="bg-[#F39C12]  max-sm:text-[.9rem]  text-white font-semibold py-1 px-2  text-[1rem] rounded-md shadow-md focus:outline-none "
                >
                  BOOK DEMO
                </button>

                <AiOutlineUser className="text-[2rem] max-xl:text-[1rem]" />
              </div>
              <Link to={"/product"}>
                <MobileDropDown
                  setNavOpen={setNavOpen}
                  page={"product"}
                  list={subMenuProductContent}
                />
              </Link>
              <Link to={"/solution"}>
                <MobileDropDown
                  setNavOpen={setNavOpen}
                  page={"solution"}
                  list={subMenuSolutionContent}
                />
              </Link>
              <Link
                onClick={() => setNavOpen(false)}
                className="px-4"
                to="/platform"
              >
                The Platform
              </Link>

              <MobileDropDown
                setNavOpen={setNavOpen}
                page={"knowledge-hub"}
                list={SubMneuknowledgeHub}
              />
              <Link
                onClick={() => setNavOpen(false)}
                className="px-4"
                to="/about-us"
              >
                {" "}
                About Us
              </Link>
              <Link
                onClick={() => setNavOpen(false)}
                className="px-4"
                to="plans"
              >
                {" "}
                plans
              </Link>
              {/* <Link className="px-4" to="/contact">Contact us</Link> */}
            </ul>
          </div>
        ) : (
          <div
            className={`flex gap-[2rem]  justify-between relative xl:mx-[4rem] xl:text-[1.2rem]  justify-items-center place-items-center   max-lg:text-[1rem] max-lx:text-[1.2rem] font-[Roboto]  text-[1rem] `}
          >
            <div className="flex  gap-[1rem] xl:gap-[3rem]">
              <div className="flex gap-4">
                <div className="flex gap-[1rem]  relative">
                  <SubMenu
                    page={"Products"}
                    subMenuProductContent={subMenuProductContent}
                    key={"product"}
                  />
                  {/* no need to use the same component to show the menu in navar on hover */}

                  <SubMenuForSolutionKnowledgeHub
                    submenuList={subMenuSolutionContent}
                    page={"Solutions"}
                  />
                </div>

                <ul className="flex items-center gap-[1rem]">
                  <Link to="/platform" className="hover:text-blue-400">
                    The Platform
                  </Link>

                  <div className="flex gap-[1.2rem]  relative">
                    <div>
                      <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="flex gap-2 items-center"
                      >
                        <Link to={`#`} className="hover:text-blue-400">
                          {/* {page === "#" ? "Knowledege-hub" : page} */}
                          Knowledge Hub
                        </Link>

                        {isMenuVisible && (
                          <div className="top-[1.5rem] min-w-[768px] px-4 flex justify-center items-center   absolute left-[-12rem]">
                            <div className="bg-white rounded-lg mt-[1.5rem] pb-[1rem] justify-center gap-[1rem] px-[1rem]">
                              {SubMneuknowledgeHub.map(
                                ({ route, title, logo, list }) => {
                                  return (
                                    <div className="mt-[.5rem] text-black">
                                      <div>
                                        <h3 className="text-[1rem] font-semibold font-[Roboto] w-[80%] border-b-2 mb-2 bg-white hover:border-gray-700 x-[.4rem] py-[.4rem]">
                                          <Link to={route}>{title}</Link>
                                        </h3>
                                        {/* <hr className="w-[40%] h-[3px] mb-2  rounded-lg hover:bg-gray-200" /> */}
                                      </div>
                                      <ul className="font-[Roboto] min-w-[200px]  gap-2">
                                        {list.map((subList) => {
                                          return (
                                            <Link to={route}>
                                              <li className="text-[.9rem]">
                                                {subList}
                                              </li>
                                            </Link>
                                          );
                                        })}
                                      </ul>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <Link to="/about-us" className="hover:text-blue-400">
                    About Us
                  </Link>
                  <Link to="/plans" className="hover:text-blue-400">
                    Plans
                  </Link>
                  {/* <Link to="/contact" className="hover:text-blue-400">
                    Contact Us
                  </Link> */}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* mobile demo button  */}
        <div className="flex items-center   gap-[2rem] mr-[3rem]">
          {/* comment the belwo code to not showing the demo button when switching the mobile screen */}
          <Link to="/demo">
            <button className="bg-[#F39C12] text-[1rem] text-white font-[Roboto] max-sm:text-[0.6rem] font-semibold py-2 px-6 max-sm:px-2 rounded-md shadow-md focus:outline-none ">
              BOOK DEMO
            </button>
          </Link>

          <p className="flex justify-center" onClick={dropdownHandler}>
            {!isMobile && (
              <AiOutlineUser
                id="excludedElement"
                className="text-[2rem] max-xl:text-[1rem]"
              />
            )}

            {isDropdown ? (
              <div className={`${styles.myDropdown} shadow-md`}>
                {dropdownMenu.map((menu) => (
                  <li
                    onClick={() => {
                      // console.log(menu.isLogout);
                      if (menu.isLogout) {
                        logoutFunction();
                      }
                      navigate(menu.navigateUrl);
                    }}
                  >
                    <div className="flex gap-1 justify-start items-start">
                      <div className="flex justify-center items-center gap-2">
                        <div className="flex">{menu?.icon()}</div>
                        <div className="flex">
                          <p>{menu.text}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </div>
            ) : null}
          </p>
        </div>

        {/* openMobileMenu Button */}

        <div className="z-50 absolute right-0  flex justify-end h-full items-center  mr-[2rem]">
          {isMobile && (
            <button onClick={() => setNavOpen(!isNavOpen)}>
              {isNavOpen ? (
                <FaTimes size={30} />
              ) : (
                <AiOutlineMenu size={30} className="text-white text-2xl" />
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
