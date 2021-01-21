import React from 'react';
import '../App.css';
import "firebase/auth";
import {useState} from 'react';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

function Logoutstate() {

    const [showlogin, setShowlogin] = useState(false)
    const [showsignup, setSignup] = useState(false)


    const login = () => {

        setShowlogin(!showlogin)
    }
    const signup = () => {

        setSignup(!showsignup)
    }


    return (
        <>
            <Link to="/SignIn" style={{color: 'white', textDecoration: 'none',}}>
                <Button color="inherit">Sign in</Button>
            </Link>
        </>
    );

}

export default Logoutstate;