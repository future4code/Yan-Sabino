export const addTaskActionCreator = (text) => {
    return {
      type: "ADD_TASK",
      payload: {text}
    }
  }
  
export  const deleteEachTaskActionCreator = (id) => {
    return {
      type: "DELETE_TASK",
      payload: {id}
    }
  }
  
export  const checkEachTaskActionCreator = (id) => {
    return {
      type: "CHECK_EACH_TASK",
      payload: {id}
    }
  } 
  
export  const checkAllTasksActionCreator = () => {
    return {
      type: "CHECK_ALL_TASKS",
    
    }
  }
  
export  const removeCompleteTasksActionCreator = () => {
    return {
      type: "REMOVE_COMPLETED_TASKS",
    
    }
  }
  
export  const filterTaskActionCreator = (filter) => {
    return {
      type: "FILTER_TASK",
      payload: {filter}
    }
  } 