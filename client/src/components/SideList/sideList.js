import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Login from "../Login/Login";
import Signup from "../SignUp/Signup";


const SideList = props => {
    const { classes, form, loginClicked, signupClicked } = props;
    return (
    <div className={classes.list}>
        <List>
            <div >
                <button onClick={loginClicked} class="btn btn-primary" id="greenBtn">
                    <p className="SignIn">Log In</p>
                </button>
                <button onClick={signupClicked} class="btn btn-primary" id="purpleBtn">
                    <p className="SignUp">Sign Up</p>
                </button>

            </div>
        </List>
        <Divider />
        {form ? <Signup /> : <Login />}
    </div>
)
};

export default SideList;
