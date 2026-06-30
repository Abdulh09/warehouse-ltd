import "./Navbar.css";
import Logo from "../assets/logo.png";
import facebook from "../assets/facebook-icon.png";
import twitter from "../assets/twitter-icon.png";
import google from "../assets/google-icon.png";

const Navbar = () => {
  return (
    <>
    <div className="header-wrapper">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="nav-wrap">
          <nav className="navbar navbar-expand-lg position-static">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Service
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="social-link d-none d-lg-block">
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="#">
            <img src={google} alt="google+" />
          </a>
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
        </div>
      </div>
    </div>
  <div className="divide"></div>
  </>
  );
};

export default Navbar;
