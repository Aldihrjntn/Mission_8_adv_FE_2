import React from 'react'
import Logo from '../../assets/images/Logo.png'
import Avatar from '../../assets/images/beranda/Avatar.png'

export default function navbar() {
  return (
    <>
        <header className="m-0 w-full bg-white text-black flex justify-between px-2 py-0 z-50">
          <div>
            <img src={Logo} alt="Videobelajar" />
          </div>
          <nav className="hidden md:flex items-center gap-1">
            <span className="mr-5">Kategori</span>
            <img src={Avatar} alt="User" className="w-[44px] h-auto mr-5 rounded-[10px]" />
          </nav>
          <div className="text-2xl cursor-pointer block md:hidden">&#9776;</div>
        </header>
    </>
  )
}
