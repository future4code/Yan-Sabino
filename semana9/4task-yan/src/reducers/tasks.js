import { ADD_TASK } from '../constants/actionTypes'

const initialState = {
    allTasks: [{
        text: 'Tarefa 1',
        completed: false,
        id: 0
    }],
}

const tasks = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TASK':
            const newTask = {
                text: action.payload.text,
                completed: false,
                id : new Date().getTime()
            }
            
            return { ...state, allTasks: [...state.allTasks, newTask] }
        default:
            return state;
    }
}

export default tasks