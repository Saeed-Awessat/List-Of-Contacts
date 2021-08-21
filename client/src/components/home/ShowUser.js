import React from "react";
import {connect} from 'react-redux';

const ShowUser = (props) => {

    return (
        <div className="users-details">
            <div className={'card'}>
                <div className={'user-photo'}><img src={props.user.Img}/></div>
                <p>Full Name:- {props.user.FirstName} {props.user.LastName}</p>
                <p>Email:- {props.user.Email}</p>
                <a onClick={()=>props.setHomeState({
                    showList: true,
                    selectUser: {},
                    })
                }>Go Back!</a>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        users: state.users,
    };
}


export default connect(mapStateToProps)(ShowUser);
