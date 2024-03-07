import "./navbar.scss";

export default function Navbar() {
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
          <a href="/">Sign In</a>
          <a href="/" className="register">
            Sign Up
          </a>
        </div>
      </nav>
    </>
  );
}
