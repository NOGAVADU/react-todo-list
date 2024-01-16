import React, { useState } from "react";
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from 'uuid'

const TaskEdit = ({task, editTask}) => {
    const [value, setValue] = useState(task.task);

    const EditTodo = (e) => {
        e.preventDefault();
        editTask(value, task.id)
        setValue("");
    };

    return (
        <form className="TaskAdd">
            <MyInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="Change your task"
            />
            <MyButton onClick={EditTodo}>
                <FontAwesomeIcon icon={faPenToSquare} />
            </MyButton>
        </form>
    );
};


export default TaskEdit;
