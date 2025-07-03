import React from 'react'
import LtrImage from '../../assets/images/beranda/img_bg_newsletter.jpg'

export default function NewsLetter() {
  return (
    <>
  <section className="relative text-white text-center rounded-lg px-8 py-20 mx-6 md:mx-20 mt-16 mb-16"
    style={{background: `url(${LtrImage}) center/cover no-repeat`}}>
    <div className="absolute inset-0 bg-black rounded-lg z-0" style={{opacity: 0.75}}></div>
    <div className="relative z-10">
      <p className="uppercase text-yellow-400 font-semibold">Newsletter</p>
      <h3 className="text-2xl font-bold my-3">Mau Belajar Lebih Banyak?</h3>
      <p className="mb-6 text-base max-w-2xl mx-auto">Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id</p>
      <form className="relative max-w-xl mx-auto">
        <input type="email" placeholder="Masukkan Emailmu" className="w-full focus:outline-none focus:ring-0 px-4 py-3 rounded-xl bg-white text-black pr-32" />
        <button type="submit" className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-white px-5 py-2 rounded-lg font-semibold">Subscribe</button>
      </form>
    </div>
  </section>
    </>
  )
}
