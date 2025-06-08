import { Link } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaBriefcase, FaTools, FaGraduationCap, FaEnvelope } from 'react-icons/fa';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/"><FaHome /> Home</Link></li>
        <li><Link to="/projects"><FaProjectDiagram /> Projects</Link></li>
        <li><Link to="/experience"><FaBriefcase /> Experience</Link></li>
        <li><Link to="/skills"><FaTools /> Skills</Link></li>
        <li><Link to="/education"><FaGraduationCap /> Education</Link></li>
        <li><Link to="/contact"><FaEnvelope /> Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
