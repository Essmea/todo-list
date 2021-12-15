import React from 'react' //code snippet, skriv rfc för mall
import Todo from './Todo'

export default function TodoList({todos, toggleTodo}) {
    return (
        todos.map(todo => {
            return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} /> //key måste vara unik för den arrayen vi använder
        })
        
        //Alternativ utan loop:<div>
         //   {todos.length} --> Curly brackets säger att det är js kod
       // </div> 
    )
}
