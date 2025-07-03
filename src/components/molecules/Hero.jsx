import React from 'react'
import bgImage from '../../assets/images/beranda/img_bg_header.jpg'

export default function Hero() {
  return (
    <>
                    {/* <!-- Banner --> */}
        <section className="relative text-white text-center rounded-lg px-8 py-20 mx-20 my-10" 
            style={{background: `url(${bgImage}) center/cover no-repeat`}}>
                <div className="absolute inset-0 bg-black rounded-lg z-0 w-full" style={{opacity: 0.75}}></div>
                <div className="relative z-10 mb-10">
                    <h1 className="text-[2rem] md:text-[3.5vw] font-bold mb-4">
                        Revolusi Pembelajaran: Temukan <br />
                        Ilmu Baru melalui Platform Video <br />
                        Interaktif!</h1>
                    <p className="text-[1rem] md:text-[1.1vw] mb-6">
                        Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak <br />
                        hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.</p>
                    <button  className="inline-block cursor-pointer bg-[#3ECF4C] text-white font-bold px-6 py-3 rounded hover:bg-[#36b742] text-[1rem] md:text-[1.1vw]">
                        Temukan Video Course untuk Dipelajari!</button>
                </div>
        </section>
    </>
)
}
