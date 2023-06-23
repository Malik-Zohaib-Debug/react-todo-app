import React, {useContext} from "react";
import { GlobalContext } from "../global/globalContext";

export const Task = ( tasks) => {

    const {deleteTask} = useContext(GlobalContext);

    console.log(tasks)

    return (
        <li>
            {tasks.tasks}
            <button  className="delete-btn">x</button>
        </li>
    );
}

export default Task;