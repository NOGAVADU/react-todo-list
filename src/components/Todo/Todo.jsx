import React, { useEffect, useRef, useState } from "react";
import TaskAdd from "./TaskAdd";
import TaskList from "./TaskList";
import "./Todo.css";
import Placeholder from "../UX/Placeholder/Placeholder";

const Todo = () => {
    const [todos, setTodos] = useState([
        // { id: 1, task: "Walk with dog", Completed: false, isEditing: false },
        // { id: 2, task: "Go to shopping", Completed: false, isEditing: false },
        // { id: 3, task: "Take a meal", Completed: false, isEditing: false },
    ]);

    const addTodo = (newTask) => {
        setTodos([...todos, newTask]);
        console.log(todos);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((task) => task.id !== id));
    };

    const editTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        );
    };

    const completeTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, Completed: !todo.Completed } : todo
            )
        );
    };

    const editTask = (task, id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, task, isEditing: !todo.isEditing }
                    : todo
            )
        );
    };

    return (
        <div className="Todo">
            <h1 className="Todo__title">Just simple ToDo list</h1>
            <TaskAdd create={addTodo} />

            {todos.length === 0 ? (
                <Placeholder/>
            ) : (
                <TaskList
                    tasks={todos}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    editTask={editTask}
                    completeTodo={completeTodo}
                />
            )}
        </div>
    );
};

export default Todo;
