import { useState } from 'react'
import Button from './Button'
import Input from './Input'

function Form() {

  const operations = ['AC', '+/-', '%', '÷', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']

  const [calcOps,setCalcOps] = useState([]);

  const [currNum,setCurrNum] = useState([]);
  const [opp,setOpp] = useState('');

  const handleNumberClick= e =>{
    setCurrNum(prev => [...prev,e.target.value])
  }
  const hendleOperationClick = e =>{
    setOpp
  }
  return (
    <div className="h-screen flex justify-center items-center w-full bg-cyan-950">
      <form action="" className="grid grid-cols-4 grid-rows-6 h-[650px] w-[400px] bg-[#7a7b88]">
        <Input />
        <div className="col-span-4 grid grid-cols-4 grid-rows-5 row-span-5 gap-0.5">
          {
            operations.map((item, index) => (
              <Button key={index} styles={`bg-gray-200 hover:bg-gray-300 ${((index+1) >=4 &&(index+1) %4 == 0)||index==operations.length-1 ? 'bg-orange-400 text-white hover:bg-orange-500': 'bg-gray-200 hover:bg-gray-300'} ${item == '0'? 'col-span-2':''}`} value={item} />
            ))
          }
          {/* <Button styles="bg-gray-200 hover:bg-gray-300" value='AC' />
          <Button styles="bg-gray-200 hover:bg-gray-300" value='+/-' />
          <Button styles="bg-gray-200 hover:bg-gray-300" value='%' />
          <Button styles="bg-orange-400 text-white hover:bg-orange-500" text value='÷' />
          <Button styles="bg-gray-200 hover:bg-gray-300" value='7' />
          <Button styles="bg-gray-200 hover:bg-gray-300" value='8' />
          <Button styles="bg-gray-200 hover:bg-gray-300" value='9' />
          <Button styles="bg-orange-400 text-white hover:bg-orange-500" text value='X' />
          <Button styles="bg-gray-200 hover:bg-gray-300" value='4' />
          <Button styles="bg-gray-200 hover:bg-gray-300" value='5' />
          <Button styles="bg-gray-200 hover:bg-gray-300" value='6' />
          <Button styles="bg-orange-400 text-white hover:bg-orange-500" text value='-' />
          <Button styles="bg-gray-200 hover:bg-gray-300" value='1' />
          <Button styles="bg-gray-200 hover:bg-gray-300" value='2' />
          <Button styles="bg-gray-200 hover:bg-gray-300" value='3' />
          <Button styles="bg-orange-400 text-white hover:bg-orange-500" text value='+' />
          <Button styles="bg-gray-200 hover:bg-gray-300 col-span-2" value='0' />
          <Button styles="bg-gray-200 hover:bg-gray-300" value='.' />
          <Button styles="bg-orange-400 text-white hover:bg-orange-500" text value='=' /> */}

        </div>
      </form>
    </div>
  )
}

export default Form