import { useState } from "react"

function App() {
  const [color,setColor]=useState("red")

  return (
    <>
      <div className="w-full h-screen duration-100 " style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap bg-white gap-3 p-3 rounded-lg shadow-2xl">
            <button onClick={()=> setColor("red")} className="bg-red-500 px-4 py-1 rounded-3xl text-white">Red</button>
            <button onClick={()=> setColor("white")} className="bg-white px-4 py-1 rounded-3xl text-black border border-black">White</button>
            <button onClick={()=> setColor("blue")} className="bg-blue-500 px-4 py-1 rounded-3xl text-white">Blue</button>
            <button onClick={()=> setColor("orange")} className=" bg-orange-400 px-4 py-1 rounded-3xl text-white">Orange</button>
            <button onClick={()=> setColor("green")} className="bg-green-600 px-4 py-1 rounded-3xl text-white">Green</button>
            <button onClick={()=> setColor("yellow")} className="bg-yellow-300 px-4 py-1 rounded-3xl text-slate-600">Yellow</button>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
