import React from "react"
import "./Menu.css"

function Menu() {
    return (
        <div className="menu-container">
            <a href="/">Home</a>&nbsp;&nbsp;&nbsp;
            <a href="/cnpj-validator">CNPJ Validator</a>&nbsp;&nbsp;&nbsp;
            <a href="/todo">Todo</a>&nbsp;&nbsp;&nbsp;
            <a href="/utc">UTC</a>
        </div>
    )
}

export default Menu