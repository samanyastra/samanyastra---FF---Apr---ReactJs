import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

import Homepage from "./pages/HomePage/Homepage";
import AboutUs from "./pages/AboutUsPage/AboutUs";

import "./App.css";
import NavButton from "./components/Button/NavButtons";
import NavBtn from "./components/Navbar/NavBtn";
import Gallery from "./pages/Gallery/Gallery";

function App() {
  const [currPage, setCurrPage] = useState("home");

  const navBtnHandler = (e) => {
    // console.log(e.target.value);
    setCurrPage(e.target.value)
  };

  // condition ? true_values : false_values

  const navItems = [
    {
      btnText: "Home",
      btnValue: "home"
    },
    {
      btnText: "About us",
      btnValue: "about-us"
    },
    {
      btnText: "Gallery",
      btnValue: "gallery"
    },
    {
      btnText: "Explore more",
      btnValue: "explore"
    },
    {
      btnText: "Careers",
      btnValue: "careers"
    },
    {
      btnText: "Careers 2",
      btnValue: "careers-2"
    }
  ]


  // useEffect 


  return (
    <>
      <div className="page-content">
        <div className="side-navbar">
          <h2>LOGO</h2>
         {
          navItems.map(item => <NavBtn btnText={item.btnText} btnValue={item.btnValue} currPage={currPage} onClickFunction={navBtnHandler} />)
         }
          
        </div>

        <div className="content-container">
          {/* <Homepage /> */}

          {currPage === 'home' && <Homepage />}
          {currPage === 'about-us' && <AboutUs />}
          {currPage=='gallery' && <Gallery />}
          {/* <AboutUs /> */}

        </div>
      </div>
    </>
  );
}

export default App;

/**
 * styling,
 * conditional styling
 * conditional rendering
 * state elevation
 * Nav bar using the conditional rendering
 *
 */
