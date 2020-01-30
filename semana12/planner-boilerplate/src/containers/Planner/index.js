import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getTasks, createTask } from "../../actions/tasksActions";
import {
  StyledHeader,
  StyledButton,
  StyledTextField,
  StyledWeekDaysContainer,
  StyledDayContainer
} from "../../style/styled";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

class Planner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      dayValue: ""
    };
  }

  componentDidMount() {
    this.props.getTasks();
  }

  handleInputChange = event => {
    this.setState({ input: event.target.value });
  };
  handleWeekDaysChange = event => {
    this.setState({ dayValue: event.target.value });
  };

  handleCreateTask = event => {
    event.preventDefault();

    this.props.createTask(this.state.input, this.state.dayValue);
    this.setState({
      input: "",
      dayValue: ""
    });
  };

  render() {
    const arrayDias = [
      "segunda",
      "terca",
      "quarta",
      "quinta",
      "sexta",
      "sabado",
      "domingo"
    ];

    return (
      <Fragment>
        <StyledHeader>
          <StyledTextField
            label="Criar tarefas"
            onChange={this.handleInputChange}
            value={this.state.input}
          />
          <InputLabel id="demo-simple-select-label">
            Dias da Semana:
            <Select
              onChange={this.handleWeekDaysChange}
              value={this.state.dayValue}
              labelId="demo-simple-select-label"
            >
              <MenuItem value="segunda">Segunda-Feira</MenuItem>
              <MenuItem value="terca">Terça-Feira</MenuItem>
              <MenuItem value="quarta">Quarta-Feira</MenuItem>
              <MenuItem value="quinta">Quinta-feira</MenuItem>
              <MenuItem value="sexta">Sexta-Feira</MenuItem>
              <MenuItem value="sabado">Sabado</MenuItem>
              <MenuItem value="domingo">Domingo</MenuItem>
            </Select>
          </InputLabel>
          <StyledButton onClick={this.handleCreateTask}>
            Criar Tarefa
          </StyledButton>
        </StyledHeader>
        <StyledWeekDaysContainer>
          {arrayDias.map(dia => (
            <StyledDayContainer>
              <h2>{dia}</h2>
              {this.props.tasks.filter((task)=>task.day).map((task)=>task.text)}
            </StyledDayContainer>
          ))}
        </StyledWeekDaysContainer>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.allTasks
});

const mapDispatchToProps = dispatch => ({
  getTasks: () => dispatch(getTasks()),
  createTask: (text, day) => dispatch(createTask(text, day))
});

export default connect(mapStateToProps, mapDispatchToProps)(Planner);
