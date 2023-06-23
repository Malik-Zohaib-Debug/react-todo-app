import React, {useContext} from "react";
import { GlobalContext } from "../global/globalContext";

export const Task = ( {tasks} ) => {

    const {deleteTask} = useContext(GlobalContext);
    console.log(tasks);
    return (
        <li>
            <p>{tasks.Tasks}</p>
            <button onClick={()=> deleteTask(tasks.id)} className="delete-btn">X</button>
        </li>
    );
}

export default Task;