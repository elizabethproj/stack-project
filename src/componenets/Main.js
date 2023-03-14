import { useState } from "react";
import About from "./About";
import "./Main.css";
import Project from "./Project";
import Skills from "./Skills";

function Main() {
  const [open, setOpen] = useState("");

  const toggle = (item) => {
    if (item === open) {
      setOpen("");
    } else {
      setOpen(item);
    }
    console.log(open);
  };

  return (
    <div className="main-cont">
      <div className="flex-cont">
        <About toggle={toggle} open={open} />
        <Project toggle={toggle} />
      </div>
      <Skills />
    </div>
  );
}

export default Main;
