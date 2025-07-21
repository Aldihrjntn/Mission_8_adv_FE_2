import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'
import Avatar from '../../assets/images/beranda/Avatar.png'
import Cart from '../../assets/images/cart.png'


export default function Navbar() {
  
  const navigate = useNavigate()

  const handleDropdown = () => {
    const dropdown = document.querySelector('.dropdown-content')
    dropdown.classList.toggle('hidden')
    dropdown.classList.toggle('block')
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('isloggedIn')
    localStorage.removeItem('userData')
    navigate('/login')
  }


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
              <img onClick={handleDropdown} src={Avatar} alt="User" className="w-[44px] h-auto mr-5 rounded-[10px]" />
            <div className="dropdown-content hidden absolute bg-white shadow-lg rounded-lg right-5 p-4 mt-35 z-50">
              <p onClick={() => navigate('/admin')} className='font-bold flex items-center justify-between md:block cursor-pointer'>Admin</p>
              <button onClick={handleLogout} className="text-red-500">Logout</button>
            </div>
          </nav>
          <div className="text-2xl cursor-pointer block md:hidden">&#9776;</div>
        </header>
    </>
  )
}
