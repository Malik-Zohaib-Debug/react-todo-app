import React, {useContext} from "react";
import { GlobalContext } from "../global/globalContext";

const TasksLists = () => {

    let {tasks} = useContext(GlobalContext);

    console.log(tasks)

    return(
        <div className="tasks-list">
            <ul>
                {tasks.map((task) => {
                    return(<li>
                        <div>
                            <p>Task: {task.task}</p>
                            <p>Status: {task.status}</p>
                        </div>
                    </li>)
                })}
            </ul>
        </div>
    );
}

export default TasksLists;