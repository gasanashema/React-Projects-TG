import { useState } from 'react'
import Button1 from './Button1'
import Input1 from './Input1'

function Form1() {
  const operations = ['AC', '+/-', '%', '÷', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']

  const [display, setDisplay] = useState('0')
  const [firstNum, setFirstNum] = useState(null)
  const [operator, setOperator] = useState(null)
  const [waitingForSecondNum, setWaitingForSecondNum] = useState(false)

  const handleClick = (value) => {
    if (!isNaN(value) || value === '.') {
      // Number or decimal
      if (waitingForSecondNum) {
        setDisplay(value === '.' ? '0.' : value)
        setWaitingForSecondNum(false)
      } else {
        setDisplay(prev =>
          prev === '0' && value !== '.' ? value : prev + value
        )
      }
    } else if (value === 'AC') {
      setDisplay('0')
      setFirstNum(null)
      setOperator(null)
      setWaitingForSecondNum(false)
    } else if (value === '+/-') {
      setDisplay((prev) => (parseFloat(prev) * -1).toString())
    } else if (value === '%') {
      setDisplay((prev) => (parseFloat(prev) / 100).toString())
    } else if (value === '=') {
      if (operator && firstNum !== null) {
        const secondNum = parseFloat(display)
        const result = calculate(firstNum, secondNum, operator)
        setDisplay(result.toString())
        setFirstNum(null)
        setOperator(null)
        setWaitingForSecondNum(false)
      }
    } else {
      // Operator
      if (firstNum === null) {
        setFirstNum(parseFloat(display))
      } else if (operator) {
        const secondNum = parseFloat(display)
        const result = calculate(firstNum, secondNum, operator)
        setDisplay(result.toString())
        setFirstNum(result)
      }
      setOperator(value)
      setWaitingForSecondNum(true)
    }
  }

  const calculate = (num1, num2, op) => {
    switch (op) {
      case '+': return num1 + num2
      case '-': return num1 - num2
      case 'X': return num1 * num2
      case '÷': return num2 !== 0 ? num1 / num2 : 'Error'
      default: return num2
    }
  }

  return (
    <div className="h-screen flex justify-center items-center w-full bg-cyan-950">
      <form className="grid grid-cols-4 grid-rows-6 h-[650px] w-[400px] bg-[#7a7b88]">
        <Input1 value={display} />
        <div className="col-span-4 grid grid-cols-4 grid-rows-5 row-span-5 gap-0.5">
          {operations.map((item, index) => (
            <Button1
              key={index}
              styles={`${
                ((index + 1) >= 4 && (index + 1) % 4 === 0) || index === operations.length - 1
                  ? 'bg-orange-400 text-white hover:bg-orange-500'
                  : 'bg-gray-200 hover:bg-gray-300'
              } ${item === '0' ? 'col-span-2' : ''}`}
              value={item}
              onClick={() => handleClick(item)}
            />
          ))}
        </div>
      </form>
    </div>
  )
}

export default Form1
