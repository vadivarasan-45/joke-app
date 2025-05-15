import { useState } from "react"
import {useSelector,useDispatch} from "react-redux"
import { list } from "./jokeslice"
function App()
{
  const usedispatch=useDispatch()
  const [one,setone]=useState()
  function b(event)
  {
   setone(event.target.value)
  }
  function c()
  {
    usedispatch(list(one))
    setone("")
  }
  const a=useSelector(function(state){
    return (state.count)
  })
  return(
    <div className="bg-gray-700 text-white text-xl py-60 font-bold border rounded-md">
    <div className="text-center">
    <input className="font-normal text-black p-1  outline-none border rounded-s-md" value={one} onChange={b} placeholder="Enter the object"></input>
    <button className="bg-blue-500 p-1 border rounded-e-md" onClick={c}>Get {one}</button>
    <h1 className="p-16 font-semibold text-2xl">{a}</h1>
    </div>
    </div>
  )
}
export default App