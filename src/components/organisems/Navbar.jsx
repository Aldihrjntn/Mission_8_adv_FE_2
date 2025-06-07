import React from 'react'
import Logo from '../../assets/images/Logo.png'
import Avatar from '../../assets/images/beranda/Avatar.png'

export default function navbar() {
  return (
    <>
        <header class="top-0 left-0 w-full bg-white text-black flex justify-between p-2 z-50 mb-8">
          <div>
            <img src={Logo} alt="Videobelajar" />
          </div>
          <nav class="hidden md:flex items-center gap-4">
            <span class="mr-5">Kategori</span>
            <img src={Avatar} alt="User" class="w-[44px] h-[44px] mr-5 rounded-[10px]" />
          </nav>
          <div class="text-2xl cursor-pointer block md:hidden">&#9776;</div>
        </header>
    </>
  )
}
