
import { Suspense, useState } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'
import Available from './components/Navber/AvailablePlayer/Available'
import Navbar from './components/Navber/Navbar'
import Selected from './components/Navber/Selected/Selected'

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-[#0f591b]  animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-[#0f591b]  animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-[#0f591b] animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
};


const fetchPlayers=async ()=>{
        const res= await fetch('./players.json')
        return res.json();
}
const playersPromise=fetchPlayers()
function App() {

const [toggole,setToggole]=useState(true)
const [availableBalance,setAvailableBalance]=useState(100000000);
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
<div className='max-w-7xl  p-3 lg:p-5  mt-5 mb-5 font-bold mx-auto flex justify-between items-center '>
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
  toggole ===true?<Suspense fallback={Spinner()}>
<Available availableBalance={availableBalance}
 setAvailableBalance={setAvailableBalance}
  playersPromise={playersPromise } 
  addPlayer={addPlayer}
  setAddPlayer={setAddPlayer}
  ></Available> </Suspense>:
  <Suspense fallback={Spinner()}>
    
     <Selected removeCard={removeCard} addPlayer={addPlayer}
  ></Selected>
    
     </Suspense>
}
   <ToastContainer />
    </>
  )
}
// export default Spinner;
export default App
