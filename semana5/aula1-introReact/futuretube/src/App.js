import React from 'react';
import './App.css';
import './primeira.PNG'
import './2.PNG'
import './3.PNG'
import './4.PNG'
import './5.PNG'
import './6.PNG'
import './7.PNG'
import './8.PNG'

function App() {
  return (
    <div id="root">
      <header>
        <h2>FutureTube</h2>
        <input type="text" placeholder="Busca"></input>
      </header>
      <div id="corpoGeral">
      <div id="menuLateral">
        <p id="itemMenu">Início</p>
        <p id="itemMenu">Em Alta</p>
        <p id="itemMenu">Inscrições</p>
        <p id="itemMenu">Originais</p>
        <p id="itemMenu">Biblioteca</p>
        <p id="itemMenu">Histórico</p>
      </div>
      <section id="iconesVideos">
        <div className="videos">
            <a href="video1.html">
            <img src={require("./primeira.PNG")} alt=""></img></a>
            <p>Simbolo</p>
            
        </div>

        <div className="videos">
                <a href="video2.html">
            <img src={require("./2.PNG")} alt=""></img></a>
            <p>Hemacias</p>
        </div>

        <div className="videos">
            <img src={require("./3.PNG")} alt=""></img>
            <p>Prédio</p>
        </div>

        <div className="videos">
            <img src={require("./4.PNG")} alt=""></img>
            <p>Piano</p>
        </div>

        <div className="videos">
            <img src={require("./5.PNG")} alt=""></img>
            <p>Mel</p>
        </div>

        <div className="videos">
            <img src={require("./6.PNG")} alt=""></img>
            <p>Mesa</p>
        </div>

        <div className="videos">
            <img src={require("./7.PNG")} alt=""></img>
            <p>Café</p>
        </div>

        <div className="videos">
            <img src={require("./8.PNG")} alt=""></img>
            <p>Mirante</p>
        </div>
      </section>
      </div>
      <footer>
        <h1> Eu sou um footer!</h1>
      </footer>
    </div>
  )
}

export default App;
