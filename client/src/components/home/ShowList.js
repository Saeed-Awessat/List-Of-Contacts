import React from "react";
import {connect} from 'react-redux';

const ShowList = (props) => {
    const renderTableHeader = () => {
        let header = Object.keys(props.users[0]);
        let headerTr =  header.map((key, index) => {
            if (key !== '_id' && key !== '__v') return <th key={index}>{key}</th>
        });
        return [<th key={0}></th>,...headerTr];
    };

    const renderTableData = () => {
        let count = 1;
        return props.users.map((user, index) => {
            const {_id, FirstName, LastName, Email, Img} = user; //destructuring
            return (
                <tr key={_id} onClick={() => {
                    props.setHomeState({
                        showList: false,
                        selectUser: user
                    });
                }}>
                    <td>{count++}</td>
                    <td>{FirstName}</td>
                    <td>{LastName}</td>
                    <td>{Email}</td>
                    <td><img src={Img} width={70} height={70}/></td>
                </tr>
            )
        })
    };


    return (
        <div className="users-list">
            {
                props.users && props.users.length > 0 ?
                    <table id='users-list'>
                        <tbody>
                        <tr>{renderTableHeader()}</tr>
                        {renderTableData()}
                        </tbody>
                    </table> :
                    <div className={'empty-state'}>
                        <div className={'svg-container'}><svg fill="none" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"><title>Magnify</title><path d="M53 82c18.778 0 34-15.222 34-34S71.778 14 53 14 19 29.222 19 48s15.222 34 34 34z" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"></path><path d="M53 75c14.912 0 27-12.088 27-27S67.912 21 53 21 26 33.088 26 48s12.088 27 27 27z" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"></path><path d="M89.722 73.65L78.408 84.964l4.243 4.242 11.313-11.313z" fill="currentColor" fillOpacity="0.2" opacity="0.25"></path><path d="M70.874 44.222c3.218-3.218 1.932-9.72-2.872-14.524-4.804-4.804-11.306-6.09-14.524-2.872s-1.932 9.72 2.872 14.524c4.804 4.803 11.306 6.09 14.524 2.872z" fill="currentColor" fillOpacity="0.2"></path><path d="M77 72.2c-1 1-2 1.8-3 2.6l7.3 7.3 5.7-5.7-7.3-7.3c-.8 1.2-1.7 2.2-2.7 3.1z" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"></path><path d="M88.3 83.5l5.7-5.7L115.2 99c1.6 1.6 1.6 4.1 0 5.7l-2.8 2.8z" fill="currentColor" fillOpacity="0.2"></path><path d="M89.722 73.65L78.408 84.964l4.243 4.242 11.313-11.313zM115.2 104.8l-5.7 5.7c-1.6 1.6-4.1 1.6-5.7 0L82.6 89.3 93.9 78l21.2 21.2c1.7 1.5 1.7 4 .1 5.6z" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"></path><path clipRule="evenodd" d="M88.986 49a36.926 36.926 0 000-2H115a2 2 0 002-2V27a2 2 0 00-2-2H88a2 2 0 00-2 2v6.59a35.887 35.887 0 00-2-3.904V27a4 4 0 014-4h27a4 4 0 014 4v18a4 4 0 01-4 4zm-71.863 2H4a4 4 0 00-4 4v18a4 4 0 004 4h8v22a4 4 0 004 4h34a4 4 0 004-4V83.986a36.926 36.926 0 01-2 0V99a2 2 0 01-2 2H16a2 2 0 01-2-2V77h17.665a36.154 36.154 0 01-2.477-2H14v-4a2 2 0 012-2h7.756a36.02 36.02 0 01-1.34-2H16a4 4 0 00-4 4v4H4a2 2 0 01-2-2V55a2 2 0 012-2h13.344a36.2 36.2 0 01-.22-2zM66.04 81.566a35.682 35.682 0 001.96-.83V81a2 2 0 002 2h8.678L77 84.678l.322.322H70a4 4 0 01-3.96-3.434zM86.58 61c.255-.657.49-1.324.707-2H124a4 4 0 014 4v18a4 4 0 01-4 4h-21.222l-2-2H124a2 2 0 002-2V63a2 2 0 00-2-2z" fill="currentColor" fillOpacity="0.2" fillRule="evenodd"></path></svg></div>
                        <h1>There Is No One Is Logged On!</h1>
                    </div>
            }
        </div>
    );
};

function mapStateToProps(state) {
    return {
        users: state.users,
    };
}


export default connect(mapStateToProps)(ShowList);
