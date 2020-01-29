import axios from 'axios'

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bouman-yan"

export const setTasks = tasks => ({
    type: "SET_TASKS",
    payload: {
        tasks
    }
})

export const getTasks = () => async (dispatch) => {
    const response = await axios.get(`${baseUrl}`)
    dispatch(setTasks(response.data.tasks))
}

export const createTask = (text, day) => async dispatch => {
    const newTask = {
        text,
        day
    }

    try{
        await axios.post(`${baseUrl}`, newTask)
        window.alert("TaskCreated")
        dispatch(getTasks())
    }catch(error){
        window.alert("Task Creation Failed")
    }
}