import React from "react"
import './Home.css'

function Home(){
    return(
        <div className="home-container">
        <h1>Home</h1>

        <h2>Exercise 1: Validate CNPJ format and check digits</h2>
        <p className="completed">Located in the menu 'CNPJ Validator'</p>

        <h2>Exercise 2: Test if two rectangles intersect</h2>
        <p className="not-completed">Not completed</p>

        <h2>Exercise 3: Compute the area of intersection between two rectangles</h2>
        <p  className="not-completed">Not completed</p>

        <h2>Exercise 4: Simple Todo List</h2>
        <p className="completed">Located in the menu 'Todo'</p>

        <h2>Exercise 5:  Rest Client - World Clock</h2>
        <p className="completed">Located in the menu 'UTC'</p>
        
        <h2>Exercise 6:  Rest Server - World Clock</h2>
        <p className="completed">Work on the backend together to Exercise 5  'UTC'</p>

        <h2>Exercise 7:  Entity Relationship Diagram - Simple Order Manager</h2>
        <p className="completed">Located in pdf in the repository</p>

        </div>
    )
}

export default Home