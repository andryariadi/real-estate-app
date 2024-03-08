import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

export default function HomePage() {
  return (
    <>
      <main className="container">
        <div className="textConteiner">
          <div className="wrapper">
            <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
            <p className="desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio nesciunt et blanditiis, illum nemo nulla temporibus facilis expedita odio in sunt rem quae ullam recusandae officiis ducimus eius harum voluptate!
            </p>
            <SearchBar />
            <div className="countContainer">
              <div className="count">
                <h1>16+</h1>
                <h2>Years of Experiances</h2>
              </div>
              <div className="count">
                <h1>200</h1>
                <h2>Award Ganied</h2>
              </div>
              <div className="count">
                <h1>2000+</h1>
                <h2>Property Ready</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <img src="/bg.png" alt="hero" />
        </div>
      </main>
    </>
  );
}
