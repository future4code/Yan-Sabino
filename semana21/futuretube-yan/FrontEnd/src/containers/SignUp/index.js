import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { SignUpWrapper, ImgContainer, StyledImg } from "../../style/signupPage";
import futuretube from "../../images/futuretube.png";
import { userSignup } from "../../actions/userActions";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      birthDate: "",
      password: "",
      picture: "",
    };
  }

  handleFieldChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSignupButton = () => {
    const { name, email, birthDate, password, picture } = this.state;
    this.props.signup( name, email, birthDate, password, picture )

    this.setState({
        name: "", 
        email: "", 
        birthDate: "", 
        password: "", 
        picture: ""
    })
  }

  render() {
    const { name, email, birthDate, password, picture } = this.state;
    return (
      <SignUpWrapper>
        <ImgContainer>
          <StyledImg src={futuretube} alt="Logo" />
          <h4>Cadastrar</h4>
        </ImgContainer>
        <TextField
          variant="outlined"
          margin="normal"
          onChange={this.handleFieldChange}
          name="name"
          type="name"
          label="Nome"
          value={name}
        />
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
          variant="outlined"
          margin="normal"
          onChange={this.handleFieldChange}
          name="birthDate"
          type="birthDate"
          label="Dia de Nascimento"
          value={birthDate}
        />
        <TextField
          variant="outlined"
          margin="normal"
          onChange={this.handleFieldChange}
          name="password"
          type="password"
          label="Senha"
          value={password}
        />
        <TextField
          variant="outlined"
          margin="normal"
          onChange={this.handleFieldChange}
          name="picture"
          type="picture"
          label="Foto"
          value={picture}
        />

        <Button onClick={this.handleSignupButton}>Sign Up</Button>
      </SignUpWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signup: (name, email, birthDate, password, picture) =>
    dispatch(userSignup(name, email, birthDate, password, picture)),
});

export default connect(null, mapDispatchToProps)(SignUp);
