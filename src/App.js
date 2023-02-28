import './App.css';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Home from './PortfolioContainer/Home/Home';
import Skill from './PortfolioContainer/Skills/Skill';
import Project from './PortfolioContainer/Projects/Project'
import { Route, Routes } from 'react-router';
import Navbar from './PortfolioContainer/Navbar/Navbar'


function App() {
  return (
    <div className="App">
      <Navbar/>   
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutme' element={<AboutMe/>} />
        <Route path='/skills' element={<Skill/>} />
        <Route path='/project' element={<Project/>} />
      </Routes>
      
    </div>
  );
}

export default App;
