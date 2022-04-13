import React from 'react'
import { useState } from 'react'

export const TodoForm = ({addTodo}) => {

    const [userInput, setUserInput] = useState('');
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // trim elimina espacios en blanco
        if (userInput.trim() !== '') {
            addTodo(userInput);
            setUserInput('');
        }
    }

    const buttonStyle = () => {
        return {
            padding: '5px',
            fontSize: '16px',
            marginLeft: '10px'
        }
    }
  return (
    <div style={{marginLeft: 30}}>
        <form onSubmit={handleSubmit}>
            <input style={{fontSize: '16px', width: '75%'}} type="text" value={userInput} onChange={handleChange}/>
            <button style={buttonStyle()}>Add task</button>
        </form>
    </div>
  )
}

export default TodoForm
