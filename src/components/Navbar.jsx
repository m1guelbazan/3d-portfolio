import React from 'react';
import {Link} from 'react-router-dom';


 const Navbar=()=>{
    return (    
                <div className='navBar'>
                    <div className='LandingPage'>
                        <Link to="/">Home</Link>
                    </div>
                    <div className='about'>
                        <Link to="/About">About</Link>
                    </div>
                    <div className='Projects'>
                        <Link to="/Projects">Projects</Link>
                    </div>
                    <div className='Contact'>
                        <Link to="/Contact">Contact</Link>
                    </div>
                </div>
    )

}

export default Navbar;
