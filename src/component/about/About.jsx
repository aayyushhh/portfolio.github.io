import "./about.css";

import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="../../img/1660065139133.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
         Hey! I am Ayush,currently pursuing B-Tech in Information Technology from SIES,Nerul.
        </p>
        <p className="a-desc">
        I wish to be associated with an organisation that will offer me tremendous opportunities for growth in career and provide a challenging environment that will utilise my engineering skills and abilities.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;