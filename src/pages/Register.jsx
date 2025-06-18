import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EyeIcon from '../assets/images/mideye.png'
import GoogleLogo from '../assets/images/logos_google-icon.png'
import Ina from '../assets/images/INA.png'
import Navbar from '../components/organisems/Navbar'



export default function Register() {
  

    const [tampilkanKataSandi, setTampilkanKataSandi] = useState(false)
    const [tampilkanKataSandiKnfr, setTampilkanKataSandiKnfr] = useState(false)

    const togglePassword = () => {
      setTampilkanKataSandi(!tampilkanKataSandi)
    }

    const togglePasswordCnfr = () => {
      setTampilkanKataSandiKnfr(!tampilkanKataSandiKnfr)
    }

    const navigate = useNavigate()
    const [nama, setNama] = useState('')
    const [email, setEmail] = useState('')
    const [noHp, setNoHp] = useState('')
    const [password, setPassword] = useState('')
    const [konfirmasiPassword, setKonfirmasiPassword] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault()

      if (password !== konfirmasiPassword) {
        alert('Konfirmasi password tidak cocok!')
        return
      }

      const userData = {
        nama,
        email,
        noHp,
        password,
      }

      localStorage.setItem('userData', JSON.stringify(userData))
      alert('Akun berhasil didaftarkan!')

      navigate('/login')
    }

    
  return (
    <>
    <Navbar />
     <div className="min-h-screen flex items-center justify-center">
      <main className="bg-white w-full max-w-[590px] p-9 rounded-[10px] shadow-md mt-28 mb-10">
        <header className="mb-6 text-center">
          <h1 className="text-[32px] text-[#222325] mb-2 font-normal">Pendaftaran Akun</h1>
          <h2 className="text-[16px] text-[#333333AD] font-normal tracking-wide">Yuk, daftarkan akunmu sekarang juga!</h2>
        </header>
        
        <form className="space-y-4" onSubmit={handleSubmit}>

          <div>
            <label htmlFor="Nama-Lengkap" className="block text-[16px] font-normal">Nama Lengkap <span className="text-red-500">*</span></label>
            <input 
            type="text" 
            id="Nama-Lengkap"
            name="Nama-Lengkap" 
            required 
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded text-[16px]" />
          </div>
          
          <div>
            <label htmlFor="E-mail" 
            className="block text-[16px] font-normal">
              E-mail <span className="text-red-500">*</span></label>
            <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded text-[16px]" />
          </div>
          
          <div>
            <label htmlFor="NoHP" 
            className="block text-[16px] font-normal mb-1">
              No. HP <span className="text-red-500">*</span></label>
            <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-2 bg-white shadow-sm">
              <img src= {Ina} alt="ID" className="w-5 h-auto rounded-sm" />
              <select name="countryCode" id="countryCode" className="border-none bg-transparent outline-none">
                <option value="62">+62</option>
              </select>
              <input 
              type="tel" 
              id="NoHP" 
              name="NoHP" 
              required 
              value={noHp}
              onChange={(e) => setNoHp(e.target.value)}
              className="flex-1 border-none outline-none text-[16px]" />
            </div>
          </div>
          
          <div>
            <label htmlFor="password" className="block text-[16px] font-normal">
              Kata Sandi <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input 
              type= {tampilkanKataSandi ? "text" : "password"}   
              id="password" 
              name="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-[16px]" />
              <img id="eyeIcon" 
              onClick= {togglePassword}  
              src= {EyeIcon} 
              alt="tampilkan kata sandi" 
              className="absolute right-7 top-1/2 transform -translate-y-1/2 cursor-pointer w-5" />
            </div>
          </div>
          
          <div>
            <label htmlFor="konfirmasiPassword" className="block text-[16px] font-normal">
              Konfirmasi Kata Sandi <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input 
              type={tampilkanKataSandiKnfr ? "text" : "password"}   
              id="konfirmasiPassword" 
              name="konfirmasiPassword" 
              required 
              value={konfirmasiPassword}
              onChange={(e) => setKonfirmasiPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-[16px]" />
              <img 
              id="eyeIcon" 
              onClick= {togglePasswordCnfr}   
              src= {EyeIcon} 
              alt="tampilkan kata sandi" 
              className="absolute right-7 top-1/2 transform -translate-y-1/2 cursor-pointer w-5" />
            </div>
          </div>
          
          <div className="space-y-3">
            <button type="submit" className="w-full h-[42px] bg-[#3ecf4c] text-white rounded-[10px]">Daftar</button>
            <button type="button" onClick={() => navigate('/login')} className="w-full h-[42px] bg-[#E2FCD9CC] text-[#3ecf4c] rounded-[10px]">Masuk</button>

            <div className="w-full border-t border-gray-300 text-center relative my-2">
              <span className="bg-white px-2 text-[#4A505C] text-[16px] font-normal absolute left-1/2 transform -translate-x-1/2 -top-3">atau</span>
            </div>
            
            <button type="button" className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded">
              <img src={GoogleLogo} alt="Google Logo" className="w-5 h-5" />
              <span className="text-[16px]">Masuk dengan Google</span>
            </button>
          </div>
        </form>
      </main>
    </div>
    </>
  )
}
