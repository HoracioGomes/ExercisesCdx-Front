import React, { useState } from "react"
import "./Todo.css"
import { Link, useNavigate } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"
import api from "../../../services/api";

function NewTodo() {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [date, setDate] = useState('')
    const nav = useNavigate()

    async function createTodo(e) {
        e.preventDefault()

        const data = {
            titulo,
            descricao,
            date
        }

        try {
            console.log(data);
            const response = await api.post('todo', data)
            console.log(response);
            nav('/todo')
        } catch (error) {
            alert('Error while recording todo!')
        }
    }

    return (
        <div className="new-todo-container">
            <div className="content">
                <section className="form">
                    <h1>Add New Todo</h1>
                    <Link className="btn-back-list" to="/todo">
                        <FiArrowLeft className="icon-confirm-todo" size={16} color="251FC5"></FiArrowLeft></Link>
                </section>
                <form>
                    <input value={titulo} onChange={e => setTitulo(e.target.value)} placeholder="Title" />
                    <input value={descricao} onChange={e => setDescricao(e.target.value)} placeholder="Description" />
                    <input value={date} onChange={e => setDate(e.target.value)} type="date" placeholder="Date" />
                    <button onClick={createTodo} className="button-submit-todo" type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}

export default NewTodo