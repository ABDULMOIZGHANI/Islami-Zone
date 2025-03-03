import React, { useEffect } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon,
  BookOpenIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const DashboardSideBar = () => {
  const [open, setOpen] = React.useState(0);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [openCourse, setOpenCourse] = React.useState(0);
  const [userID, setUserID] = React.useState("");

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const handleOpenCourse = (valuee) => {
    setOpenCourse(openCourse === valuee ? 0 : valuee);
  };

  useEffect(() => {
    setUserID(localStorage.getItem("user_id"));
  }, []);

  return (
    <>
      {" "}
      <button
        className="md:hidden p-2 fixed top-4 left-4 bg-gray-800 text-white rounded-md z-50"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>
      <div
        className={`fixed inset-y-0 left-0 transform transition-transform md:relative md:translate-x-0 w-64 bg-gray-200 p-4 shadow-lg min-h-[calc(100vh-2rem)] max-h-auto z-40 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:w-72 md:block`}
      >
        <Card className="min-h-[calc(100vh-2rem)] max-h-auto w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-[#e7e7e7]">
          <List>
            <Link to="/dashboard/home">
              <Accordion open={open === 1}>
                <ListItem className="p-0" selected={open === 1}>
                  <AccordionHeader className="border-b-0 p-3">
                    <ListItemPrefix>
                      <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      Dashboard
                    </Typography>
                  </AccordionHeader>
                </ListItem>
              </Accordion>
            </Link>

            {/* ASSIGNMENT LINK BUTTON */}
            <Link to="/dashboard/assignment">
              <Accordion open={open === 1}>
                <ListItem className="p-0" selected={open === 1}>
                  <AccordionHeader className="border-b-0 p-3">
                    <ListItemPrefix>
                      <BookOpenIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      Lesson
                    </Typography>
                  </AccordionHeader>
                </ListItem>
              </Accordion>
            </Link>

            {userID === "67bea3852df014b331adcdfd" && (
              <>
                <Accordion
                  open={open === 2}
                  icon={
                    <ChevronDownIcon
                      strokeWidth={2.5}
                      className={`mx-auto h-4 w-4 transition-transform ${
                        open === 2 ? "rotate-180" : ""
                      }`}
                    />
                  }
                >
                  <ListItem className="p-0" selected={open === 2}>
                    <AccordionHeader
                      onClick={() => handleOpen(2)}
                      className="border-b-0 p-3"
                    >
                      <ListItemPrefix>
                        <ShoppingBagIcon className="h-5 w-5" />
                      </ListItemPrefix>
                      <Typography
                        color="blue-gray"
                        className="mr-auto font-normal"
                      >
                        Feedbacks
                      </Typography>
                    </AccordionHeader>
                  </ListItem>

                  <AccordionBody className="py-1">
                    <List className="p-0">
                      <Link to="/dashboard/recent-feedbacks">
                        <ListItem>
                          <ListItemPrefix>
                            <ChevronRightIcon
                              strokeWidth={3}
                              className="h-3 w-5"
                            />
                          </ListItemPrefix>
                          Rescent Feedbacks
                        </ListItem>
                      </Link>

                      <Link to="/dashboard/approved-feedbacks">
                        <ListItem>
                          <ListItemPrefix>
                            <ChevronRightIcon
                              strokeWidth={3}
                              className="h-3 w-5"
                            />
                          </ListItemPrefix>
                          Approved Feedbacks
                        </ListItem>
                      </Link>
                    </List>
                  </AccordionBody>
                </Accordion>

                <Accordion
                  open={openCourse === 2}
                  icon={
                    <ChevronDownIcon
                      strokeWidth={2.5}
                      className={`mx-auto h-4 w-4 transition-transform ${
                        openCourse === 2 ? "rotate-180" : ""
                      }`}
                    />
                  }
                >
                  <ListItem className="p-0" selected={openCourse === 2}>
                    <AccordionHeader
                      onClick={() => handleOpenCourse(2)}
                      className="border-b-0 p-3"
                    >
                      <ListItemPrefix>
                        <ShoppingBagIcon className="h-5 w-5" />
                      </ListItemPrefix>
                      <Typography
                        color="blue-gray"
                        className="mr-auto font-normal"
                      >
                        Courses
                      </Typography>
                    </AccordionHeader>
                  </ListItem>

                  <AccordionBody className="py-1">
                    <List className="p-0">
                      <Link to="/dashboard/all-courses">
                        <ListItem>
                          <ListItemPrefix>
                            <ChevronRightIcon
                              strokeWidth={3}
                              className="h-3 w-5"
                            />
                          </ListItemPrefix>
                          All Courses
                        </ListItem>
                      </Link>

                      <Link to="/dashboard/add-courses">
                        <ListItem>
                          <ListItemPrefix>
                            <ChevronRightIcon
                              strokeWidth={3}
                              className="h-3 w-5"
                            />
                          </ListItemPrefix>
                          Add Course
                        </ListItem>
                      </Link>
                    </List>
                  </AccordionBody>
                </Accordion>

                <Link to="/dashboard/all-students">
                  <ListItem>
                    <ListItemPrefix>
                      <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    All Students
                  </ListItem>
                </Link>

                <Link to="/dashboard/all-teachers">
                  <ListItem>
                    <ListItemPrefix>
                      <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Our Teachers
                  </ListItem>
                </Link>

                <Link to="/dashboard/free-trial">
                  <ListItem>
                    <ListItemPrefix>
                      <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Free Trials List
                  </ListItem>
                </Link>
              </>
            )}
          </List>
        </Card>
      </div>
    </>
  );
};

export default DashboardSideBar;
