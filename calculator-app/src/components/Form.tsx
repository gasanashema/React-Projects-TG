import Button from './Button'
import Input from './Input'

function Form() {
  return (
    <div className="h-screen flex justify-center items-center w-full bg-cyan-950">
        <form action="" className="grid grid-cols-4 grid-rows-6 h-[600px] w-[450px] bg-gray-400">
            <Input/>
            <div className="col-span-4 grid grid-cols-4 grid-rows-5 row-span-5 gap-0.5">

            <Button color="bg-gray-600"/>
            </div>
        </form>
    </div>
  )
}

export default Form