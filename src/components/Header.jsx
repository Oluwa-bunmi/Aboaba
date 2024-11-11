import React from 'react'
import logo from "../assets/abo-aba white.png"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
   <div className="flex container justify-between items-center">    
<nav className='bg-black text- white fixed w-full z-'>
<Link to="/">

<img src={logo} alt="" />
</Link>
<ul className='hidden lg:flex items-center gap-8'>
<li>
    <Link to="/"> HOME</Link>
</li>
</ul>
</nav>
      
</div>  
  );
}

export default Header