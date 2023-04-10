
import { useState } from 'react'
import './App.css'
import Router2 from "./Router/index"
import context from './context/context'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './UI/Navbar/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <context.Provider value={""}>

      <div className='app'>
        <Sidebar />
        <div className="routesAndNavbar">
         <Navbar />
          <Router2 />
        </div>
      </div>
    </context.Provider>
  )
}

export default App