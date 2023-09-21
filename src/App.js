import React from "react";
import "./App.css";
import pic from "./assets/pic.JPG";
const skills = [
  {
    skill: "Html",
    color: "#CA42AF",
    level: "Advance",
  },
  {
    skill: "Css",
    color: "#878787",
    level: "Advance",
  },
  {
    skill: "JavaScript",
    color: "#CA42AF",
    level: "Intermediate",
  },
  {
    skill: "React",
    color: "#878787",
    level: "Basic",
  },
];
function Header() {
  return <img src={pic} alt="pic" className="headerImg" />;
}

function Description() {
  return (
    <div>
      <h2>Kosar Mirshahi</h2>
      <p>
        I am 22 years old. I have a bachelor's degree in computer engineering. I
        am a master's student in artificial intelligence. I am a front-end
        programmer with two years of work experience. I am currently learning
        React. My skills:
      </p>
    </div>
  );
}
function Skill() {
  return (
    <div>
      {skills.map((skill) => (
        <div className="skills" style={{ backgroundColor: skill.color }}>
          <p>{skill.skill}</p>
        </div>
      ))}
    </div>
  );
}
function App() {
  return (
    <div className="container">
      <Header />
      <Description />
      <Skill />
    </div>
  );
}

export default App;
