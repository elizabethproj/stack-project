import "./Navbar.css";
import { AiOutlineGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { ImLinkedin2 } from "react-icons/im";

function Navbar() {
  return (
    <div className="navbar-cont">
      <div className="logo">
        <h1>AE</h1>
      </div>
      <div className="menu">
        <a
          href="mailto:adegunwaanu@gmail.com?subject=Mail%20from%20dunks1980.com"
          target="_blank"
          rel="noopener"
        >
          <SiGmail className="menu-icon" />
        </a>
        <a href="https://github.com/beth-codes" target="_blank" rel="noopener">
          <AiOutlineGithub className="menu-icon" />
        </a>
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener">
          <ImLinkedin2 className="menu-icon" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
