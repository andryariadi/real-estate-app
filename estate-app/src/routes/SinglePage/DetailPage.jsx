import Slider from "../../components/slider/Slider";
import "./detailpage.scss";

export default function DetailPage() {
  return (
    <>
      <div className="detailContainer">
        <div className="details">
          <div className="wrapper">
            <Slider />
            <div className="infoContainer">
              <div className="top">Top</div>
              <div className="bottom">Bottom</div>
            </div>
          </div>
        </div>
        <div className="features">
          <div className="wrapper">Ariadi</div>
        </div>
      </div>
    </>
  );
}
