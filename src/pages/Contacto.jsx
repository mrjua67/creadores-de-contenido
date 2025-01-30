import React from "react";
import '../styles/Contacto.css'; // Si prefieres usar un archivo CSS externo

const Contacto = () => {
  return (
    <div className="contact-container">
            <h1 align="center">Hi 👋, I'm <a href="https://100rabhcsmc.github.io/Me.io/" target="_blank" rel="noopener noreferrer">mrjua67</a></h1>
            <h3 align="center">A passionate frontend & backend developer from Colombia &#127464;&#127476</h3>

            <p align="left"> 
              <img src="https://komarev.com/ghpvc/?username=mrjua67c&label=Profile%20views&color=0e75b6&style=flat" alt="mrjua67" />
            </p>

            {/* Sección con imagen y texto alineado */}
            <div className="contact-section">
                <div className="gif-container">
                    <img className="gif-image" src="https://media.giphy.com/media/SWoSkN6DxTszqIKEqv/giphy.gif" alt="GIF" />
                </div>

                <div className="text-container">
                    <h4>About Me</h4>
                    <ul className="about-list">
                        <li>🌱 I’m currently working on the advanced project TeleDomoFarm App (HTML, JAVASCRIPT, CSS, PHP).</li>
                        <li>🤝 I’m available for freelancing.</li>
                        <li>💬 Ask me about <strong>HTML, JAVASCRIPT, CSS, PHP</strong>.</li>
                        <li>📫 How to reach me: <a href="mailto:jpguerra81@ucatollica.edu.co">jpguerra81@ucatollica.edu.co</a></li>
                        <li>📄 Know about my experiences: <a href="https://github.com/mrjua67/mrjua67.github.io/blob/main/mrjua67Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
                        <li>📄 My page: <a href="https://mrjua67.github.io/" target="_blank" rel="noopener noreferrer">Website</a></li>
                    </ul>

                    <h3 align="center">
                      <img src="https://media.giphy.com/media/iY8CRBdQXODJSCERIr/giphy.gif" width="30" height="30" style={{ marginRight: '10px' }} /> 
                      Connect with me 🤝
                    </h3>

                    {/* Enlaces sociales */}
                    <div className="social-links" align="center">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/juan-pablo-guerra-porras-9608a9218/">
                            <img src="https://img.icons8.com/doodle/40/000000/linkedin--v2.png" alt="LinkedIn" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/mrjua67">
                            <img src="https://img.icons8.com/doodle/40/000000/github--v1.png" alt="GitHub" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/juan67pablo/">
                            <img src="https://img.icons8.com/doodle/40/000000/instagram-new--v2.png" alt="Instagram" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCx96BKUcYfVj24pyfepMG_w">
                            <img src="https://img.icons8.com/doodle/1x/youtube--v2.png" alt="YouTube" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/mrjua67/mrjua67.github.io/blob/main/mrjua67Resume.pdf">
                            <img src="https://img.icons8.com/plasticine/0.5x/resume.png" alt="Resume" />
                        </a>
                    </div>
                </div>
            </div>

            <hr />

            <p align="center">Credit: <a href="https://github.com/mrjua67">mrjua67</a></p>
        </div>
  );
};

export default Contacto;
