import { Outlet } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

const BaseScreen = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <main className="main">
        <Outlet />
        <main>
          <Footer />
        </main>
      </main>
    </div>
  );
};
export default BaseScreen;
