import React from 'react';
import logo from "../../assets/logo.png"
import dollar from "../../assets/dollar 1.png" 
const Navbar = ({availableBalance}) => {
    return (
              <div className="navbar max-w-7xl mx-auto">
     <div className="flex-1">
    <img className="w-[60px] h-[60px]" src={logo} alt="Cricket-logo" />
    </div>
    <div className="flex justify-center items-center ">
     
        <p className='ml-5'>Home</p>
        <p className='ml-5'>Fixture</p>
        <p className='ml-5'>Teams</p>
        <p className='mr-5 ml-5'>Schedules</p>
    
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