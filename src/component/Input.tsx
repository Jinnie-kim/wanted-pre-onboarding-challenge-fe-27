function Input({ title, type }: { title: string; type: string }) {
  return (
    <div className="flex flex-col">
      <label htmlFor="">{title}</label>
      <input type={type} className="border" />
    </div>
  );
}

export default Input;
