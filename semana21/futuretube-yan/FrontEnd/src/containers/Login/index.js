import React from "react";
import { connect } from "react-redux";
import { userLogin } from "../../actions/userActions";
import FormContainer from "../../components/FormContainer";
import {StyledImg, ImgContainer} from "../../style/SignUp/style"
import FutureTube from "../../images/Capturar.PNG"
import { push } from "connected-react-router";
import { routes } from "../Router";

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
                <ImgContainer>
                    <StyledImg src={FutureTube} alt="Logo" />
                    <h4>Entrar</h4>
                </ImgContainer> 
                <FormContainer
                formInputs = {formLoginData}
                onClickCriar = {this.onClickToSignUp}
                onClickSignUp = {this.goToSignupPage}
                />
            </div>
        )
    }
}

export const mapDispatchToProps = (dispatch) => ({
    login: (email, password) => dispatch(userLogin(email,password)),
    goToSignupPage: () => dispatch(push(routes.signup))
})

export default connect(null, mapDispatchToProps)(Login)