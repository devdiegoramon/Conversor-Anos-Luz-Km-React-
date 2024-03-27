import React, { useState } from 'react';
import MenuBar from './components/Menubar/Menubar';
import LoginBar from './components/Loginbar/Loginbar';
import './App.css';
function App() {
  const [km, setKm] = useState('');
  const [anosLuz, setAnosLuz] = useState('');
  const [conversoes, setConversoes] = useState([]);
  const [error, setError] = useState('');
  const [resultadoKm, setResultadoKm] = useState('');
  const [resultadoAnosLuz, setResultadoAnosLuz] = useState('');
  const handleKmChange = (event) => {
    const value = event.target.value.trim();
    if (value === '' || (!isNaN(value) && value >= 1)) {
      setKm(value);
      setError('');
    } else {
      setError('O valor inserido deve ser um número não negativo e maior ou igual a 1.');
    }
  };
  const handleAnosLuzChange = (event) => {
    const value = event.target.value.trim();
    if (value === '' || (!isNaN(value) && value >= 1)) {
      setAnosLuz(value);
      setError('');
    } else {
      setError('O valor inserido deve ser um número não negativo e maior ou igual a 1.');
    }
  };
  const converterParaAnosLuz = () => {
    if (km !== '') {
      const anosLuz = parseFloat(km) * 0.306601;
      setResultadoAnosLuz(`${km} km = ${anosLuz.toFixed(2)} anos-luz`);
      setConversoes([...conversoes, `${km} km = ${anosLuz.toFixed(2)} anos-luz`]);
      setKm('');
    } else {
      setError('Por favor, insira um valor para converter.');
    }
  };
  const converterParaKm = () => {
    if (anosLuz !== '') {
      const km = parseFloat(anosLuz) / 0.306601;
      setResultadoKm(`${anosLuz} anos-luz = ${km.toFixed(2)} km`);
      setConversoes([...conversoes, `${anosLuz} anos-luz = ${km.toFixed(2)} km`]);
      setAnosLuz('');
    } else {
      setError('Por favor, insira um valor para converter.');
    }
  };
  return (
    <div className="App">
      <nav className="navbar">
        <MenuBar />
        <LoginBar />
      </nav>
      <header className="App-header">
        <h1>CONVERSOR ANOS-LUZ/KM</h1>
        {error && <p className="error">{error}</p>}
        <div className="conversores">
          <div className="conversor">
            <section>
              <h2>Km para Anos-Luz:</h2>
              <input type="text" placeholder="Entre com o valor aqui em anos-luz" value={km} onChange={handleKmChange} />
              <button onClick={converterParaAnosLuz}>Converter</button>
              {resultadoAnosLuz && <p>{resultadoAnosLuz}</p>}
            </section>
          </div>
          <div className="conversor">
            <section>
              <h2>Anos-luz para Km</h2>
              <input type="text" placeholder="Entre com o valor aqui em Km" value={anosLuz} onChange={handleAnosLuzChange} />
              <button onClick={converterParaKm}>Converter</button>
              {resultadoKm && <p>{resultadoKm}</p>}
            </section>
          </div>
        </div>
        <div className="resultados">
          <table>
            <thead>
              <tr>
                <th>DATA DE MEDIÇÃO</th>
                <th>VALOR EM KM</th>
                <th>VALOR EM ANOS-LUZ</th>
              </tr>
            </thead>
            <tbody>
              {conversoes.map((conversao, index) => (
                <tr key={index}>
                  <td>{new Date().toLocaleString()}</td>
                  <td>{conversao.split('=')[0]}</td>
                  <td>{conversao.split('=')[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}
export default App;
