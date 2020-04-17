import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

export const baseUrl =
  "https://mt5jvqqlt0.execute-api.us-east-1.amazonaws.com/v1";

export const setVideoAction = (videos) => ({
  type: "SET_VIDEOS_ACTION",
  payload: {
    videos,
  },
});

export const setVideoIdAction = (videoId) => ({
  type: "SET_VIDEO_ID_ACTION",
  payload: {
    videoId,
  },
});

export const setVideoDetailAction = (videoDetail) => ({
  type: "SET_VIDEO_DETAIL",
  payload: {
    videoDetail,
  },
});

export const getAllVideos = (page) => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/videos/?page=${page}`);
    dispatch(setVideoAction(response.data));
  } catch (error) {
    console.log(error);
    window.alert("Erro de renderização");
  }
};
