
import { Suspense, useState } from 'react'
import './App.css'
import Available from './components/Navber/AvailablePlayer/Available'
import Navbar from './components/Navber/Navbar'

const fetchPlayers=async ()=>{
        const res= await fetch('./players.json')
        return res.json();
}

function App() {
const playersPromise=fetchPlayers()
const [toggole,setToggole]=useState(true)
  return (
    <>
<Navbar></Navbar>
<div className='max-w-7xl  font-bold mx-auto flex justify-between items-center '>
<h1 className='text-4xl'>Available Players</h1>
<div className="join">
  <button onClick={()=>{
    setToggole(true)}} className={`btn join-item ${toggole===true?"bg-orange-600":''} `}>Available</button>
  <button onClick={()=>{
    setToggole(false)}} className={`btn join-item ${toggole===false?"bg-orange-600":''} `}>Selected <span> (0)</span></button>
  
</div>
</div>
{
  toggole ===true?<Suspense>
<Available playersPromise={playersPromise}></Available> </Suspense>:<Suspense></Suspense>
}




    </>
  )
}

export default App
