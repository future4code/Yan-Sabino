import React from 'react';
import '../App.css';
import styled from "styled-components";

const ActionButton = styled.button`
  transition: 0.5s;
  cursor: pointer;
  border: none;
  background: white;
  padding:0 10px ;  
  :hover {
    text-decoration: underline;
  }

  :disabled {
    opacity: 0;
  }
`;

const FilterButtons = styled.button`
  color: inherit;
  background: white;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
  :hover{
    border-color: rgba(175, 47, 47, 0.1);
  }
`


export default class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <ActionButton>Marcar todas como completas</ActionButton>
                <FilterButtons>Todas</FilterButtons>
                <FilterButtons>Pendentes</FilterButtons>
                <FilterButtons>Completas</FilterButtons>
                <ActionButton>Remover completas</ActionButton>
            </div>
        )
    }
}