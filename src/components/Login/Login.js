import './Login.css'
import React from 'react';

const Login = () => {

    

    return (
        <div>
            <h2>This is Login page!</h2>
            <div style={{margin: '20px'}}>
                <button>Google Sign In</button>
            </div>
            <form action="">
                <input type="email" name="" id="" placeholder='Your Email' /> <br />
                <input type="password" name="" id="" placeholder='Your Password' /> <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;