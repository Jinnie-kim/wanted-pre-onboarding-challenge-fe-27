function TodoList({ todos }: { todos: string[] }) {
  console.log(todos);
  return todos.map((todo) => {
    return (
      <li>
        <span>{todo}</span>
        <button>수정</button>
        <button>삭제</button>
      </li>
    );
  });
}

export default TodoList;
