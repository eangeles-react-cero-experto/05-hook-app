import { Link } from "react-router-dom";
import { NavbarItem } from "./NavbarItem.jsx";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark rounded-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          useContext
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavbarItem label="Home" to="/" />
            <NavbarItem label={"About"} to={"about"} />
            <NavbarItem label={"Login"} to={"login"} />
          </div>
        </div>
      </div>
    </nav>
  );
};
