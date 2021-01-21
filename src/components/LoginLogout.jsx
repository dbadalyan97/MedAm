import React from 'react';
import '../App.css';
import {useState} from 'react';
import "firebase/auth";
import Loginstate from "./LoginState";
import Logoutstate from "./LogoutState";

function Loginlogout() {
    const [user, setUser] = useState(null)

    return (
        <>
            {user && <Loginstate/>}
            {!user && <Logoutstate/>}
        </>
    );

}

export default Loginlogout;