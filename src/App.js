import React from 'react'
import Intro from './components/intro/Intro'
import Topbar from './components/topbar/Topbar'
import './App.scss';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Skill from './components/skill/Skill';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <div className='app'>
      <div className="section">
      <Topbar />
        <Intro />
        <About />
        <Portfolio />
        <Skill />
        <Contact />
      </div>
    </div>
  )
}

export default App;
