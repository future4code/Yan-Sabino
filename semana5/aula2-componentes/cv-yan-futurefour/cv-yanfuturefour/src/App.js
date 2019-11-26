import React from 'react';
import './App.css';
import CvFlex from './Components/CvFlex/CvFlex';
import CvFlexTitulo from './Components/CvFlexTitulo/CvFlexTitulo'
import CvFlexDescricao from './Components/CvFlexDescricao/CvFlexDescricao'
import CvInfos from './Components/CvInfos/CvInfos'
import CvButtom from './Components/CvButtom/CvButtom'

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
        <CvInfos imagem="https://encurtador.com.br/jEHX4" label="E-mail:" texto="yan.sabino@hotmail.com" />
        <CvInfos imagem="https://encurtador.com.br/kmCQ1" label="Endereço:" texto="Rua dos Sabias, 1234"/>
        <CvButtom imagem="https://encurtador.com.br/hmxDX" texto="Ver Mais"  />
        <CvFlexTitulo titulo="Experiências Profissionais"/>
        
    </CvFlex>
  );
}

export default App;
