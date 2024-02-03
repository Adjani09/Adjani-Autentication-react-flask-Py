import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {store, actions} = useContext(Context)

    function sendData(e){
        e.preventDefault()
        actions.login(email,password)
    }

	return (
        <div>
            {store.auth === true ? <Navigate to="/private"/>:
            <form onSubmit={sendData} className="container my-4">
            <h1>Login</h1>
            <div className="form-group">
                <label className="mt-2" htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label className="mt-2" htmlFor="exampleInputPassword1">Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control mt-2" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary mt-4 me-4">Log in</button>
            <Link to="/signup">
                <button type="submit" className="btn btn-success mt-4">Create new account</button>
            </Link>
            </form>
            }
            
        </div>
		
	);
};
