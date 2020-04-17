import React, { Fragment } from "react";
import { connect } from "react-redux";
import Header from "../../components/header";
import RecipeReviewCard from "../../components/videoCard";
import PermanentDrawerLeft from "../../components/sideMenu";
import { getAllVideos } from "../../actions/videoActions";
import Loader from "../../components/loader";
import { Container, VideoContainer, BodyContainer } from "../../style/homePage";

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
    console.log(videos);
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
    //           <RecipeReviewCard videoUrl={video.url} videoTitle={video.title} />
    //         </VideoContainer>
    //       ))}
    //     </div>
    //   );
    return (
      <BodyContainer>
        <Header />

        <Container>
          <PermanentDrawerLeft></PermanentDrawerLeft>
          {this.props.videos.length === 0 ? (
            <Loader />
          ) : (
            <div>
              {filterVideos.map((video) => (
                <VideoContainer key={video.videoId}>
                  <RecipeReviewCard
                    videoUrl={video.url}
                    videoTitle={video.title}
                  />
                </VideoContainer>
              ))}
            </div>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
