import { setTasks } from "./tasksActions";

describe("testa as actions das tasks", () => {
  test("Testa o SetTask", () => {
    //preparação
    const actionTask = "teste de setar a action";

    //execução
    const action = setTasks(actionTask);

    //verificação
    expect(action.type).toEqual("SET_TASKS");
    expect(action.payload).toEqual({tasks: "teste de setar a action"})
  });
});
