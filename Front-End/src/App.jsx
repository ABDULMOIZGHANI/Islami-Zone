import { ToastContainer } from "react-toastify";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Outlet />
      <Footer />
      <Link to="https://wa.me/+923048725311">
        <WhatsApp src="/sectionImages/whatsapp.png" alt="WhatsApp Icon" />
      </Link>
    </>
  );
}

export default App;

const WhatsApp = styled.img`
  position: fixed;
  bottom: 90px;
  right: 25px;
  width: 65px;
  z-index: 9999;
  cursor: pointer;
`;
