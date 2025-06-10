import React from 'react'

export default function InsNavbar() {
  return (
    <>
        {/* <!-- Kelas Unggulan --> */}
        <section className="px-6 md:px-20">
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">
                    Koleksi Video Pembelajaran Unggulan</h2>
                <p className="text-base mb-6">
                    Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
                <div className="flex flex-wrap gap-4 mb-10">
                    <button className="border-b-4 border-orange-500 text-orange-500 pb-1 font-medium">Semua Kelas</button>
                    <button className="pb-1">Pemasaran</button>
                    <button className="pb-1">Desain</button>
                    <button className="pb-1">Pengembangan Diri</button>
                    <button className="pb-1">Bisnis</button>
                </div>
            </div>
        </section>
    </>
  )
}
