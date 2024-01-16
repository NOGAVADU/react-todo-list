import React, { useState } from "react";
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from 'uuid'

const TaskAdd = ({create}) => {
    const [value, setValue] = useState("");

    const addNewTodo = (e) => {
        e.preventDefault();
        if (value.length > 0) {
            const newTodo = {
                id: uuidv4(), 
                task: value,
                completed: false,
                isEditing: false,
            };
            create(newTodo)
            setValue("");
        } 
    };

    return (
        <form className="TaskAdd">
            <MyInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="What you need to do?"
            />
            <MyButton onClick={addNewTodo}>
                <FontAwesomeIcon icon={faPlus} />
            </MyButton>
        </form>
    );
};

export default TaskAdd;
