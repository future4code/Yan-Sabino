import {setPostAction} from './index'


describe("teste actions posts", ()=>{
    test("teste getActions", ()=>{
       
       const  textoDeTeste = "get de texte"
       
        const action = setPostAction(textoDeTeste)

        expect(action.type).toEqual('SET_POSTS_ACTION') 
    })
})