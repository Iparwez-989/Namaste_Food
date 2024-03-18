import React from "react";
import { useRouteError } from "react-router-dom";
// useRouteError is a hook provided by react router dom to display the error occured in the page

const Error = ()=>{
    const err = useRouteError()
    console.log(err)
    return (
        <div>
            <h2>Oops!</h2>
            <h5>Error Occured</h5>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    )

}
export default Error;
