
import { Suspense, useState } from 'react'
import './App.css'
import Available from './components/Navber/AvailablePlayer/Available'
import Navbar from './components/Navber/Navbar'
import Selected from './components/Navber/Selected/Selected'

const fetchPlayers=async ()=>{
        const res= await fetch('./players.json')
        return res.json();
}
const playersPromise=fetchPlayers()
function App() {

const [toggole,setToggole]=useState(true)
const [availableBalance,setAvailableBalance]=useState(6000000);
const [addPlayer,setAddPlayer]=useState([]);
// console.log(addPlayer);
const removeCard=(p)=>{
 const filterData=addPlayer.filter(ply=>ply.player_name !== p.player_name)
  setAddPlayer(filterData);
//   console.log((p.price.split('Cr').join('').split('৳').join(''))
// );
  
  setAvailableBalance(availableBalance+Number(p.price.split('Cr').join('').split('৳').join('')))
}
  return (
    <>
<Navbar availableBalance={availableBalance}></Navbar>
<div className='max-w-7xl  font-bold mx-auto flex justify-between items-center '>
<h1 className='text-4xl'>{toggole===true ?'Available Players':`Selected Players (${addPlayer.length}/6)`}</h1>
<div className="join">
  <button onClick={()=>{
    setToggole(true)}} className={`btn join-item ${toggole===true?"bg-orange-600":''} `}>Available</button>
  <button onClick={()=>{
    setToggole(false)}} 
    className={`btn join-item ${toggole===false?"bg-orange-600":''} `}
    >Selected <span> ({`${addPlayer.length}`})</span></button>
  
</div>
</div>
{
  toggole ===true?<Suspense fallback={<p>Loading................</p>}>
<Available availableBalance={availableBalance}
 setAvailableBalance={setAvailableBalance}
  playersPromise={playersPromise } 
  addPlayer={addPlayer}
  setAddPlayer={setAddPlayer}
  ></Available> </Suspense>:
  <Suspense fallback={<p>Loading................</p>}>
    
     <Selected removeCard={removeCard} addPlayer={addPlayer}
  ></Selected>
    
     </Suspense>
}
    </>
  )
}

export default App
