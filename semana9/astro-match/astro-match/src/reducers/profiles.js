const initialState = {
  profileToSwipe: null,
  matchesList: [],
}

const profiles = (state = initialState, action) => {
  switch(action.type){
    case 'SWIPE_PROFILE':
      return {...state, profileToSwipe: action.payload.profile}
    default:
      return state
  }
  
}

export default profiles
