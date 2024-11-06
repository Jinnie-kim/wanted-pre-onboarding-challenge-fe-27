function Input({ title, type }: { title: string; type: string }) {
  return (
    <div className="flex flex-col gap-[10px]">
      <label htmlFor="">{title}</label>
      <input type={type} className="border" />
    </div>
  );
}

export default Input;
