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
                Hello! I'm Elizabeth, a Software Engineer with over five years of experience. My expertise lies in creating modern, user-friendly, and dynamic web applications. I have experience working with various web technologies such as HTML, CSS, JavaScript, React, and PHP, among others. Additionally, I have a good understanding of UX and UI design principles.
                  <br/>
                In my portfolio, you can find some of my recent projects that highlight my ability to create visually appealing, responsive, and SEO-optimized websites and web applications. If you'd like to discuss my portfolio in more detail, please feel free to reach out to me. Thank you!
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
