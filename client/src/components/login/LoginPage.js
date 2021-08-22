import React, {useState} from "react";
import {addUser} from "../../api/usersApi";
import { useHistory } from "react-router-dom";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import {updateUsers} from '../../redux/actions/usersActions';
import {toast } from 'react-toastify';


const LoginPage = (props) => {
    const history = useHistory();
    const [loginState, setLoginState] = useState({
        fields: {},
        errors: {}
    });

    const navigateTo = () => history.push('/');
    const notify = (str,status) =>{
        if(status === 'success'){
            toast.success(str);
        }else toast.error(str);
    };

    const handleChange = (e) => {
        let fields = loginState.fields;
        fields[e.target.name] = e.target.value;
        setLoginState({
            fields,
            errors: loginState.errors
        });

    };

    const submitUserRegistrationForm = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            let user = {
                FirstName: loginState.fields["firstName"],
                LastName: loginState.fields["lastName"],
                Email: loginState.fields["email"],
                Img: loginState.fields["img"],
            };
            props.setLoader(true);
            await addUser(user).then(newUser=>{
                props.updateUsers(props.users,newUser);
                notify('Login Success!','success');
                props.setLoader(false);
                navigateTo();
                // let fields = {};
                // fields["firstName"] = "";
                // fields["lastName"] = "";
                // fields["email"] = "";
                // setLoginState({fields: fields, errors: {}});
            }).catch(err=>{
                notify('Failed to Login!');
                props.updateUsers(props.users);
                props.setLoader(false);
            });
        }

    };

    const validateForm = () => {

        let fields = loginState.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["firstName"]) {
            formIsValid = false;
            errors["firstName"] = "*Please enter your firstName.";
        }

        if (typeof fields["firstName"] !== "undefined") {
            if (!fields["firstName"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["firstName"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["lastName"]) {
            formIsValid = false;
            errors["lastName"] = "*Please enter your lastName.";
        }

        if (typeof fields["lastName"] !== "undefined") {
            if (!fields["lastName"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["lastName"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*Please enter your email.";
        }

        if (typeof fields["email"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "*Please enter valid email-ID.";
            }
        }

        setLoginState({
            fields,
            errors: errors
        });
        return formIsValid;
    };

    return (
        <div id="main-login-container">
            <div id="login">
                <h3>Login page</h3>
                <form method="post" name="userRegistrationForm" onSubmit={submitUserRegistrationForm}>
                    <label>First Name</label>
                    <input type="text" name="firstName" value={loginState.fields.firstName} onChange={handleChange}/>
                    <div className="errorMsg">{loginState.errors.firstName}</div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={loginState.fields.lastName} onChange={handleChange}/>
                    <div className="errorMsg">{loginState.errors.lastName}</div>
                    <label>Email:</label>
                    <input type="text" name="email" value={loginState.fields.email} onChange={handleChange}/>
                    <div className="errorMsg">{loginState.errors.email}</div>
                    <label>User Image:</label>
                    <input type="text" name="img" value={loginState.fields.img}
                           onChange={handleChange}/>
                    <div className="errorMsg"/>
                    <input type="submit" className="button" value="Login"/>
                </form>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        users: state.users,
    };
}


function mapDispatchToProps(dispatch) {
    return {
        updateUsers: bindActionCreators(updateUsers, dispatch),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);
