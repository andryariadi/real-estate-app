import "./listPage.scss";
import { listData } from "../../libs/dummydata";

export default function ListPage() {
  const data = listData;

  console.log(data, "<----dilistpage");
  return (
    <>
      <div className="container">
        <div className="listContainer">
          <div className="wrapper">wrapper</div>
        </div>
        <div className="mapContainer">Map</div>
      </div>
    </>
  );
}
