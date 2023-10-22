import './App.css';
import video from'./video/Wolf.mp4'
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';
function App() {
  return (
    <div className="App">
      <video autoPlay muted loop className="bg-video">
        <source src={video} type="video/mp4" />
      </video>

      <div className="head">
        <p>Welcome to my PortFolio</p>
        <p>Rachit Bhalla </p>
        <div className="bio">
          I am a MERN stack developer Novice . I'm passionate about creativity and frontend development, and somtimes enjoy a bit of backend work too. I enjoy developing visually pleasing and user-friendly web applications, that become a testament to my skill.
        </div>
        <div className="social-icons">
  <a href="https://www.linkedin.com/in/rachit-bhalla-7516541b5/" target="_blank" rel="noopener noreferrer" className="icon-link">
    <FaLinkedin className="icon" />
  </a>
  <a href="https://github.com/RachitBhalla15" target="_blank" rel="noopener noreferrer" className="icon-link">
    <FaGithub className="icon" />
  </a>
  <a href="mailto:rachitbhalla91@gmail.com" className="icon-link">
    <FaEnvelope className="icon" />
  </a>
        </div>
      </div>

  
    </div>
  );
}


export default App;
