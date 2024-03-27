import React from 'react';
import MenuBar from '../components/Menubar/Menubar';
import LoginBar from '../components/Loginbar/Loginbar';
import minhafoto from '../assets/images/minhafoto.png';
import delorean from '../assets/images/delorean.png';
import './Info.css';
const Info = () => {
  return (
    <>
      <nav className="navbar">
        <MenuBar />
        <LoginBar />
      </nav>
      <div className="body">
      <div className="s-home">
        <div className="left-div">
          <div id="home-text">
            <h1>Frontend<br />Developer.</h1>
            <p>Busco criar produtos front-end robustos e escaláveis, priorizando experiências de usuário excepcionais.</p>
          </div>
        </div>
        <div className="right-div">
          <div id="creator-photo" className="delayMediumReveal">
            <img src={minhafoto} alt="Minha Foto" className="creator-photo" />
          </div>
        </div>
      </div>
      <div className="second-home">
        <div className="left-div">
        <div id="delorean-photo" className="delayMediumReveal">
            <img src={delorean} alt="Minha Foto" className="creator-photo" />
          </div>
        </div>
        <div className="right-div">
        <div className="about-content">
          <div className="about-header">
            <h3>Diego Ramon</h3>
            <h2>Quem Sou Eu?</h2>
            <h3 className="subtitle">Desenvolvedor Frontend e Designer</h3>
          </div>
          <p>
           Curso Engenharia de Software, sou bolsista integral;<br/> Sou APAIXONADO por tecnologia!<br/> Meu filme favorito é De Volta Para o Futuro!<br/>
           E eu tenho uma gata que se chama Bixby.
          </p>
        </div>
        </div>
      </div>
      </div>
      <footer>
        <div>
          <p>Copyright © 2024 Todos os direitos reservados.</p>
          <div>
            <p>Desenvolvido por Diego Ramon</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Info;
