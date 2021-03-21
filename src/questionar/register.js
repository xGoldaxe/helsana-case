import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    function handleChangeEmail(event) {
        setEmail(event.target.value)
    }
    function handleChangePassword(event) {
        setPassword(event.target.value)
    }

    let history = useHistory();

    function submit(e) {
        e.preventDefault()
        if(password.length >= 4 && validateEmail(email)) {
            setError(false)
            history.push("/question");
        }
        else {
            setError(true)
        }
    }


    return (
        <div className="register">
            <div className="register__form">
                <form className="register__form">
                    <h2 className="register__form__title">Register</h2>
                    <input type="email" required={true} placeholder="e-mail" value={email} onChange={handleChangeEmail}></input>
                    <input type="password" placeholder="password" value={password} onChange={handleChangePassword}></input>
                    <button onClick={submit}>Next</button>
                </form>
                {error &&<p>Bad email or password lower than 4 charachters :(</p>}
            </div>
            <div className="register__left">
                <h3>VigorGo</h3>
                <p>Become ealthier, save money</p>
                <div className="register__left__images">
                    {/* <img src={muscleSvg}></img> */}
                </div>
            </div>
        </div>
    )
}