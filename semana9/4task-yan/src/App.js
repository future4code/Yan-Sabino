import React from 'react';
import './App.css';
import Header from './Components/Header'
import MainContent from './Components/MainContent'
import Footer from './Components/Footer'
import { Provider } from 'react-redux';
import store from './store'


function App() {
  return (
    <Provider store={store}>
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
    </Provider>
      
    
  );
}

export default App;
