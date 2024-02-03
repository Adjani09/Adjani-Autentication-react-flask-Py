import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const Protected = () => {
    const {store, actions} = useContext(Context)
	return (
        <div>
            {store.auth === false ? <Navigate to="/"/>:
            <div className="container d-flex justify-content-center mt-5 mb-5">
                <h1>Private information</h1>
            </div>
}
        </div>
    );
};
