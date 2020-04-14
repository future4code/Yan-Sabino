import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { ImageLogo, FontEnter } from "../../style/Login/style"
import { connect } from "react-redux";
import { userLogin } from "../../actions/userActions";
import FormContainer from "../../components/FormContainer";

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            form: {
                email: "",
                password: ""
            }
        }
    }

    handleInputChange = e => {
        const {name, value} = e.target;
        this.setState({form: {...this.state.form, [name]: value}})
    }

    onClickLogin = e => {
        e.preventDefault()
        const {email, password} = this.state
        this.props.login(email, password)

        this.setState({
            form : {
                email: '',
                password: ''
            }
        })
    }

    render(){
        const formLoginData = [
            {
                label: "E-mail",
                name: "email",
                placeholder: "email@email.com",
                required: true,
                type: "text",
                value: this.state.form.email,
                onChange: this.handleInputChange,
                autoComplete: "email"
            },
            {
                label: "Senha",
                name: "password",
                placeholder: "Senha",
                required: true,
                type: "text",
                value: this.state.form.password,
                onChange: this.handleInputChange,
                autoComplete: "password"
            },
        ]

        return(
            <div>
                <FormContainer
                formInputs = {formLoginData}
                buttonText = "Criar"
                onClickCriar = {this.onClickToSignUp}
                />
            </div>
        )
    }
}

export const mapDispatchToProps = (dispatch) => ({
    login: (email, password) => dispatch(userLogin(email,password))
})

export default connect(null, mapDispatchToProps)(Login)