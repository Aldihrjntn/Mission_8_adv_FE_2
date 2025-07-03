import React from 'react'
import { useState, useEffect } from 'react'

export default function Card
({id, nama, harga, deskripsi, gambarKelas, avatarPengajar, namaPengajar, jabatanPengajar}) 
{
    const produk = {
      id,
      nama,
      harga,
      jumlah: 1,
    }
  const [jumlah, setJumlah] = useState(0)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const produk = cart.find(item => item.id === id);
    if (produk) setJumlah(produk.jumlah);
  }, [id]);
    

    const tambahKeranjang = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const index = cart.findIndex(item => item.id === id);
    if (index !== -1) {
      cart[index].jumlah += 1
      setJumlah(cart[index].jumlah)
    }
    else {
      cart.push(produk)
      setJumlah(1)
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    console.log(cart[index].jumlah)
  }

    const kurangKeranjang = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const index = cart.findIndex(item => item.id === id);
    if (index !== -1) {
      cart[index].jumlah -= 1
      if (cart[index].jumlah < 0) {
      cart.splice(index, 1)
      
    }
    else {
      setJumlah(cart[index].jumlah)
      }      
      localStorage.setItem('cart', JSON.stringify(cart))
    }    
    console.log(cart[index].jumlah)
    
  }
  
 

  return (
  <>
  <article className="cursor-pointer bg-white p-5 rounded-lg shadow hover:-translate-y-1 transition-transform">
          <img 
            src={gambarKelas} 
            alt="Course" 
            className="w-full h-48 object-cover rounded" />
          <h3 className="font-semibold text-lg my-3">
            {nama}</h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2 overflow-hidden text-ellipsis tracking-widest">
            {deskripsi}</p>
          <div className="flex justify-between items-center mt-auto">
            <div className="flex items-center gap-2">
              <img 
              src={avatarPengajar} 
              alt="Jenna Ortega" 
              className="w-8 h-8 rounded-full" />
              <span className="text-sm">
                {namaPengajar}<br/>
                <small className="text-xs text-gray-500">
                  {jabatanPengajar}</small></span>
            </div>
            <div className="text-sm text-right">
              <span>⭐ 3.5 (86)</span><br/>
              <strong className="text-lg">Rp {harga / 1000}K</strong> <br/>
              <div>
                <button 
                  onClick={tambahKeranjang}
                  className="text-black rounded hover:bg-blue-600 transition-colors"> 
                  + </button>
                <input 
                  type="text"
                  className="w-12 text-center border border-gray-300 rounded mx-2"
                  value={jumlah}
                  readOnly />
                <button 
                  onClick={kurangKeranjang}
                  disabled={jumlah <= 0}
                  className="text-black rounded hover:bg-blue-600 transition-colors">
                  -</button>
              </div>
            </div>
          </div>
        </article>
  </>
  )
}
