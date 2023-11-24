import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import PortfolioAbout from "./Portfolio-All-Files/Portfolio-About";
import PortfolioExperience from "./Portfolio-All-Files/Portfolio-Experience";
import PortfolioSkills from "./Portfolio-All-Files/Portfolio-Skills";
import PortfolioHome from "./Portfolio-All-Files/Portfolio-Home";
import Portfolioeducation from "./Portfolio-All-Files/Portfolio-education";
import PortfolioCourse from "./Portfolio-All-Files/Portfolio-Course";

function App() {

  const LinkStyle ={
      textDecoration :'none',
      color:'grey'
  }

  return (
    <div className="container-fluid">
      <BrowserRouter>
      <header className="d-flex  p-3  justify-content-between bg-dark text-white">
        <div className="ms-4 ">
          <h5><Link to="portfolio" style={LinkStyle}>Portfolio</Link></h5>
        </div>
        <div>
          <span className="me-3 p-4"><Link to="about" style={LinkStyle}>About</Link></span>
          <span className="me-3 p-4"><Link to="education" style={LinkStyle}>Education</Link></span>
          <span className="me-3 p-4"><Link to="course" style={LinkStyle}>Courses</Link></span>
          <span className="me-3 p-4"><Link to="skill" style={LinkStyle}>Technical-Skills</Link></span>
          <span className="me-3 p-4"><Link to="experience" style={LinkStyle}> Work-Experience</Link></span>
        </div>
      </header>
      <section  className='mt-1'>
        <Routes>
          <Route path="portfolio" element={<PortfolioHome />} />
          <Route path="/" element={<PortfolioHome />} />
          <Route path="about" element={<PortfolioAbout />}/>
          <Route path="education" element={<Portfolioeducation />} />
          <Route path="course" element={<PortfolioCourse />} />
          <Route path="skill" element={<PortfolioSkills />} />
          <Route path="experience" element={<PortfolioExperience />}/>
        </Routes>
      </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
