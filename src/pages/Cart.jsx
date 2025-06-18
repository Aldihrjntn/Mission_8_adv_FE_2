import React from 'react'
import Navbar from '../components/organisems/Navbar'
import Footer from '../components/organisems/Footer'

export default function Cart() {
  return (
    <>
    <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <main className="bg-white w-full max-w-[590px] p-9 rounded-[10px] shadow-md mt-28 mb-10">
          <header className="mb-6 text-center">
            <h1 className="text-[32px] text-[#222325] mb-2 font-normal">Keranjang Belanja</h1>
            <p className="text-[16px] text-[#333333AD]">Belum ada item di keranjang Anda.</p>
          </header>
        </main>
      </div>
    <Footer />
    </>
  )
}
