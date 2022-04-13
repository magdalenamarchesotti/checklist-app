import React from 'react'

function TodoItem({todo, onComplete, onDeleteItem}) {

const getStyle = () => {
    return {
        textDecoration: todo.completed ? 'line-through' : 'none',
        margin: '30px',
        backgroundColor: '#FAFAFA',
        padding: '5px'

    }
}

const inputStyle = () => {
  return {
    marginRight: '10px',
  }
}
  return (
    <div style={getStyle()}>
        <input style={inputStyle()} type="checkbox" checked={todo.completed} onChange={()=> onComplete(todo.id)} />
            {todo.task}
            <button className='addBtn' onClick={() => onDeleteItem(todo.id)}>X</button>
    </div>
  )
}

export default TodoItem