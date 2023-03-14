import "./Project.css";

function Project({ toggle }) {
  return (
    <div className="project-cont">
      <div className="project-content">
        <div className="project-header">
          <h2>Projects</h2>
        </div>
        <div className="project-list-container">
          <ul className="list">
            <li className="list-item" onClick={() => toggle("open1")}>
              <span>Windbnb</span>
            </li>
            <li className="list-item" onClick={() => toggle("open2")}>
              <span>Orangeline Interior</span>
            </li>
            <li className="list-item" onClick={() => toggle("open3")}>
              <span>Uranvibes London</span>
            </li>
            <li className="list-item" onClick={() => toggle("open4")}>
              <span>Minutes Calculator</span>
            </li>
            <li className="list-item" onClick={() => toggle("open5")}>
              <span>CrowdFunding</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;
