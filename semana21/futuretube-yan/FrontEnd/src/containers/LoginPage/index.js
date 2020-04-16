import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { routes } from "../Router/";
import { userLogin } from "../../actions/userActions";
import { LoginWrapper, ImgContainer, StyledImg } from "../../style/loginPage";
import futuretube from "../../images/futuretube.png";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleFieldChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleLoginButton = () => {
    const { email, password } = this.state;
    this.props.login(email, password);

    this.setState({
        email: "",
        password: ""
    })
  };

  render() {
    const { email, password } = this.state;
    return (
      <LoginWrapper>
        <ImgContainer>
          <StyledImg src={futuretube} alt="Logo" />
          <h4>Entrar</h4>
        </ImgContainer>
        <TextField
          variant="outlined"
          margin="normal"
          onChange={this.handleFieldChange}
          name="email"
          type="email"
          label="E-mail"
          value={email}
        />
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          onChange={this.handleFieldChange}
          name="password"
          type="password"
          label="Password"
          value={password}
        />
        <Button onClick={this.handleLoginButton}>Login</Button>
        <Button onClick={this.props.goToSignUp}>Sign Up</Button>
      </LoginWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(userLogin(email, password)),
  goToSignUp: () => dispatch(push(routes.signup)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
