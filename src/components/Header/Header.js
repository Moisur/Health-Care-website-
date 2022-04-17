import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faXmark, faBars} from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    const [menu,setMenu]=useState(false)
    const Location =useLocation()
    return (
        <nav style={Location?.pathname?.includes('/about')?{display:'none'}:{display:'block'}} className="bg-emerald-300  text-white sticky top-0 z-10" >
            <div className="max-w-7xl mx-auto px-2  sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button onClick={()=>setMenu(!menu)} className="inline-flex text-2xl text-white items-center justify-center p-2 rounded-md ">{
                            menu?<FontAwesomeIcon icon={faXmark} />:<FontAwesomeIcon icon={faBars} />
                        }</button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex  items-center md:mr-20">
                            <img className=" h-8 w-auto" src={require('../img/Logo.png')}  alt="Workflow" />
                            <span className='px-2 text-xl md:text-2xl font-mono'>Health Care </span>
                        </div>
                        <div className="hidden sm:block sm:ml-6 ">
                            <div className="flex space-x-4 ">
                                <Link to="/home" className=" px-3 py-2  text-sm font-medium" >Home</Link>
                                <Link to='/about' className=" px-3 py-2  text-sm font-medium">About</Link>
                                <Link to="/services" className=" px-3 py-2  text-sm font-medium">Services</Link>
                                <Link to="/blogs" className=" px-3 py-2  text-sm font-medium">Blogs</Link>
                            </div>
                        </div>
                    </div>
                   
                </div>
              
                {
                    menu ?
                        <div className="sm:hidden" id="mobile-menu">
                            <div class="px-2 pt-2 pb-3 space-y-1">
                                <Link to="/home" className=" py-2 px-3  text-base font-medium" >Home</Link>
                                <Link to="/about" className=" block px-3 py-2  text-base font-medium">About</Link>
                                <Link to="/services" className=" block px-3 py-2  text-base font-medium">Services</Link>
                                <Link to="/blogs" className=" block px-3 py-2  text-base font-medium">Blogs</Link>
                            </div>
                        </div>
                        : ''
                }
                
            </div>
            

        </nav>

    );
};

export default Header;