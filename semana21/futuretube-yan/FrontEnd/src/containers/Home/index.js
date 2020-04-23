import React from "react";
import { connect } from "react-redux";
import Header from "../../components/header";
import VideoCard from "../../components/videoCard";
import PermanentDrawerLeft from "../../components/sideMenu";
import { getAllVideos } from "../../actions/videoActions";
import { deleteVideo } from "../../actions/videoActions";
import { getUserById } from "../../actions/userActions"
import Loader from "../../components/loader";
import { Container, VideoContainer, BodyContainer } from "../../style/homePage";
import { push } from "connected-react-router";
import { routes } from "../Router/";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
    };
  }

  componentDidMount() {
    this.props.getAllVideos(this.props.page);
  }

  handleLogOut = () => {
    localStorage.removeItem("token");
    window.alert("User Logout");
  };

  handleDeleteVideo = (videoId) => {
    this.props.deleteVideo(videoId);
  };

  handleSeachFieldChange = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  searchVideo = () => {
    return this.props.videos.filter((video) => {
      if (
        video.title
          .toLowerCase()
          .indexOf(this.state.searchInput.toLowerCase()) !== -1
      ) {
        return true;
      }
    });
  };

  render() {
    const searchedVideo = this.searchVideo();
    
    const isVideosReady =
      this.props.videos.length === 0 ? (
        <Loader />
      ) : (
        <VideoContainer>
          {searchedVideo.map((video) => (
            <VideoCard
              key={video.videoId}
              videoUrl={video.url}
              videoTitle={video.title}             
              deleteVideo={this.handleDeleteVideo}
              userPicture={this.props.getUserById.picture}
            />
          ))}
        </VideoContainer>
      );

    const isLoggend = window.localStorage.getItem("token");
    let buttonRender;

    if (isLoggend) {
      buttonRender = (
        <Header
          onChangeSearchField={this.handleSeachFieldChange.bind(this)}
          value={this.state.searchInput}
          logout={this.handleLogOut}
        />
      );
    } else {
      buttonRender = (
        <Header
          onChangeSearchField={this.handleSeachFieldChange.bind(this)}
          value={this.state.searchInput}
          goToSignUp={this.props.goToSignUp}
          goToLogin={this.props.goToLogin}
        />
      );
    }

    return (
      <BodyContainer>
        {buttonRender}
        <Container>
          <PermanentDrawerLeft
            password={this.props.goToChangePassword}
          ></PermanentDrawerLeft>
          {isVideosReady}
        </Container>
      </BodyContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  videos: state.videos.allVideos,
  page: state.videos.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  getAllVideos: (page) => dispatch(getAllVideos(page)),
  deleteVideo: (videoId) => dispatch(deleteVideo(videoId)),
  getUserById: () => dispatch(getUserById()),
  goToSignUp: () => dispatch(push(routes.signup)),
  goToLogin: () => dispatch(push(routes.login)),
  goToChangePassword: () => dispatch(push(routes.changePassword)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
