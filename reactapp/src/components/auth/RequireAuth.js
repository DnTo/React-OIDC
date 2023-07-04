import React from "react";
import { useAuth } from "react-oidc-context";
import { Navigate } from "react-router";


const RequireAuth = (props) => {
    const auth = useAuth()

    if (!auth.user) {
        console.log(auth)
        return <Navigate to="/unathorized" replace />;
    }
    console.log(auth)
    return (<>
        {props.children}
    </>)
}
export default RequireAuth
