import React from 'react';
import './App.css';
import Header from './Components/Header'
import MainContent from './Components/MainContent'
import Footer from './Components/Footer'

const addTaskActionCreator = () => {
  return {
    type: "ADD_TASK",
    payload: {value: "texto do input"}
  }
}

const deleteEachTaskActionCreator = () => {
  return {
    type: "DELETE_TASK",
    payload: {display: true}
  }
}

const checkEachTaskActionCreator = () => {
  return {
    type: "CHECK_EACH_TASK",
    payload: {check:false}
  }
} 

const checkAllTasksActionCreator = () => {
  return {
    type: "CHECK_ALL_TASKS",
    payload: {check:false}
  }
}

const removeCompleteTasksActionCreator = () => {
  return {
    type: "REMOVE_EACH_TASK",
    payload: {display: true}
  }
}

const filterTaskActionCreator = () => {
  return {
    type: "FILTER_TASK",
    payload: {}
  }
} 

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
    </div>
  );
}

export default App;
