import logo from './logo.svg';
import './App.css';
import React from 'react';


const Linkbox = () => {
  return (
    <div id="linkBox">
      <a href="https://github.com/bradonladd">
        <img className="links" id="gitlogo" src={"images/github.png"} width="50" height="50"alt="My Github"/>
      </a>
      <a href="https://www.linkedin.com/in/bradonladd/">
        <img className="links" id="linlogo" src={"images/linkedin.png"} width="50" height="50"alt="My Github"/>
      </a>
      <img className="links" id="gmllogo" src={"images/gmail.png"} width="50" height="50"alt="My Github"/>
    </div>
  );
}

const About = () => {
  return (
    <div id="aboutbox">
      <p id="abouttext">I'm a Computer Science student at Walla Walla University with experience in a wide variety of imperative and scripting languages, as well as familiarity 
          with common industry web frameworks. I’ve been programming since 2010 since an early introduction to, and 
          fascination, with video game design. Later, in 2017, I placed more of my focus on industry software development. 
          I’m looking for a position where I can learn from team members and develop my proficiencies in a professional 
          environment, while drawing on previous experience from projects I’ve developed independently. Thanks for checking out the website!
      </p>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Name">Bradon Ladd</h1>
        <Linkbox />
        <About />
      </header>
    </div>
  );
}

export default App;
