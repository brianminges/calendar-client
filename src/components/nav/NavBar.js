import React from "react"
import { Link, useHistory } from "react-router-dom"

export const NavBar = () => {
    const history = useHistory()
    return (
        <ul>
            <li><Link to="#">Link</Link></li>
            <li><Link to="#">Link</Link></li>
            <li><Link to="#">Link</Link></li>
            <li><Link to="#">Link</Link></li>
            <li><Link to="#">Link</Link></li>
            {
                (localStorage.getItem("cal_token") !== null) ?
                    <li>
                        <button
                            onClick={() => {
                                localStorage.removeItem("cal_token")
                                history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </>
            }
        </ul>
    )
}