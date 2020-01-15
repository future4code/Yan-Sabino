import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index'

const HomePage = props => {
    console.log(props)
    return (
        <div>
            <h1>EU SOU A HOME</h1>
            <Button onClick={props.goToAppForm}>app form</Button>
            <Button onClick={props.goToLoginPage}>Admin</Button>
        </div>

    );
};

function mapDispatchToProps(dispatch) {
    return {
        goToAppForm: () => dispatch(push(routes.applicationForm)),
        goToLoginPage: () => dispatch(push(routes.login)),
    }
}

export default connect(null, mapDispatchToProps)(HomePage) 