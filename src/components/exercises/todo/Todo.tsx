import React from "react"
import "./Todo.css"
import { Link } from "react-router-dom"
import { FiPlus, FiTrash2, FiCheck } from "react-icons/fi"

function ExerciseB() {
    return (

        <div className="todo-container">
            <header>
                <h1>Todo</h1>
                <Link className="btn-add-todo" to="new-todo"><FiPlus className="icon-add-todo" size={30} color="251FC5">
                </FiPlus></Link>
            </header>
            <ul className="todo-list">
                <li>
                    <strong>Title:</strong>
                    <p>Aqui o Titulo</p>
                    <strong>Date:</strong>
                    <p>00/00/00</p>
                    <strong>Descrition:</strong>
                    <p>Aqui a descrição do todo</p>
                    <button type="button"><FiTrash2 size={20} color="#251FC5" /></button>
                    <button type="button"><FiCheck size={20} color="#251FC5" /></button>
                </li>
                <li>
                    <strong>Title:</strong>
                    <p>Aqui o Titulo-B</p>
                    <strong>Date:</strong>
                    <p>00/00/01</p>
                    <strong>Descrition:</strong>
                    <p>Aqui a descrição do todo-B</p>
                    <button type="button"><FiTrash2 size={20} color="#251FC5" /></button>
                    <button type="button"><FiCheck size={20} color="#251FC5" /></button>
                </li>
            </ul>
        </div>
    )

}

export default ExerciseB