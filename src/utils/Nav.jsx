import { HashLink } from "react-router-hash-link";
import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <span>
        <HashLink smooth to="/#welcome">
          Dancing Bees Apothecary
        </HashLink>
      </span>
      <span className="links">
        <HashLink smooth to="/#about">
          About
        </HashLink>
        &nbsp;&nbsp;
        <HashLink smooth to="/#locations">
          Locations
        </HashLink>
        &nbsp;&nbsp;
        <HashLink smooth to="/#contact">
          Contact
        </HashLink>
      </span>
    </nav>
  );
};

export default Nav;
