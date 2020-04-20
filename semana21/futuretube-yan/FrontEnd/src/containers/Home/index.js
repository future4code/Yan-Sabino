import React, { Fragment } from "react";
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
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });

    this.setState({
      searchInput: event.target.value,
    });
  };

  render() {
    const { videos } = this.props;
    const { videos1 } = this.state;
    // console.log(videos);
    let filterVideos = videos.filter((video) => {
      return (
        video.title
          .toLowerCase()
          .indexOf(this.state.searchInput.toLowerCase()) !== -1
      );
    });
    console.log(filterVideos);

    // const isVideosReady =
    //   this.props.videos.length === 0 ? (
    //     <Loader />
    //   ) : (
    //     <div>
    //       {filterVideos.map((video) => (
    //         <VideoContainer key={video.videoId}>
    //           <VideoCard videoUrl={video.url} videoTitle={video.title} />
    //         </VideoContainer>
    //       ))}
    //     </div>
    //   );
    return (
      <BodyContainer>
        <Header
          onChangeSearchField={this.handleSeachFieldChange.bind(this)}
          value={videos1}
          goToSignUp={this.props.goToSignUp}
          goToLogin={this.props.goToLogin}
          logout={this.handleLogOut}
        />

        <Container>
          <PermanentDrawerLeft></PermanentDrawerLeft>

          {this.props.videos.length === 0 ? (
            <Loader />
          ) : (
            <Fragment>
              {videos.map((video) => (
                <VideoContainer key={video.videoId}>
                  <VideoCard
                    videoUrl={video.url}
                    videoTitle={video.title}
                  /> 
                  {/* <div>{video.title}</div> */}
                </VideoContainer>
              ))}
            </Fragment>
          )}
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
