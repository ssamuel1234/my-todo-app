import React from 'react'; 
interface TodoItemProps {
    todo: { name: string; completed: boolean };
}

function TodoItem({ todo }: TodoItemProps) {
    return <div>{todo.name}</div>
}

export default TodoItem;

