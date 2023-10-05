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
            <h1>Add New Todo</h1>
            <form className="form-todo">
                <input value={titulo} onChange={e => setTitulo(e.target.value)} placeholder="Title" />
                <textarea value={descricao} onChange={e => setDescricao(e.target.value)} placeholder="Description" />
                <input value={date} onChange={e => setDate(e.target.value)} type="date" placeholder="Date" />
                <button onClick={createTodo} className="button-submit-todo" type="submit">Add</button>
            </form>
        </div>
    )
}

export default NewTodo