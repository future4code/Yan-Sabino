import { getTasks, setTasks, createTask } from "./tasksActions"
import axios from "axios"

describe("Pega todas as tarefas", () => {
    test('deve mandar a action com as tarefas da API', async () =>{
        
        const tasksMock = [{
            id: 1,
            day: "Segunda",
            text: "Nadar"

        }]
        
        const dispatchMock  = jest.fn()


        axios.get = jest.fn( () =>{
            return{
                data: tasksMock    
            }
        })

       await getTasks()(dispatchMock)

       expect(dispatchMock).toHaveBeenCalledWith(setTasks(tasksMock))
    })

})

describe('Criar tarefas', () =>{
    test('teste se cria as tarefas', async () => {
        const dispatchMock = jest.fn()
        axios.post = jest.fn().mockReturnValue({
            status:200
        })
        await createTask('oi', 'Segunda')(dispatchMock)

        expect(dispatchMock).toHaveBeenCalled()
    })
})
