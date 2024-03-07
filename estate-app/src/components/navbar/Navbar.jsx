import { useState } from "react";
import "./navbar.scss";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="left">
          <a className="logo" href="/">
            <img src="/logo.svg" alt="estate" />
          </a>
          <a className="nav-link" href="/">
            Home
          </a>
          <a className="nav-link" href="/">
            About
          </a>
          <a className="nav-link" href="/">
            Contact
          </a>
          <a className="nav-link" href="/">
            Agents
          </a>
        </div>
        <div className="right">
          <a href="/" className="login">
            Sign In
          </a>
          <a href="/" className="register">
            Sign Up
          </a>
          <div className="menuIcon">
            <img src="/menu.png" alt="menu" onClick={() => setOpen(!open)} />
          </div>
          <div className={open ? "menu active" : "menu"}>
            <a className="nav-link" href="/">
              Home
            </a>
            <a className="nav-link" href="/">
              About
            </a>
            <a className="nav-link" href="/">
              Contact
            </a>
            <a className="nav-link" href="/">
              Agents
            </a>
            <a className="nav-link" href="/">
              Sign In
            </a>
            <a className="nav-link" href="/">
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
