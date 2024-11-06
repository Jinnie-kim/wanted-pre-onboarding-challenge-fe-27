import Input from '../component/Input';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="w-[500px] m-auto bg-rose-50 flex flex-col gap-[10px]">
      <h1 className="m-auto">회원가입</h1>
      <form className="flex flex-col gap-[20px]">
        <Input title="Email" type="email" />

        <Input title="Password" type="password" />

        <button className="p-[10px] bg-green-200">
          <Link to="/todopage">회원가입하기</Link>
        </button>
      </form>
    </div>
  );
}

export default Signup;
