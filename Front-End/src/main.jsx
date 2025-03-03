import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Courses from "./pages/Courses.jsx";
import { AppProvider } from "./context/courseContext.jsx";
import SingleCourseDetail from "./components/SingleCourseDetail.jsx";
import FAQS from "./pages/FAQS.jsx";
import Registration from "./pages/Registration.jsx";
import Fee from "./pages/Fee.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./dashboard-components/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/courses/:courseName",
        element: <Courses />,
      },
      {
        path: "/course-detail/:id",
        element: <SingleCourseDetail />,
      },
      {
        path: "/faqs",
        element: <FAQS />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/Fees",
        element: <Fee />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/dashboard/:page",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/:page/:value/:id",
        element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AppProvider>
  </StrictMode>
);
