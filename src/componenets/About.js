import "./About.css";
import "./Project1.css";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import Project5 from "./Project5";

function About({ open }) {
  console.log("open::", open);
  return (
    <div className="about-cont">
      <div className="about-content">
        {!open && (
          <div className="about-text-cont-flex">
            <div className="about-header">
              <h1>Welcome</h1>
            </div>
            <div className={`about-text-cont`}>
              <p className="about-text">
                I'm Elizabeth, and I've been a front-end developer for over two
                years. I specialise in creating user-friendly and dynamic web
                applications with a modern design aesthetic. I am well-versed in
                a wide range of web technologies, including HTML, CSS,
                JavaScript, React, and others. I also have a decent
                understanding of user experience (UX) and user interface (UI)
                design principles.
                <br />
                My portfolio showcases some of my recent projects, which
                demonstrate my ability to create websites and web applications
                that are visually appealing, responsive, and optimized for
                search engines. If you would like to discuss my portfolio
                further, please don't hesitate to reach out. Thank you
              </p>
            </div>
          </div>
        )}
        {"open1" === open && <Project1 />}
        {"open2" === open && <Project2 />}
        {"open3" === open && <Project3 />}
        {"open4" === open && <Project4 />}
        {"open5" === open && <Project5 />}
      </div>
    </div>
  );
}

export default About;
