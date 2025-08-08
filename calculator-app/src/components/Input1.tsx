function Input1({ value }) {
  return (
    <input
      type="text"
      dir="rtl"
      value={value}
      readOnly
      className="h-full outline-none text-5xl rtl:pr-5 bg-transparent col-span-4 caret-transparent text-white appearance-none 
      [&::-webkit-outer-spin-button]:appearance-none 
      [&::-webkit-inner-spin-button]:appearance-none"
      maxLength={10}
    />
  )
}

export default Input1
