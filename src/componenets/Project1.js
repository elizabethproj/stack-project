import "./Project1.css";
function Project1() {
  return (
    <div className="project1-cont active">
      <div className="project-header">
        <h2>Windbnb</h2>
      </div>
      <div className="about-text">
        <p>
          This project was gotten via devChallenges, and I choose to build it in
          order to enhance my react skills. This project involves creating an
          Airbnb website where users can check the availability of rooms based
          on the number of guests and the city they choose to stay in. This
          project was created with HTML, CSS and React.
        </p>
        <h3 className="project-link">
          <a
            href="https://wiind-bnb.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <span>View Site</span>
          </a>
          <br />
        </h3>
      </div>
    </div>
  );
}

export default Project1;
