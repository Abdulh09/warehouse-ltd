import Heroimg from "../assets/hero-bg.png";
import "./Hero.css";
const Hero = (props) => {
  return (
    <div className="hero-wrapper">
      <div className="hero">
        <div className="row flex-column-reverse flex-lg-row align-items-center text-center text-lg-start">
          <div className="col-lg-6">
            <h1 className="mb-0">{props.title}</h1>
            <p className="mb-0">{props.description}</p>
            <div className="cta">
              <a href="#" className="btn">
                Read More
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={Heroimg} className="d-block img-fluid mx-auto" alt="hero" loading="lazy" />
          </div>
        </div>
      </div>
      <div className="divide"></div>
    </div>
  );
};

export default Hero;
