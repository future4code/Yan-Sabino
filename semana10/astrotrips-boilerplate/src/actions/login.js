import axios from 'axios'
import { push } from 'connected-react-router'
import { routes } from '../containers/Router'

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/yan'

export const login = (email, password) => async (dispatch) => {
    const loginInformation = {
        email,
        password,
    }

    
    try{
        const response = await axios.post(`${baseURL}/login`, loginInformation)

        window.localStorage.setItem("token", response.data.token)
        dispatch(push(routes.tripsList))
    } catch(error){
        console.log(error)
        window.alert("Erro no Login")
    }
}
