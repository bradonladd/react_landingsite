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
    </div>
  );
}

const About = () => {
  return (
    <div id="aboutbox">
      <p id="abouttext">I'm a Computer Science student at Walla Walla University with experience in a wide variety of imperative and scripting languages, as well as familiarity 
          with common industry web frameworks. I’ve been programming since 2010 since an early introduction to, and 
          fascination, with video game design and coding. Later, in 2017, I shifted my focus on industry software development.
          I’m looking for a position where I can learn from team members and develop my proficiencies in a professional 
          environment, while drawing on previous experience from projects I’ve developed independently. Thanks for checking out the website!
      </p>
      <br />
      <p id="abouttext">You can check out the repo for this website using the Github link above. As it is right now, all of my projects aren't hosted on there. I'm working on
        porting my school and old personal projects to show off! Check back soon!
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
