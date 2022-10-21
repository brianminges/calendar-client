import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Calendar } from "./components/Calendar"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Calendar />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
) 