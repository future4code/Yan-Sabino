import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from '../Router/index'
import { login } from '../../actions/login'

const loginForm = [
  {
    name: 'email',
    type: 'email',
    label: 'admin',
    required: true,
    pattern: "[A-Za-^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$]{3,}"
  },

  {
    name: 'password',
    type: 'password',
    label: 'password',
    required: true,
  },
]

const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {}
    };
  }

  handleFieldChange = event => {
    const { name, value } = event.target
    console.log(name,value)
    this.setState({
      form: { ...this.state.form, [name]: value }
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    console.log(this.state.form)
  }

  handleLoginButton = () => {
    const { email, password } = this.state.form;
    this.props.login(email, password)
  }

  render() {
    console.log(this.state)
    

    return (
      <LoginWrapper onSubmit={this.handleOnSubmit}>
          {loginForm.map(input => (
            <div key={input.name}>
              
              <TextField
                onChange={this.handleFieldChange}
                name={input.name}
                type={input.type}
                label={input.label}
                value={this.state.form[input.name] || ""}
                required={input.required}
                pattern={input.pattern}
              />
            </div>
        ))}
        <Button type="button" onClick={this.handleLoginButton}>Login</Button>
      </LoginWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);
