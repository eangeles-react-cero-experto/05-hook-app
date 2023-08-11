import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export const NavbarItem = ({ label, to }) => {
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
      >
        {label}
      </NavLink>
    </>
  );
};

NavbarItem.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
