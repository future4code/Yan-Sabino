import React from 'react';
import './App.css';
import CvFlex from './Components/CvFlex/CvFlex';
import CvFlexTitulo from './Components/CvFlexTitulo/CvFlexTitulo'
import CvFlexDescricao from './Components/CvFlexDescricao/CvFlexDescricao'

function App() {
  return (
    <CvFlex>
        <CvFlexTitulo titulo="Dados Pessoais"/>
        <CvFlexDescricao nome="Yan Sabino Corrêa" 
        imagem="https://encurtador.com.br/GVY59" texto="Graduado em Engenharia Mecatrônica pela Escola de
                Engenharia de Piracicaba (EEP). Com experiência em áreas
                como suporte técnico, marketing, pesquisa e
                desenvolvimento e atendimento ao cliente. Vivência
                internacional, proatividade e trabalho em equipe. Inglês
                Avançado, comunicando-se em espanhol e francês." />
        
        
    </CvFlex>
  );
}

export default App;
