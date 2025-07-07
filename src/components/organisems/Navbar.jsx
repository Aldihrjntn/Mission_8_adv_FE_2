import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'
import Avatar from '../../assets/images/beranda/Avatar.png'
import Cart from '../../assets/images/cart.png'


export default function Navbar() {
  
  const navigate = useNavigate()


  return (
    <>
        <header className="m-0 w-full bg-white text-black flex justify-between px-2 py-0 z-50">
          <div>
            <img src={Logo} alt="Videobelajar" 
            onClick={() => navigate('/')}/>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            <img src={Cart} alt="Keranjang" className="w-[24px] h-auto mr-5"
            onClick={() => navigate('/cart')} />
            <span className="mr-5">Kategori</span>
            <img src={Avatar} alt="User" className="w-[44px] h-auto mr-5 rounded-[10px]" />
          </nav>
          <div className="text-2xl cursor-pointer block md:hidden">&#9776;</div>
        </header>
    </>
  )
}
