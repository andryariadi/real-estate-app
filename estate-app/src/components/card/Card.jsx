import "./card.scss";
import { Link } from "react-router-dom";
export default function Card({ item }) {
  console.log(item, "<----dicard");
  return (
    <>
      <div className="card">
        <Link to={`/${item.id}`} className="imgContainer">
          <img src={item.img} alt={item.title} />
        </Link>
        <div className="textContainer"></div>
      </div>
    </>
  );
}
