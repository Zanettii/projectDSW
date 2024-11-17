'use client';
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";
import { IoLibrary } from "react-icons/io5";
import { FaBookOpen, FaTrophy } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { usePathname } from 'next/navigation';


const navElements = [
  {
    title: 'Biblioteca',
    href: '/biblioteca',
    icon: <IoLibrary className="w-6 h-6 mr-2" />,

  },
  {
    title: 'Leitura',
    href: '/leitura-atual',
    icon: <FaBookOpen className="w-6 h-6 mr-2" />,

  },
  {
    title: 'Ranking',
    href: '/ranking',
    icon: <FaTrophy className="w-6 h-6 mr-2" />,

  }

]

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true)
    const pathname = usePathname();
    return(
        <div className={` bg-[var(--primary)] text-gray-100 flex flex-col ${isCollapsed ? "w-16" : "w-40" } transition-all duration-300 position: static  h-100vh ` }>
          <div className="flex items-center justify-between g-gray-800  border-white p-4 ">
  
            <button onClick={() => setIsCollapsed(!isCollapsed)} 
            className="text-white-400 focus:outline-none">
              {isCollapsed ? <AiOutlineMenu size={24} /> : <AiOutlineClose size={24} />}
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-between overflow-hidden " >
              <nav className="mt-12">
                {
                  navElements.map((navElement) => {
                    const isActive = pathname === navElement.href;
                    return(
                    
                    <Link href={navElement.href} key={navElement.title}>

                      <div className={`flex items-center py-2.5 pl-4 pr-0  transition duration-300 hover:bg-[var(--accent)]
                       hover:text-text-400 ${isCollapsed ? "justify-center": ''} ${isActive ? 'border-solid text-white border-[var(--text-title)] border-r-4' : ''} `}>

                        {navElement.icon}

                        <span className={`ml-2 transition-opacity duration-300 delay-200 ${isCollapsed ? 'opacity-0': 'opacity-100'}`}>
                          {!isCollapsed && navElement.title}
                        </span>
                      </div>
                    </Link>
                    
                  )}
                )

                }
              </nav>
             
          </div>
        </div>
    )
}
export default Sidebar 