import { useState } from "react";
import "./navbar.scss";
import { RiMenu5Fill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";

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
          {/* sidebar */}
          <div className="menuIcon" onClick={() => setOpen(!open)}>
            {/* <img src="/menu.png" alt="menu" /> */}
            {open ? (
              <div className="close">
                <CgClose size={35} color="#fff" />
              </div>
            ) : (
              <div className="berger">
                <RiMenu5Fill size={35} color="#fff" />
              </div>
            )}
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
