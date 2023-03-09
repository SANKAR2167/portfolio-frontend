import './App.css';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Home from './PortfolioContainer/Home/Home';
import Skill from './PortfolioContainer/Skills/Skill';
import Project from './PortfolioContainer/Projects/Project';
import Navbar from './PortfolioContainer/Navbar/Navbar'
import Footer from './PortfolioContainer/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>  
      <AboutMe/>
      <Skill/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
