import WorldUniversity from '../assets/worlduniversity-logo.png'

import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Header() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path) => location.pathname === path ? "text-green-400 underline underline-offset-8" : "";

    return(
        <nav className="sticky top-0 flex justify-between py-2 px-7 bg-sky-800 shadow-2xl border-t-[3px] border-b-[3px] border-black z-20">
            <img src={WorldUniversity} alt="WorldUniversity Logo" className="w-auto h-[50px] py-2 cursor-pointer md:ml-5 md:h-[70px] lg:h-[90px] xl:h-[80px]"/>
            <ul className="hidden md:flex justify-end items-center">
                <Link to='/' className={`px-4 cursor-pointer text-white underline-animation ${isActive('/')}`}>Home</Link>
                <Link to='/search' className={`px-4 cursor-pointer text-white underline-animation ${isActive('/search')}`}>Search</Link>
                <Link to='/about' className={`px-4 cursor-pointer text-white underline-animation ${isActive('/about')}`}>About</Link>
            </ul>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50 text-white">
                { isOpen ? <X size={35}/> : <Menu size={35}/>}
            </button>

            <div className={`absolute top-0 left-0 w-full bg-sky-900 text-white p-8 transition-all duration-300 ease-in-out ${
                    isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
                } md:hidden z-40 mb-8`}>
                <ul className="flex flex-col items-center gap-4 text-sm mt-14">
                    <Link to='/' className={`px-4 cursor-pointer text-white underline-animation ${isActive('/')}`} onClick={() => setIsOpen(!isOpen)}>Home</Link>
                    <Link to='/search' className={`px-4 cursor-pointer text-white underline-animation ${isActive('/search')}`} onClick={() => setIsOpen(!isOpen)}>Search</Link>
                    <Link to='/about' className={`px-4 cursor-pointer text-white underline-animation ${isActive('/about')}`} onClick={() => setIsOpen(!isOpen)}>About</Link>
                </ul>
            </div>
        </nav>
    )
}

export default Header