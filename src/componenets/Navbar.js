import "./Navbar.css";
import { AiOutlineGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { ImLinkedin2 } from "react-icons/im";

function Navbar() {
  return (
    <div className="navbar-cont">
      <div className="logo">
        <a aria-label="meun logo" href="https://elizabethadegunwa.netlify.app/"><h1>AE</h1></a>
      </div>
      <div className="menu">
        <a aria-label="email icon"
          href="mailto:adegunwaanu@gmail.com?subject=Mail%20from%20dunks1980.com"
          target="_blank"
          rel="noopener"
        >
          <SiGmail className="menu-icon" />
        </a>
        <a aria-label="github icon" href="https://github.com/beth-codes" target="_blank" rel="noopener">
          <AiOutlineGithub className="menu-icon" />
        </a>
        <a aria-label="linkedin icon" href="https://www.linkedin.com/feed/" target="_blank" rel="noopener">
          <ImLinkedin2 className="menu-icon" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
