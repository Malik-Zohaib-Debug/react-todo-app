import React, {useContext} from "react";
import { GlobalContext } from "../global/globalContext";
import Task from './Task';

const TasksList = () => {
    
    const {tasks} = useContext(GlobalContext);

    console.log(tasks)
    
    return(
        <>
         <h3>All Tasks</h3>
         <ul className="list">
            {tasks.map(task => (<Task key={task.id} tasks={task.tasks} />))}
         </ul>
        </>
    );
}

export default TasksList;