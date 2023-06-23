import React, {useContext} from "react";
import { GlobalContext } from "../global/globalContext";
import Task from './Task';

const TasksList = () => {
    
    const tasks = useContext(GlobalContext);

    let allTasks = tasks.tasks;
    
    return(
        <>
         <h3>All Tasks</h3>
         <ul className="list">
            {allTasks.map(task => (<Task key={task.id} tasks={task} />))}
         </ul>
        </>
    );
}

export default TasksList;