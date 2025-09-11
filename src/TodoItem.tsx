/**
 * A React component that displays a todo item with its name and completion status.
 * 
 * @param props - The component props.
 * @param props.todo - The todo object with name and completed status.
 * @example
 * <TodoItem todo={{ name: 'Buy milk', completed: true }} />
 */
interface TodoItemProps {
  todo: { id: string; name: string; completed: boolean };
  onToggle: (id: string) => void;
}

function TodoItem({ todo, onToggle }: TodoItemProps) {
    return (
    <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        {todo.name}
    </div>
  );
}

export default TodoItem;

