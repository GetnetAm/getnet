import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Topbar from "./global/topbar/Topbar";
import Sidebar from "./global/sidebar/Sidebar";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Certeficate from "./pages/certeficate/Certeficate";
import Education from "./pages/education/Education";
import { useState } from "react";
import TestimonialA from "./pages/testimonials/TestimonialA";
import Portfoilo from "./pages/portfolio/Portfoilo";






function App() {
  const [openSidebarToggle, setOpenSidebarToggle]= useState(false)

  const OpenSidebar=()=>{
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <>
     <div className="main-site">
     <div className="grid-container">
      
     <Topbar OpenSidebar={OpenSidebar}/>

      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

        <div className="main-container">
          <Routes>
            {/* <Route exact path="/GetnetPortfolio" element ={<Home />} />  */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />

            <Route path="/portfolio" element={<Portfoilo />} />
            <Route path="/certeficate" element={<Certeficate />} />
            <Route path="/testimonial" element={< TestimonialA/>} />
            
  
            
          </Routes>
        </div>
      </div>
     </div>
    </>
  );
}

export default App;
