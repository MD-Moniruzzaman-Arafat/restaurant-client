import { Outlet } from "react-router-dom";
import Footer from "../pages/shareComponent/Footer";
import Navbar from "../pages/shareComponent/Navbar";

export default function Main() {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}
