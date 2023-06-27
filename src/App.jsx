import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-center font-black text-6xl">Hello!</h1>
      <br />
        <button className="bg-slate-600 p-4 rounded-lg font-black text-white hover:bg-slate-400 duration-200" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
        
    </>
  )
}

export default App
