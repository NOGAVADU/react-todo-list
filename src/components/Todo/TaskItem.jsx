import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const TaskItem = ({task, deleteTodo, editTodo, completeTodo}) => {
    const deleteTask = () => {
        deleteTodo(task.id)
    }

    const editTask = () => {
        editTodo(task.id)
    }

    const completeTask = () => {
        completeTodo(task.id)
    }

    return (
        <div className={task.Completed ? 'TaskItem completed' : 'TaskItem'}>
            <p className={task.Completed ? "TaskItem___text completed" : "TaskItem__text"}>{task.task}</p>
            <div className="TaskItem__btns">
                <FontAwesomeIcon className="TaskItem__btn" icon={faCheck} onClick={completeTask}/>
                <FontAwesomeIcon className="TaskItem__btn" icon={faPenToSquare} onClick={editTask}/>
                <FontAwesomeIcon className="TaskItem__btn" icon={faTrash} onClick={deleteTask}/>
            </div>
        </div>
    );
}

export default TaskItem;
