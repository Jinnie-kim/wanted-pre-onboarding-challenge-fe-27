import TodoList from '../component/TodoList';

function TodoLists() {
  const todos = ['ui 과제 완성하기', '공부계획 세우기'];
  return (
    <div>
      <h1>오늘의 할 일들😃</h1>

      <ul>
        <TodoList todos={todos} />
      </ul>
    </div>
  );
}

export default TodoLists;
