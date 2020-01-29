import React from "react";
import { connect } from "react-redux";
import { getTasks, createTask } from "../../actions/tasksActions";
import { StyledHeader, StyledButton, StyledTextField } from "../../style/styled";
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

class Planner extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      input: "",
      dayValue: ""
    }
  }

  handleInputChange = event => {
    this.setState({input: event.target.value})
  }
  handleWeekDaysChange = event => {
    this.setState({dayValue: event.target.value})
  }

  handleCreateTask = () =>{
    
    this.props.createTask()
    this.setState({
      input: "",
      dayValue: ""
    })
  }

  render() {
    return (
      <div>
        <StyledHeader>
          <StyledTextField 
          label="Criar tarefas" 
          onChange={this.handleInputChange}
          value={this.state.input}
          />
          <Select 
          onChange={this.handleWeekDaysChange}
          value={this.state.dayValue}
          >
            <MenuItem value="segunda">Segunda-Feira</MenuItem>
            <MenuItem value="terca">Terça-Feira</MenuItem>
            <MenuItem value="quarta">Quarta-Feira</MenuItem>
            <MenuItem value="quinta">Quinta-feira</MenuItem>
            <MenuItem value="sexta">Sexta-Feira</MenuItem>
            <MenuItem value="sabado">Sabado</MenuItem>
            <MenuItem value="domingo">Domingo</MenuItem>
          </Select>
          <StyledButton onClick={this.handleCreateTask}>Criar Tarefa</StyledButton>
        </StyledHeader>
        
      </div>
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
