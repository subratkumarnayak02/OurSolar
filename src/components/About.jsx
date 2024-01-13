import React, { useState } from "react";
import data from "../planets.json";
// import monitor from "../assets/monitor2.png";

const About = () => {
  const [activePanel, setActivePanel] = useState(data[3]?.id || null);

  const handleMouseEnter = (id) => {
    setActivePanel(id);
  };

  const handleMouseLeave = () => {
    setActivePanel(null);
  };

  return (
    <div id="about">
      <h2>ABOUT</h2>
      <div className="infoP">
        <p>
          A planet is a celestial body that orbits a star. It must have enough
          mass for its gravity to pull it into a spherical shape. It also needs
          to be large enough to clear out any rocky or icy objects from its
          orbit.
        </p>
      </div>

      <div className="container">
        <div className="imgContainer">
          {data.map((planets) => {
            const isActive = activePanel === planets.id;
            return (
              <div
                className={`panel ${isActive ? "active" : ""}`}
                key={planets.id}
                onMouseEnter={() => handleMouseEnter(planets.id)}
                onMouseLeave={handleMouseLeave}
                style={{
                  backgroundImage: `url(${planets.url})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: " center right ",
                }}
              >
                <h3>{planets.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
      {/* <img src={monitor} alt="screen" /> */}
      <aside className="screen" />
      {activePanel && (
        <div className="tooltip">
          <p>
            {data.find((planet) => planet.id === activePanel)?.name}: <br />
            {data.find((planet) => planet.id === activePanel)?.info}
          </p>
        </div>
      )}
    </div>
  );
};

export default About;
