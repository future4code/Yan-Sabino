import React, { Fragment } from "react";
import PropTypes from 'prop-types'
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
    const { input, dayValue } = this.state
    this.props.createTask(input, dayValue);
    this.setState({
      input: "",
      dayValue: ""
    });
  };

  render() {
    const arrayDias = [
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sabado",
      "Domingo"
    ];

    return (
      <Fragment>
        <h1>Lista de Tarefas</h1>
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
              <MenuItem value="Segunda">Segunda-Feira</MenuItem>
              <MenuItem value="Terça">Terça-Feira</MenuItem>
              <MenuItem value="Quarta">Quarta-Feira</MenuItem>
              <MenuItem value="Quinta">Quinta-feira</MenuItem>
              <MenuItem value="Sexta">Sexta-Feira</MenuItem>
              <MenuItem value="Sabado">Sabado</MenuItem>
              <MenuItem value="Domingo">Domingo</MenuItem>
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
              <ul>
                {this.props.tasks
                  .filter(task => task.day === dia)
                  .map(task => (
                    <li>{task.text}</li>
                  ))}
              </ul>
            </StyledDayContainer>
          ))}
        </StyledWeekDaysContainer>
      </Fragment>
    );
  }
}

Planner.propTypes ={
  getTasks: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
  tasks: PropTypes.array,
}

const mapStateToProps = state => ({
  tasks: state.tasks.allTasks
});

const mapDispatchToProps = dispatch => ({
  getTasks: () => dispatch(getTasks()),
  createTask: (text, day) => dispatch(createTask(text, day))
});

export default connect(mapStateToProps, mapDispatchToProps)(Planner);
