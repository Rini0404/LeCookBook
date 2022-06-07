// import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Logo from "../../logo.png";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faBell,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

// import avatar from "../components/avatar"
// import button from "../components/button"

function Nav() {
  const Test = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    if (Auth.loggedIn()) {
      return (
        <div className="flex items-center h-20 px-6 justify-between border-b border-gray-300 bg-blue-800 text-white relative z-50">
          <div className="h-8">
            <img image src={Logo} className="h-full" />
          </div>
          <div className="flex-1 ml-10 items-center hidden lg:flex">
            <Link to ="/">
            <a
              href="#"
              className="no-underline px-2 mr-3 text-gray-200 font-medium hover:text-blue-400"
            >
              Home
            </a>
            </Link>
            <a
              href="#"
              className="no-underline px-2 mr-3 font-medium hover:text-blue-400"
            >
              About Us
            </a>
            {/* <a
              href="#"
              className="no-underline px-2 mr-3 text-gray-200 font-medium hover:text-blue-400"
            >
              Bones
            </a>
            <a
              href="#"
              className="no-underline px-2 mr-3 text-gray-200 font-medium hover:text-blue-400"
            >
              Settings
            </a> */}
          </div>
          <div className="items-center hidden lg:flex">
            <Link to="/CookBook">
              <button text="" size="sm" className="my-2">
                {" "}
                CookBook
              </button>
            </Link>
            <a href="/" onClick={() => Auth.logout()}>
              <button text="" size="sm" className="my-2">
                {" "}
                Sign Out
              </button>
            </a>
            <FontAwesomeIcon
              icon={faBell}
              className="ml-6 text-2xl cursor-pointer"
            />
            <avatar
              image
              src={Logo}
              status="online"
              className="ml-6 cursor-pointer"
            />
          </div>
          <FontAwesomeIcon
            icon={mobileOpen ? faTimes : faBars}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white text-3xl cursor-pointer lg:hidden"
          />
          {mobileOpen && (
            <div className="bg-blue-800 absolute top-full left-0 flex flex-col w-full pb-8 lg:hidden">
              <div className="pt-4 flex-1 flex flex-col items-center text-xl">
                <Link to='/'>
                <a
                  href="#"
                  className="no-underline px-2 my-2 text-gray-200 font-medium hover:text-blue-400"
                >
                  Home
                </a>
                </Link>
                <a
                  href="#"
                  className="pt-4 no-underline px-2 my-2 font-medium hover:text-blue-400"
                >
                  About Us
                </a>
                {/* <a
                  href="#"
                  className="no-underline px-2 my-2 text-gray-200 font-medium hover:text-blue-400"
                >
                  Bones
                </a>
                <a
                  href="#"
                  className="no-underline px-2 my-2 text-gray-200 font-medium hover:text-blue-400"
                >
                  Settings
                </a> */}
                <Link to="/CookBook">
                  <button text="" size="sm" className="my-2">
                    {" "}
                    CookBook
                  </button>
                </Link>
                <a href="/" onClick={() => Auth.logout()}>
                  <button text="" size="sm" className="my-2">
                    Sign Out
                  </button>
                </a>

                <div className="my-2 flex justify-center">
                
                
                </div>
                
              </div>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div className="flex items-center h-20 px-6 justify-between border-b border-gray-300 bg-blue-800 text-white relative z-50">
          <div className="h-8">
            <img
              src= {Logo }
              className="h-full"
            />
          </div>
          <div className="flex-1 ml-10 items-center hidden lg:flex">
            <Link to = "/">
            <a
              href="#"
              className="no-underline px-2 mr-3 text-gray-200 font-medium hover:text-blue-400"
            >
              Home
            </a>
            </Link>
            <a
              href="#"
              className="no-underline px-2 mr-3 font-medium hover:text-blue-400"
            >
              About Us
            </a>
            {/* <a
              href="#"
              className="no-underline px-2 mr-3 text-gray-200 font-medium hover:text-blue-400"
            >
              Bones
            </a>
            <a
              href="#"
              className="no-underline px-2 mr-3 text-gray-200 font-medium hover:text-blue-400"
            >
              Settings
            </a> */}
          </div>
          <div className="items-center hidden lg:flex">
            <Link to="/login">
              <button text="" size="sm">
                Sign In
              </button>
            </Link>
            <Link to="/sigup">
              <button text="" size="sm">
                Sign Up
              </button>
            </Link>
          </div>
          <FontAwesomeIcon
            icon={mobileOpen ? faTimes : faBars}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white text-3xl cursor-pointer lg:hidden"
          />
          {mobileOpen && (
            <div className="bg-blue-800 absolute top-full left-0 flex flex-col w-full pb-8 lg:hidden">
              <div className="pt-4 flex-1 flex flex-col items-center text-xl">
                <Link to= '/'>
                <a
                  href="#"
                  className="no-underline px-2 my-2 text-gray-200 font-medium hover:text-blue-400"
                >
                  Home
                </a>
                </Link>
                <a
                  href="#"
                  className="pt-4 no-underline px-2 my-2 font-medium hover:text-blue-400"
                >
                  About Us
                </a>
                {/* <a
                  href="#"
                  className="no-underline px-2 my-2 text-gray-200 font-medium hover:text-blue-400"
                >
                  Bones
                </a> */}
                {/* <a
                  href="#"
                  className="no-underline px-2 my-2 text-gray-200 font-medium hover:text-blue-400"
                >
                  Settings
                </a> */}
              <div className="pb-2" >
                <Link to="/login">
                  <button text="" size="sm">
                    Sign In
                  </button>
                </Link>
                <Link to="/sigup">
                  <button size="sm">
                    Sign Up
                  </button>
                </Link>
              </div>
              </div>
            </div>
          )}
        </div>
      );
    }
  };
  return <nav>{Test()}</nav>;
}

export default Nav;
