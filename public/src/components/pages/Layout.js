import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import '../../App.css';

function Layout() {

  return (
      <>
      <Navbar />

      <Outlet />

      <Footer />  
      </>
  );
}

export default Layout;
