import React from 'react';
import logo from "../../assets/logo.png"
import dollar from "../../assets/dollar 1.png" 
const Navbar = ({availableBalance}) => {
    return (
              <div className="navbar max-w-7xl mx-auto  p-1 md:p-3 lg:p-5 ">
     <div className="flex-1">
    <img className="md:w-[60px] md:h-[60px]" src={logo} alt="Cricket-logo" />
    </div>
    <div className="flex  flex-col md:flex-row md:justify-center justify-end items-center ">
     <div className='md:flex  hidden md:flex-row '>
       <p className='ml-5'>Home</p>
        <p className='ml-5'>Fixture</p>
        <p className='ml-5'>Teams</p>
        <p className='mr-5 ml-5'>Schedules</p>
     </div>
 
    
    <button className="btn">
     <span>{availableBalance}</span>
     <span>Coin</span>
     <span><img src={dollar} alt="" /></span>
    </button>
  </div>
</div>





    );
};

export default Navbar;