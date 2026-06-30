import "./Card.css";
import Primarybtn from "./Primarybtn";
const Card = (props) => {
  return (
    <div className="card text-center">
      <div className="img">
        <img src={props.Cardsrc} className="" alt="CardImg" />
      </div>
      <div className="card-body p-0">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.cardText}</p>
        <Primarybtn btnText='Read More' />
      </div>
    </div>
  );
};

export default Card;
