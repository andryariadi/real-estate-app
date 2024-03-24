import Slider from "../../components/slider/Slider";
import { singlePostData, userData } from "../../libs/dummydata";
import "./detailpage.scss";

export default function DetailPage() {
  const detailData = singlePostData;

  console.log(detailData, "<----disinglepage");

  return (
    <>
      <div className="detailContainer">
        <div className="details">
          <div className="wrapper">
            <Slider images={detailData.images} />
            <div className="infoContainer">
              <div className="top">
                <div className="post">
                  <h1>{detailData.title}</h1>
                  <div className="address">
                    <img src="/pin.png" alt={detailData.title} />
                    <span>{detailData.address}</span>
                  </div>
                  <div className="price">$ {detailData.price}</div>
                </div>
                <div className="user">
                  <img src={userData.img} alt={userData.name} />
                  <span>{userData.name}</span>
                </div>
              </div>
              <div className="bottom">{detailData.description}</div>
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
