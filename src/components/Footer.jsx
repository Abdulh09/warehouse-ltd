import "./Footer.css";
import facebook from "../assets/facebook-icon.png";
import twitter from "../assets/twitter-icon.png";
import google from "../assets/google-icon.png";

const Footer = () => {
  return (
    <footer className="text-center">
      <div className="footer-top">
        <div className="container">
          <div className="row align-items-center row-gap-3">
            <div className="col-lg-2">
              <div className="social-link">
                <a href="#">
                  <img src={twitter} alt="twitter" />
                </a>
                <a href="#">
                  <img src={google} alt="google+" />
                </a>
                <a href="#" className="m-0">
                  <img src={facebook} alt="facebook" />
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Service
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              <div className="contact text-lg-start">
                <p>+4446 6778 9877</p>
                <p>4444 0000 0000</p>
                <a href="#">info@yourcompany.co.uk</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container d-flex justify-content-center justify-content-lg-between flex-wrap gap-3">
          <p>The Company Wareouse LTD.</p>
          <p>Registered Company Number: 123456</p>
          <p>Registered Address: 2nd Floor,43 Broomfeild Road, Chelmford, Essex,CM1 1SY</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
