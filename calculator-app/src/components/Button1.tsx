function Button1({ styles, value, onClick }) {
  return (
    <button
      type="button"
      className={`mt-0 pt-0 h-full w-full text-2xl font-semibold border-none ${styles}`}
      value={value}
      onClick={onClick}
    >
      {value}
    </button>
  )
}

export default Button1
