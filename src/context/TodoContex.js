import { createContext, useContext } from "react";

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"Learn React Context API",
            isCompleted:false,
        },
    ],
    addtodo:(todo)=>{},
    updatetodo:(id,todo)=>{},
    deletetodo:(id)=>{},
    togglecompleted:(id)=>{},
})

export const useTodoContext=()=>{
    return useContext(TodoContext);
}

export const TodoContextProvider=TodoContext.Provider;