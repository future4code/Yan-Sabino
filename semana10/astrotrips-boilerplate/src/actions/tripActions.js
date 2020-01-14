import axios from 'axios'

const setTrips = (trips) => ({
    type: 'SET_TRIPS',
    payload: {
        trips
    }
})

export const getTrips = () => async (dispatch) =>{
    const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureX/yan/trips')

    dispatch(setTrips(response.data.trips))
}

