import React from "react"
import "./Todo.css"
import { Link } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"

function NewTodo() {
    return (
        <div className="new-todo-container">
            <div className="content">
                <section className="form">
                    <h1>Add New Todo</h1>
                    <Link className="btn-back-list" to="/todo">
                        <FiArrowLeft className="icon-confirm-todo" size={16} color="251FC5"></FiArrowLeft></Link>
                </section>
                <form>
                    <input placeholder="Title" />
                    <input placeholder="Descricao" />
                    <input type="date" placeholder="Date" />
                    <button className="button-submit-todo" type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}

export default NewTodo