import React, {useContext} from "react";
import {Task} from "./Task";
import { GlobalContext } from "../global/globalContext";

const TasksLists = () => {

    let {tasks} = useContext(GlobalContext);

    

    return(
        <div className="tasks-list">
            <ul>
                {tasks.map(task => (<Task key={task.id} task={task}/>))}  
            </ul>
        </div>
    );
}

export default TasksLists;