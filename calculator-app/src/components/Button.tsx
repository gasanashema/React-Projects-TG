import { useState } from "react";

function Button(props) {
  const styles = props.styles;
  const [value,setValue] = useState(props.value);
  return <button type="button" className={`mt-0 pt-0 h-full w-full text-2xl font-semibold border-none ${styles}`} value={value}>{value}</button>
}

export default Button