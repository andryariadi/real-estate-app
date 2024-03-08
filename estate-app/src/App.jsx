import Navbar from "./components/navbar/Navbar";
import "./layout.scss";
import HomePage from "./routes/HomePage/HomePage";

function App() {
  return (
    <>
      <main className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <HomePage />
        </div>
      </main>
    </>
  );
}

export default App;
