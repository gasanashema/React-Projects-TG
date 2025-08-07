
function Button(props) {
  const color = props.color;
  return <button type="button" className={`bg-white mt-0 pt-0 h-full w-full ${color}`}>Click</button>
}

export default Button