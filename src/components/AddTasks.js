import React, {useState, useContext} from "react";
import { GlobalContext } from "../global/globalContext";
import { clear } from "@testing-library/user-event/dist/clear";

const AddTasks = () => {

    let [task, setTask] = useState('');
    let {addTask} = useContext(GlobalContext);


    const onSubmit = e => {
        e.preventDefault();

        let newTask = {
            id: Math.floor(Math.random() * 100000000),
            task,
            status: false
        }

        addTask(newTask);
    }

    return(
        <>
            <h3>Add Your Daily Tasks</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <input type='text' id="inputText" placeholder="Enter your task here..." onChange={(e) => setTask(e.target.value)}/>
                </div>
                <button className="btn-submit">Submit</button>
            </form>
        </>
    );
}

export default AddTasks;