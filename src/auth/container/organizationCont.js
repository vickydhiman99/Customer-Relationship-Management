import React, { Component } from "react";
import { connect } from "react-redux";
import Organization from "../components/organization";
import {
    close_snack_bar
} from "../../common/snackbar/action";
import {
    clear_login,
    picCreateOrg,
} from "../actions";
export class Controller extends Component {
    render() {
        return (
            <Organization {...this.props} />
        );
    }
};
export const mapStateToProps = store => {
    return {
        login: store.login,
        loader: store.loader,
        snackbar: store.snackbar,
    };
};
export const mapDispatchToProps = dispatch => {
    return {
        clear_login: () => {
            dispatch(clear_login())
        },
        close_snack_bar: () => {
            dispatch(close_snack_bar());
        },
        picCreateOrg: (logo,mobile, org_name, first_name, last_name, email, gstin_no, type) => {
            dispatch(picCreateOrg(logo, mobile,org_name, first_name, last_name, email, gstin_no, type));
        },

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);