/**
 * A React component that displays a todo item with its name and completion status.
 * 
 * @param props - The component props.
 * @param props.todo - The todo object with name and completed status.
 * @example
 * <TodoItem todo={{ name: 'Buy milk', completed: true }} />
 */
interface TodoItemProps {
    todo: { name: string; completed: boolean };
}

function TodoItem({ todo }: TodoItemProps) {
    return (
    <div>
      <input type="checkbox" checked={todo.completed} readOnly />
      {todo.name}
    </div>
  );
}

export default TodoItem;

