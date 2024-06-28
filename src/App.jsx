import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState("olive")

  return (
    <>
    <div className="vh-100 vw-100 overflow-hidden d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: bgColor }}>
    <h2>Click on the button to change background color</h2>
    <div className="d-flex">
    <button className="btn mt-5 mx-3 rounded-lg px-4 text-white" onClick={()=>setBgColor('red')} style={{backgroundColor:"red"}}>Red</button>
    <button className="btn mt-5 mx-3 rounded-lg px-4 text-white" onClick={()=>setBgColor('green')} style={{backgroundColor:"green"}}>Green</button>
    <button className="btn mt-5 mx-3 rounded-lg px-4 text-white" onClick={()=>setBgColor('blue')} style={{backgroundColor:"blue"}}>Blue</button>
    <button className="btn mt-5 mx-3 rounded-lg px-4 text-white" onClick={()=>setBgColor('purple')} style={{backgroundColor:"purple"}}>Purple</button>
    </div>
    <div className="d-flex">
    <button className="btn mt-5 mx-3 rounded-lg px-4 text-white" onClick={()=>setBgColor('gray')} style={{backgroundColor:"gray"}}>Gray</button>
    <button className="btn mt-5 mx-3 rounded-lg px-4 text-white" onClick={()=>setBgColor('orange')} style={{backgroundColor:"orange"}}>Orange</button>
    <button className="btn mt-5 mx-3 rounded-lg px-4 text-white" onClick={()=>setBgColor('Brown')} style={{backgroundColor:"Brown"}}>Brown</button>
    <button className="btn mt-5 mx-3 rounded-lg px-4 text-white" onClick={()=>setBgColor('pink')} style={{backgroundColor:"pink"}}>Pink</button>
    </div>
     </div>
    
    </>
  )
}

export default App
