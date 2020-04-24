import React, { Fragment } from "react";
import { connect } from "react-redux";
import futuretube from "../../images/futuretube.png";
import { uploadVideo } from "../../actions/videoActions";
import TextField from "@material-ui/core/TextField";

class UploadVideo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            form: {}
        }
    }

    render(){
        return(
            <div>
                oi
            </div>
        )
    }
}

export default connect()(UploadVideo)