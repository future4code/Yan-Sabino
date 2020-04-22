import React from "react";
import { connect } from "react-redux";
import Header from "../../components/header";
import VideoCard from "../../components/videoCard";
import PermanentDrawerLeft from "../../components/sideMenu";
import { getAllVideos } from "../../actions/videoActions";
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
    console.log(searchedVideo);
    const isVideosReady =
      this.props.videos.length === 0 ? (
        <Loader />
      ) : (
        <VideoContainer>
          {searchedVideo.map((video) => (
            <VideoCard videoUrl={video.url} videoTitle={video.title} />
          ))}
        </VideoContainer>
      );

    return (
      <BodyContainer>
        <Header
          onChangeSearchField={this.handleSeachFieldChange.bind(this)}
          value={this.state.searchInput}
          goToSignUp={this.props.goToSignUp}
          goToLogin={this.props.goToLogin}
          logout={this.handleLogOut}
        />

        <Container>
          <PermanentDrawerLeft></PermanentDrawerLeft>
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
  goToSignUp: () => dispatch(push(routes.signup)),
  goToLogin: () => dispatch(push(routes.login)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
