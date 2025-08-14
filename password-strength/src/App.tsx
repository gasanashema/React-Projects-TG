import { useEffect, useState } from "react";

type obj = { len: boolean, upper: boolean, lower: boolean, digit: boolean, special: boolean };

function App() {

  const [check, setcheck] = useState<obj>({ len: false, upper: false, lower: false, digit: false, special: false })
  const [inputV, setInputV] = useState('')

  useEffect(()=>{
    let str:string =inputV;
      if (str.length >= 8) {
          setcheck(prev => {...prev, length: true})
      }
      if ((/[A-Z]/).test(str)) {
        setcheck(prev => {...prev, upper: true})
      }
      if ((/[a-z]/).test(str)) {
        setcheck(prev => {...prev, lower: true})
          }
      if ((/\\d/).test(str)) {
        setcheck(prev => {...prev, digit: true})
          }
      if ((/[^a-zA-Z,0-9]/).test(str)) {
        setcheck(prev => {...prev, special: true})
          }
   }),[inputV])


return (

  <div className="flex h-screen w-full justify-center items-center">
    <form action="" className="p-12">
      <div className="grid">
        <input type="text" placeholder="Password" className="p-6" value={inputV} onChange={(e)=>setInputV(e.target.value)} />
        <span>hide/show</span>
      </div>
      <div className="grid grid-cols-2 space-y-4">
        <input type="checkbox" disabled name="" id="" /><span>At least 8 characters</span>
        <input type="checkbox" disabled name="" id="" /><span>Contains uppercase character</span>
        <input type="checkbox" disabled name="" id="" /><span>Contains lowercase character</span>
        <input type="checkbox" disabled name="" id="" /><span>Contains a digit</span>
        <input type="checkbox" disabled name="" id="" /><span>Contains a special character</span>
      </div>
    </form>
  </div>

)
}

export default App
