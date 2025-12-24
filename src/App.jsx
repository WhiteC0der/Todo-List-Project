import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoIteam'
import { useEffect } from 'react'
import { TodoContextProvider } from './context'

function App() {
  const [todos, setTodos] = useState([])
  
  const addtodo=(todo)=>{
    // setTodos([...todos,todo]) destrucute
    setTodos((prevTodos)=>[...prevTodos,{id:Date.now(),...todo}])
   }

  const updatetodo=(id,updatedTodo)=>{
    setTodos((prevTodos)=>prevTodos.map((todo)=>
      todo.id===id ? updatedTodo : todo
    ))
  }

  const deletetodo=(id)=>{
    setTodos((prev)=> prev.filter((todo)=> todo.id != id))
  }

  const togglecompleted=(id)=>{
    setTodos((prev)=>prev.map((todo)=>{
      return todo.id===id? {...todo,completed: !todo.completed }:todo
    }))
  }

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem('todos'));
    if(todos && todos.length > 0){
      setTodos(todos);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])

  return (
    <TodoContextProvider value={{todos,addtodo,updatetodo,deletetodo,togglecompleted}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                         <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */
                        todos.map((todo)=>(
                          <div className="w-full">
                            <TodoItem key={todo.id} todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoContextProvider>
  )
}

export default App
