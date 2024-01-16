import React, { useState } from "react";
import TaskItem from "./TaskItem";
import TaskEdit from "./TaskEdit";
import { Transition, TransitionGroup } from "react-transition-group";

const TaskList = ({ tasks, deleteTodo, editTodo, editTask, completeTodo }) => {
    return (
        <ul className="TaskList">

            {tasks.map((todo, index) =>
                todo.isEditing ? (
                    <TaskEdit task={todo} key={index} editTask={editTask} />
                ) : (
                    <TaskItem
                        task={todo}
                        key={index}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                        completeTodo={completeTodo}
                    />
                )
            )}
        </ul>
    );
};

export default TaskList;
