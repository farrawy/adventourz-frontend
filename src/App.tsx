import { Outlet } from "react-router-dom";
import Navbar from "./components/sections/Navbar";
import Footer from "./components/sections/Footer";

const App = () => {
  return (
    <>
      <Navbar isHomePage={true} />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
