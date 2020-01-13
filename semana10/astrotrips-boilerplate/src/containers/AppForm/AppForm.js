import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index'


const AppForm = props => {
    

    
        return (
            <div>
                <h1>EU SOU A APP FORM</h1>
                <Button>Salvar</Button>
            </div>
            
        )
    
}

function mapDispatchToProps(dispatch) {
    return{
        
    }

    
}

export default connect(null, mapDispatchToProps)(AppForm) 