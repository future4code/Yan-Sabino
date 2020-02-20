import axios from "axios";

const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bouman-yan";

export const setTasks = tasks => ({
  type: "SET_TASKS",
  payload: {
    tasks
  }
});

export const getTasks = () => async dispatch => {
  try {
    const response = await axios.get(baseUrl);
    dispatch(setTasks(response.data));
  } catch (error) {
    window.alert("Erro de renderização");
  }
};

export const createTask = (text, day) => async dispatch => {
  const newTask = {
    text,
    day
  };

  try {
    await axios.post(`${baseUrl}`, newTask);
    window.alert("Task Created Successfully");
    dispatch(getTasks());
  } catch (error) {
    window.alert("Task Creation Failed");
  }
};
