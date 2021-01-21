import React from 'react';
import '../App.css';
import {useState} from 'react';
import "firebase/auth";
import firebase from 'firebase'
import Button from '@material-ui/core/Button';
import Dialogitem from './Dialog'

function Loginstate() {
    const [dialogisopen, setDialogisopen] = useState(null)
    const changeClick = () => {

        setDialogisopen(!dialogisopen)
    }

    const logout = () => {

    }

    const profile = () => {

        const user = firebase.auth().currentUser;
        if (user) {
            alert(user.displayName + ' ' + user.email + ' ' + user.uid)

        } else {
            console.log('there is not currentUser')
        }
    }


    return (
        <>
            <div>

                <Button onClick={logout} variant="contained" color="primary">
                    log out
                </Button>
                <Button onClick={profile} variant="contained" color="primary">
                    Details
                </Button>
                <Button onClick={changeClick} variant="contained" color="primary">
                    change password
                </Button>
                {dialogisopen && <Dialogitem isOpen={changeClick}/>}
            </div>

        </>
    );

}

export default Loginstate;