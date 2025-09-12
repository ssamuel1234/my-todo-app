import { useState } from "react";

/**
 * A React component that displays a todo item with its name and completion status.
 * 
 * @param props - The component props.
 * @param props.todo - The todo object with name and completed status.
 * @example
 * <TodoItem todo={{ name: 'Buy milk', completed: true }} onToggle={(id) 
 * => console.log(id)} />
 */
interface TodoItemProps {
  todo: { id: string; name: string; completed: boolean };
  onToggle: (id: string) => void;
  onUpdate: (id: string, name: string) => void;
}

function TodoItem({ todo, onToggle, onUpdate  }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);
    
  return (
    <>
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      {isEditing ? (
        <><input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button
            onClick={() => {
              onUpdate(todo.id, editValue);
              setIsEditing(false);
            }}
          >Save</button></>
          
      ) : (
          <>
            {todo.name}
            <button onClick={() => setIsEditing(true)}>Edit</button>  
          </>
      )}
    </div >
      </>
  );
}

export default TodoItem;

