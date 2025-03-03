import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Menu = () => {
  return (
    <menu className="md:bg-[#246545]">
      <ul className="md:flex-row flex flex-col items-center justify-between md:w-[85%] w-[100%] max-w-[1450px] m-auto h-[500px] md:h-[60px]">
        <Link to="/home">
          <MenuList>HOME</MenuList>
        </Link>
        <Link to="/about-us">
          <MenuList>ABOUT</MenuList>
        </Link>
        <MenuList className="relative group flex h-[60px] items-center">
          COURSES <FaAngleDown className="ml-2 mt-[-3px] " />
          <Dropdown className="group-hover:block">
            <Link to="/courses/courses-for-childrens">
              <DropdownItem>Courses for Children</DropdownItem>
            </Link>

            <Link to="/courses/courses-for-adults">
              <DropdownItem>Courses for Adults</DropdownItem>
            </Link>

            <Link to="/courses/courses-for-females">
              <DropdownItem>Courses for Females</DropdownItem>
            </Link>
            <DropdownItem className="relative group flex">
              <Link to="/courses/AllCourses" className="flex">
                All Courses
                <FaAngleDown className="ml-2 text-xs mt-[5px]" />
              </Link>
              <SubDropdown className="group-hover:block">
                <Link to="/course-detail/Qaida%20For%20Beginners">
                  <DropdownItem>Qaida For Beginners</DropdownItem>
                </Link>
                <DropdownItem>Quran Memorization</DropdownItem>
                <DropdownItem>Tafseer e Quran</DropdownItem>
              </SubDropdown>
            </DropdownItem>
          </Dropdown>
        </MenuList>
        <Link to="/faqs">
          <MenuList>FAQs</MenuList>
        </Link>

        <Link to="/registration">
          <MenuList>REGISTRATION</MenuList>
        </Link>

        <Link to="/fees">
          <MenuList>FEE</MenuList>
        </Link>

        <Link to="contact-us">
          <MenuList>CONTACT US</MenuList>
        </Link>
      </ul>
    </menu>
  );
};

export default Menu;

const MenuList = styled.li`
  font-family: "Poppins";
  font-size: 17px;
  font-weight: 500;
  color: #f9f9f9;
  cursor: pointer;
  position: relative;

  &:hover {
    color: #e2e2e2;
    transition: all 0.4s ease-in-out;
  }

  @media (max-width: 768px) {
    color: black;
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;

const Dropdown = styled.ul`
  display: none;
  position: absolute;
  background-color: #ffffff;
  color: #000;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0;
  list-style: none;
  margin-top: 235px;
  border-radius: 6px;
  z-index: 1000;
  width: 200px;

  ${MenuList}:hover & {
    display: block;
  }
`;

const DropdownItem = styled.li`
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 400;
  color: #000;
  cursor: pointer;
  white-space: nowrap;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #246545;
    color: #fff;
  }
`;

const SubDropdown = styled.ul`
  display: none;
  position: absolute;
  left: 100%;
  top: 0;
  background-color: #ffffff;
  color: #000;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0;
  list-style: none;
  margin-top: -10px;
  border-radius: 6px;
  z-index: 1000;

  ${DropdownItem}:hover & {
    display: block;
  }
`;
