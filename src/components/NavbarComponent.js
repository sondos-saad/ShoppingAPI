import React from 'react'
import { Link } from 'react-router-dom'

function NavbarComponent() {
  return (
    <>
        <nav className="bg-[#669bbc] text-white">
            <div className="flex justify-between items-center w-[80%] mx-auto py-4 font-bold">
                    <Link  className="text-[2rem]" to="/"> Logo</Link>
                <div>
                    <ul className="flex gap-10 sm:gap-20 text-[1rem]">
                        <li className=" hover:text-[#d6ccc2] duration-300">
                            <Link className="" to="/" aria-current="page">Home</Link>
                        </li>
                        <li className="hover:text-[#d6ccc2] duration-300">
                            <Link className="" to="/about">about</Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavbarComponent
