import "./portfolio.css";
import {
  cloth_city,
  computer_store,
  dashboard_one,
  dashboard_three,
  dashboard_two,
  insurance,
  lms,
  portfolio_four,
  portfolio_one,
  portfolio_three,
  portfolio_two,
 
} from "../portfolio/data";

// import Carousel from "../carousel/Carousel";


import Carousel from "../../components/slider/Carousel";
import { Link } from "react-router-dom";

function Portfolio({ data }) {
  return (
   <div className="container">
      <div className="portfolio">
        <div className="title">
          <h3>My Projects Portfolio</h3>
          <p>I was buield Differnt Software projects some of this are:</p>
        </div>

        <div className="portfolio_all">
          <div className="portfoilo_desc">{/* <PortDesc /> */}</div>

          <div className="p-headr-box">
            <h4>Above 5 Ecomerce Mern Stack Projects</h4>
            <p>we are build above 10 mern stack proects 
            <Link className="link" to="https://github.com/GetnetAm/">
            <span className="btn-link">get source code </span></Link>
             </p>
          </div>

          <div className="portfolio_list">
            {/* <Link to="/"  className="link btn">Clik Link and get Source code</Link> */}

            <div>
              <Carousel data={computer_store} />
            </div>

            <div>
              <Carousel data={cloth_city} />
            </div>
          </div>

          <div className="p-headr-box">
            <h4>Health Insurance Managment and E-learning</h4>
            <p>we are build above 10 mern stack proects Hire it is our Link
            <Link className="link" to="https://github.com/GetnetAm/">
            <span className="btn-link">get source code </span></Link>
            </p>
          </div>

          <div className="portfolio_list">
            <div>
              <Carousel data={insurance} />
            </div>

            <div>
              <Carousel data={lms} />
            </div>
          </div>

          <div className="p-headr-box">
            <h4>Above 10 Admin Dashboard Projects</h4>
            <p>we are build above 10 mern stack proects Hire it is our Link
            <Link className="link" to="https://github.com/GetnetAm/">
            <span className="btn-link">get source code </span></Link>
            </p>
          </div>

          <div className="portfolio_list">
            <div>
              <Carousel data={dashboard_one} />
            </div>
            <div>
              <Carousel data={dashboard_two} />
            </div>

            <div>
              <Carousel data={dashboard_three} />
            </div>
          </div>

          <div className="p-headr-box">
            <h4>above 10 Personal Portfolio with ReactJs</h4>
            <p>we are build above 10 mern stack proects Hire it is our Link
            <Link className="link" to="https://github.com/GetnetAm/">
            <span className="btn-link">get source code </span></Link>
            </p>
          </div>

          <div className="portfolio_list">
            <div>
              <Carousel data={portfolio_one} />
            </div>
            <div>
              <Carousel data={portfolio_two} />
            </div>

            <div>
              <Carousel data={portfolio_three} />
            </div>

            <div>
              <Carousel data={portfolio_four} />
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Portfolio;
