import logo from '../assets/logo.png';
import { useState } from 'react';
import { Menu, X } from "lucide-react";


function Navbar() {
   const [isOpen, setIsOpen] = useState(false)

   const taphandler = ()=> setIsOpen(false)

    return (
       <>

       <nav className="navbar">
         <div className="nav-container">
            <div className="nav-logo">
               <img src={logo} alt="Logo" />
            </div>

            <ul className={`nav-links ${isOpen ? "open" : "" }`}>
                 <li><a href="#Home" onClick={taphandler}>Home</a></li>
                 <li><a href="#About" onClick={taphandler}>About Us</a></li>
                 <li><a href="#Menu" onClick={taphandler}>Menu</a></li>
                 <li><a href="#Training" onClick={taphandler}>Training</a></li>
                 <li><a href="#Contact" onClick={taphandler}>Contact Us</a></li>
            </ul>
            <button onClick={()=>setIsOpen(!isOpen)} className='menu-icon'>
            {isOpen? <X/>:<Menu size={24} /> }
            </button>


            <button className="navbutton" 
            onClick={() => window.open('https://api.whatsapp.com/send?phone=233240091201&text=I%20am%20coming%20from%20your%20website%20and%20I%20will%20like%20to%20order%20for%20a%20cake', '_blank')}>
               Order Now</button>
            </div>
       </nav>
      
       
       </>
    )
        
    }

export default Navbar;