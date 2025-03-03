import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react"; // Icons
import Numbers from "../data/Number.js";
import Button from "./Button.jsx";
import OutlineBtn from "./OutlineBtn.jsx";
import Menu from "./Menu.jsx";

const Header = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));
  const navigate = useNavigate();

  // console.log("LOGGED IN VALUE", loggedIn);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Listen for storage changes (in case user logs in/out from another tab)
  useEffect(() => {
    const checkAuth = () => {
      setLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, [loggedIn]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("user_id");
    localStorage.removeItem("CNIC");
    setLoggedIn(false);
    navigate("/home");
  };

  return (
    <nav className="relative">
      {/* Top Bar with Phone Numbers */}
      <div className="bg-[#1E1E1E]">
        <div className="w-[100%] md:w-[67%] overflow-hidden flex h-[60px] items-center m-auto">
          {isMobileOrTablet ? (
            <motion.ul
              className="flex min-w-[200%] md:min-w-[150%]"
              animate={{ x: ["100%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
              {Numbers.concat(Numbers).map((number, index) => (
                <li
                  className="flex items-center gap-[8px] cursor-pointer"
                  key={index}
                >
                  <img src={number.flag} alt="" />
                  <div className="phone-numbers w-[170px] text-[#f9f9f9] poppins text-base font-normal">
                    {number.phoneNumber}
                  </div>
                </li>
              ))}
            </motion.ul>
          ) : (
            <ul className="flex space-x-8">
              {Numbers.map((number, index) => (
                <li
                  className="flex items-center gap-[8px] cursor-pointer"
                  key={index}
                >
                  <img src={number.flag} alt="" />
                  <div className="phone-numbers w-[170px] text-[#f9f9f9] poppins text-base font-normal">
                    {number.phoneNumber}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <header className="flex items-center justify-between w-[90%] md:w-[85%] max-w-[1450px] m-auto py-4">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img
              src={"/ISLAMI ZONE LOGO.png"}
              className="h-[65px]"
              alt="Islami Zone"
            />
          </Link>
        </div>

        {/* Desktop Buttons - Show Login/Signup if logged out, Logout if logged in */}
        <div className="hidden md:flex gap-[20px]">
          {loggedIn ? (
            <>
              <div onClick={handleLogout}>
                <Button value="Logout" />
              </div>
              <Link to="/dashboard/home">
                <OutlineBtn value={"Go To Dashboard"} />
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button value={"Login"} />
              </Link>
              <Link to="/signup">
                <OutlineBtn value={"Become a Teacher"} />
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {isMenuOpen ? (
            <CloseIcon
              size={32}
              className="text-white cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <MenuIcon
              size={32}
              className="text-black cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </div>
      </header>

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <Menu />
      </div>

      {/* Mobile Full-Screen Menu */}
      {isMenuOpen && (
        <div className="fixed glassyBG bg-opacity-80 z-50 flex flex-col items-center justify-center text-white h-auto p-12 w-[90%] left-[5%] top-2.5">
          {/* Close Button */}
          <button
            className="absolute top-5 right-5"
            onClick={() => setIsMenuOpen(false)}
          >
            <CloseIcon size={36} className="text-[#246545] font-bold" />
          </button>

          {/* Mobile Menu */}
          <div onClick={() => setIsMenuOpen(false)}>
            <Menu />
          </div>

          {/* Login & Signup or Logout for Mobile */}
          <div className="flex flex-col mt-5 gap-4">
            {loggedIn ? (
              <div>
                <div
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="flex justify-center mb-4"
                >
                  <Button value="Logout" />
                </div>
                <Link to="/dashboard/home">
                  <OutlineBtn value={"Go To Dashboard"} />
                </Link>
              </div>
            ) : (
              <>
                <Link
                  className="flex justify-center"
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button value={"Login"} />
                </Link>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  <OutlineBtn value={"Become a Teacher"} />
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
