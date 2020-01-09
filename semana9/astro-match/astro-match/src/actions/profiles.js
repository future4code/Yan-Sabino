import axios from 'axios'


export const setProfileToSwipe = (profile) => ({
	type: 'SWIPE_PROFILE',
	payload:{
		profile
	} 
})

export const setMatchList = (matches) => ({
	type: 'SET_MATCHES',
	payload:{
		matches
	}
})

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/yan/clear')
}

export const getProfileToSwipe = () => async (dispatch) => {
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/yan/person')

	dispatch(setProfileToSwipe(response.data.profile))
}

export const chooseProfile = (id, choice) => async (dispatch) => {
	if(!id){
		dispatch(getProfileToSwipe())
		return
	}

	await axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/yan/choose-person')
}