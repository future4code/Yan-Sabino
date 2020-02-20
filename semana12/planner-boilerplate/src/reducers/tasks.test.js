import tasks from "./tasks"
import { setTasks } from "../actions/tasksActions";

describe('teste reducer de tasks', () =>{
   test('se o setTask seta as tasks', () =>{
      //preparação
      const currentState = {
        allTasks: [],
      } 

      const action = setTasks(['Task Test', 'Task 2 Test'])

      const newState = tasks(currentState, action)

      expect(newState.allTasks).toHaveLength(2)
      
   })

})