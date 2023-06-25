import React, {createContext, useReducer} from "react"
import AppReducer from "./GlobalReducer";

let initialState = {
    tasks: [
        {id: 1, task: 'Learning React', status: false},
        {id: 2, task: 'Solve any 2 array challenges on leetcode', status: false},
        {id: 3, task: 'create any simple project in react', status: false},
    ]
}

export const GlobalContext = createContext(initialState);

const GlobalProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    function addTask(task){
        dispatch({
            type: 'ADD_TASK',
            payload: task
        });
    }

    function deleteTask(id){
        dispatch({
            type: 'DELETE_TASK',
            payload: id
        });
    }

    return(<GlobalContext.Provider value={{
        tasks: state.tasks,
        addTask,
        deleteTask
    }}>
        {children}
    </GlobalContext.Provider>)
}

export default GlobalProvider;