import React from 'react';

import styled from 'styled-components'

class AddTarefas extends React.Component{
    constructor(){
        super()
         this.state = {
            valorCampo: ""
         }
    } 

    


    onChangeCampo = e =>{
        this.setState({valorCampo: e.target.value})
    }
    

    render(){
        return(
            <div>
                <input
                    type="text"
                    value={this.state.valorCampo}
                    onChange={this.onChangeCampo}
                    placeholder='Digite sua Tarefa'
                />
                <button onClick={()=>{this.props.aoClicarEmAdicionar(this.state.valorCampo)}}>Adicionar</button>
            </div>
        )
    }
 }
 
 export default AddTarefas





 // componentDidMount(){
    //     const stateComoTexto = localStorage.getItem("valorInputado")
    //     console.log("componentDidMount", stateComoTexto)
    //     if(stateComoTexto){
    //         const stateSalvo = JSON.parse(stateComoTexto)
    //         this.setState({
    //             valorCampo: stateSalvo.valorCampo
    //         })
    //         }
    //     }
    
    // componentDidUpdate(){
    //     const stateComoTexto = JSON.stringify(this.state)
    //     localStorage.setItem("valorInputado", stateComoTexto)
    //     console.log(stateComoTexto)
    // }