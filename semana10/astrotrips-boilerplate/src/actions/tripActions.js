import axios from 'axios'
import {routes} from '../containers/Router/index'
import {push} from 'connected-react-router'

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/yan'

const setTrips = (trips) => ({
    type: 'SET_TRIPS',
    payload: {
        trips
    }
})

export const getTrips = () => async (dispatch) =>{
    
    const response = await axios.get(`${baseURL}/trips`)

    dispatch(setTrips(response.data.trips))

}



export const createTrip = (name, date, description, durationInDays, planet) => async (dispatch) =>{

    const newTrip = {
        name,
        date,
        description,
        durationInDays,
        planet,
    }

    const token = window.localStorage.getItem("token")

   
    try{
        await axios.post(`${baseURL}/trips`, newTrip, {
            headers: {
                auth: token,
            }
        })
        
        dispatch(getTrips())
        dispatch(push(routes.tripsList))
    } catch(error){
        window.alert("Erro na Criação")
    }
}

