import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/";
import {StyledImg, ImgContainer} from "../../style/SignUp/style"
import FutureTube from "../../images/Capturar.PNG"
import FormContainer from "../../components/FormContainer"
import { userSignup } from "../../actions/userActions"

class SignUp extends Component{
    constructor(props){
        super(props)
        this.state = {
            form : {
                name: '',
                email: '',
                birthDate: '',
                password: '',
                picture: ''
            }
        }
    }

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({ form: { ...this.state.form, [name]: value } });
    }; 
    
    onClickToSignUp = () => {
        const { name, email, birthDate, password, picture } = this.state.form
        
        const nameIsValid = name && name.trim();
        const emailIsValid = email && email.trim();
        const birthDateIsValid = birthDate && birthDate.trim();
        const pictureIsValid = picture && picture.trim();
        
        if(nameIsValid && emailIsValid && birthDateIsValid && password && pictureIsValid !== ''){
            const signupData = {
                name,
                email,
                birthDate,
                password,
                picture
            }

            this.props.onSignup(signupData)

            this.setState({
                form: {
                    name: '',
                    email: '',
                    birthDate: '',
                    password: '',
                    picture: ''    
                }
            })
        }else{
            window.alert("Insira Dados Validos")
        }
    }

    render(){
        const FormSignUpData = [
            {
                label: "Nome",
                name: "name",
                placeholder: "Nome e sobrenome",
                required: true,
                type: "text",
                value: this.state.form.name,
                onChange: this.handleInputChange,
                autoComplete: 'name',  
            },
            {
                label: "E-mail",
                name: "email",
                placeholder: "E-mail",
                required: true,
                type: "text",
                value: this.state.form.email,
                onChange: this.handleInputChange,
                autoComplete: 'email',  
            },
            {
                label: "Data de Nascimento",
                name: "birthDate",
                placeholder: "Data de Nascimento",
                required: true,
                type: "text",
                value: this.state.form.birthDate,
                onChange: this.handleInputChange,
                autoComplete: 'birthDate',  
            },
            {
                label: "Senha",
                name: "password",
                placeholder: "Nome",
                required: true,
                type: "text",
                value: this.state.form.password,
                onChange: this.handleInputChange,
                autoComplete: 'password',  
            },
            {
                label: "Foto",
                name: "picture",
                placeholder: "Nome",
                required: true,
                type: "text",
                value: this.state.form.picture,
                onChange: this.handleInputChange,
                autoComplete: 'picture',  
            }
        ]
        return(
            <div>
                <ImgContainer>
                    <StyledImg src={FutureTube} alt="Logo" />
                    <h4>Cadastrar</h4>
                </ImgContainer> 

                <FormContainer 
                    formInputs = {FormSignUpData}
                    buttonText = "Criar"
                    onClickCriar = {this.onClickToSignUp}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    goToLoginPage: () => dispatch(push(routes.loginPage)),
    onSignup: (signupData) => dispatch(userSignup(signupData))
});

export default connect(null, mapDispatchToProps)(SignUp);