import React, { useState, useEffect } from "react"
import "./Todo.css"
import { Link, useNavigate } from "react-router-dom"
import { FiPlus, FiTrash2, FiCheck } from "react-icons/fi"
import remote from "../../../services/api";
import { format } from 'date-fns'


function ExerciseB() {
    const nav = useNavigate()
    const [todos, setTodos] = useState([])

    useEffect(() => {
        
        remote.api.get('todo').then(
            response => {
                setTodos(response.data)
            }
        )
    })

    async function deleteTodo(id) {
        try {
            await api.delete(`todo/delete/${id}`)
            todos.filter(todo => todo.id !== id)
        } catch (error) {
            alert('error when deleting')
        }
    }

    return (

        <div className="todo-container">
            <header>
                <h1>Todo</h1>
                <Link className="btn-add-todo" to="new-todo"><FiPlus className="icon-add-todo" size={30} color="251FC5">
                </FiPlus></Link>
            </header>
            <ul className="todo-list">
                {todos.map(todo => {
                    const dataCorrigida = todo.dataAgendada.replace('--', '-');
                    const dataSemZ = dataCorrigida.replace('Z', '');

                    return (
                        <li>
                            <strong>Title:</strong>
                            <p>{todo.titulo}</p>
                            <strong>Date:</strong>
                            <p>{format(new Date(dataSemZ), 'dd/MM/yyyy')}</p>
                            <strong>Descrition:</strong>
                            <p>{todo.descricao}</p>
                            <button type="button"><FiCheck size={20} color="#251FC5" /></button>
                            <button onClick={() => deleteTodo(todo.id)} type="button"><FiTrash2 size={20} color="#251FC5" /></button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}

export default ExerciseB