import React, { useContext, useState } from 'react';
import { TodoContext } from './TodoContext';

const TodoList = () => {
    const { state, dispatch } = useContext(TodoContext);
    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            const newTodo = {
                id: Math.random().toString(36).substr(2, 9),
                text: inputValue.trim(),
            };
            dispatch({ type: 'ADD_TODO', payload: newTodo });
            setInputValue('');
        }
    };

    const handleRemoveTodo = (id) => {
        dispatch({ type: 'REMOVE_TODO', payload: id });
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {state.todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
