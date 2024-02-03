import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {store, actions} = useContext(Context)
    const navigate = useNavigate()

    function sendData(){
        actions.signup(email,password)
        navigate("/")
    }

	return (
		<form className="container my-4">
            <h1>Signup</h1>
            <div className="form-group">
                <label className="mt-2" htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label className="mt-2" htmlFor="exampleInputPassword1">Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control mt-2" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button onClick={() => sendData()} type="submit" className="btn btn-primary mt-4">Submit</button>
            </form>
	);
};