

const initialState = {
    allTasks: [],
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

        // case 'DELETE_TASK':
        //     const numIndex = parseInt(action.id)
        //     return state.filter(task => task.id !== numIndex)
        default:
            return state;
    }
}

export default tasks