const inicialState = {
    allVideos: [],
    selectedVideo: {},
    selectedVideoId: ""
}

const videos = (state = inicialState, action) =>{
    switch(action.type){
        case "SET_VIDEOS_ACTION":
            return {...state, allVideos: action.payload.videos}
        case "SET_VIDEO_ID_ACTION":
            return {...state, selectedVideoId: action.payload.videoId}
        case "SET_VIDEO_DETAIL":
            return {...state, selectedVideo: action.payload.videoDetail}
        default:
            return state
    }
}

export default videos