
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa6";

import MenuIcon from '@mui/icons-material/Menu';

import "./topbar.css";
import { Link } from "react-router-dom";

function Topbar({OpenSidebar}) {
  return (
    
   <div className="container">
     <div className="header">
      <div>
      <div className="menu-icon">
        <MenuIcon className="icon menu" onClick={OpenSidebar}/>
      </div>
      </div>

   

    

      <div className="header-right">
      <Link to="https://github.com/GetnetAm" className="link">  <FaGithub className="icon" /></Link>
        <Link to="https://stackoverflow.com/users/22035105/getnet-amsalu" className="link">  <FaStackOverflow className="icon" /></Link>

      
     
      
      </div>
      </div>


   </div>
  );
}

export default Topbar;
