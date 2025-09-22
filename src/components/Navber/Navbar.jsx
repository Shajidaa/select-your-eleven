import React from 'react';
// import logo from "../assets/logo.png"
const Navbar = ({availableBalance}) => {
    return (
              <div className="navbar max-w-7xl mx-auto">
     <div className="flex-1">
    {/* <img className="w-[60px] h-[60px]" src={logo} alt="Cricket-logo" /> */}
    </div>
    <div className="flex">
    <button className="btn">
     <span>{availableBalance}</span>
     <span>Coin</span>
    </button>
  </div>
</div>
    );
};

export default Navbar;