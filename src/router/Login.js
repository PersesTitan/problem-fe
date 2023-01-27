import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {GithubLoginButton, GoogleLoginButton} from "react-social-login-buttons";
import axios from "axios";

const Login = (props) => {
    const [a, setA] = useState("");
    useEffect(() => {
        axios('/api/login/github')
            .then(res => {
                setA(res.data)
            });
    },[])

    return (
        <div className={"login-icons"}>
            <GithubLoginButton onClick={() => axios.get("/api/login?service=github")}>
                <span>Github</span>
            </GithubLoginButton>
            <GoogleLoginButton onClick={() => window.open('/api/login/google')}>
                <span>Google</span>
            </GoogleLoginButton>
        </div>
    )
}

export default Login;