import Button from './Button'
import Input from './Input'

function Form() {
  return (
    <div className="h-screen flex justify-center items-center w-full bg-cyan-950">
        <form action="" className="grid grid-cols-4 grid-rows-6 h-[600px] w-[450px] bg-amber-200">
            <Input/>
            <div className="">

            <Button />
            </div>
        </form>
    </div>
  )
}

export default Form