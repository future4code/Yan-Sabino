import React from 'react';
import styled from 'styled-components'



class FiltrarTarefas extends React.Component{
   constructor(){
       super()
        this.state = {

        }
   } 
   render(){
       return(
        <div>
            <label>
                Filtro
                <select>
                    <option>Nenhum</option>
                    <option>Pendentes</option>
                    <option>Completas</option>
                </select>
            </label>
        </div>
       )
   }
}

export default FiltrarTarefas