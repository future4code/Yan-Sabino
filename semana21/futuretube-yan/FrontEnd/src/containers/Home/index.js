import React, { Fragment } from "react";
import { connect } from "react-redux";
import Header from "../../components/header";
import RecipeReviewCard from "../../components/videoCard";
import { getAllVideos } from "../../actions/videoActions";
import Loader from "../../components/loader";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
    };
  }

  componentDidMount(){
      
      this.props.getAllVideos()
  }

  render() {
    const { videos } = this.state;
    console.log(this.props.videos)
    let filterVideos = this.props.videos.filter((video) => {
      return (
        video.title
          .toLowerCase()
          .indexOf(this.state.searchInput.toLowerCase()) !== -1
      );
    });

    const isVideosReady = this.props.videos.lenght === 0 ? <Loader/> : (
        <Fragment>
            {filterVideos.map((video) => <RecipeReviewCard />)}
        </Fragment>
    )
    return (
      <div>
        <Header />
        {isVideosReady}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  videos: state.videos.allVideos,
});

const mapDispatchToProps = (dispatch) => ({
  getAllVideos: () => dispatch(getAllVideos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
