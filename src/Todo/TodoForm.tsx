import Input from '../component/Input';

function TodoForm() {
  return (
    <div className="w-[500px] bg-rose-50 m-auto">
      <form className="flex justify-between">
        <Input title="오늘의 할 일" type="text" />

        <button>등록하기</button>
      </form>
    </div>
  );
}

export default TodoForm;
