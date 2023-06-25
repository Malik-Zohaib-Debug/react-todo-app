import React, {useContext} from "react";
import { GlobalContext } from "../global/globalContext";


export const Task = ({task}) => {

    const { deleteTask } = useContext(GlobalContext);

    console.log(task);

    return(
        <li>
            {task.task}
            <button onClick={()=> deleteTask(task.id)}>X</button>
        </li>
    )
}