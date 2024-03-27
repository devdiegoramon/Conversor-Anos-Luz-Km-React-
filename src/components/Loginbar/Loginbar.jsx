import React, { useState } from 'react';
import './Loginbar.css';
const Loginbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCadastroOpen, setIsCadastroOpen] = useState(false);
  const toggleMenu = () => {
    if (isLoginOpen) {
      setIsLoginOpen(false);
    }
    if (isCadastroOpen) {
      setIsCadastroOpen(false);
    }
    if (!isLoginOpen && !isCadastroOpen) {
      setIsLoginOpen(true);
    }
  };
  const toggleMenuCadastro = () => {
    setIsCadastroOpen(!isCadastroOpen);
  };
  const voltarParaLogin = () => {
    setIsCadastroOpen(false);
  };
  return (
    <div className="loginbar">
      <button className="login-button" onClick={toggleMenu}>
        <a>LOGIN</a>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </button>
      {isLoginOpen && (
        <div className="sidebar-right">
          <div className="container">
            <a className="links" onClick={toggleMenuCadastro}></a>
            <div className="content">
              <div id="login">
                <form>
                  <h1>Login</h1>
                  <p>
                    <label>Seu Email</label>
                    <input required type="email" placeholder="Seu Email" />
                  </p>
                  <p>
                    <label>Sua Senha</label>
                    <input required type="password" placeholder="Sua Senha" />
                  </p>
                  <p>
                    <input type="checkbox" />
                    <label> Continuar Logado</label>
                  </p>
                  <p>
                    <input type="submit" value="Logar" />
                  </p>
                  <p className="link">
                    Ainda não tem conta? <br />
                    <a href="#" onClick={toggleMenuCadastro}>Cadastre-se</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {isCadastroOpen && (
        <div className="sidebar-right">
          <div className="container">
            <a className="links" onClick={toggleMenuCadastro}></a>
            <div className="content">
              <div id="cadastro">
                <form>
                  <h1>Cadastro</h1>
                  <p>
                    <label>Seu Nome</label>
                    <input required type="text" placeholder="Insira Seu Nome" />
                  </p>
                  <p>
                    <label>Seu E-mail</label>
                    <input required type="email" placeholder="Insira Seu E-mail" />
                  </p>
                  <p>
                    <label>Sua Senha</label>
                    <input required type="password" placeholder="Insira Sua Senha" />
                  </p>
                  <p>
                    <input type="submit" value="Cadastrar" />
                  </p>
                  <p className="link">
                    Já tem conta? <br />
                    <a href="#" onClick={voltarParaLogin}> Voltar</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Loginbar;
