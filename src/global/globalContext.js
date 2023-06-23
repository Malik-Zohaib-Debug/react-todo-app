import React, {createContext, useReducer} from "react";
import AppReducer  from "./globalReducer";

let initialState = {
    tasks: [
        {id: 1, Tasks: 'Learning React'},
        {id: 2, Tasks: 'Reading a book'},
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function addTask(task){
        dispatch({
            type: 'ADD_TASK',
            payload: task
        })
    }

    function deleteTask(id){
        dispatch({
            type: 'DELETE_TASK',
            payload: id
        })
    }

    return(<GlobalContext.Provider value={{
        tasks:state.tasks,
        addTask,
        deleteTask
    }}>
        {children}
    </GlobalContext.Provider>);
} 



