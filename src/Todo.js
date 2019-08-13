import React, { useState } from "react"
import TodoList from "./TodoList"

function Todo() {
  const [items, setItems] = useState([])
  const [text, setText] = useState("")

  function handleChange(e) {
    setText(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!text.length) {
      return
    }
    const newItem = {
      id: Date.now(),
      text: text
    }

    setText("")
    setItems(items.concat(newItem))
  }

  return (
    <div>
      <h3>TODO</h3>
      <TodoList items={items} />
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={text} />
        <button>Add #{items.length + 1}</button>
      </form>
    </div>
  )
}

export default Todo
