import React, { useEffect, useState } from 'react'
import Navbar from '../components/organisems/Navbar'
import Footer from '../components/organisems/Footer'

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

const handleHapusSemua = () => {
  localStorage.removeItem('cart');
  setCart([]);
};


    const handleTambah = (id) => {
    const updated = cart.map(item => {
      if (item.id === id) {
        return { ...item, jumlah: item.jumlah + 1 };
      }
      return item;
    });
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const handleKurang = (id) => {
    let updated = cart.map(item => {
      if (item.id === id) {
        return { ...item, jumlah: item.jumlah - 1 };
      }
      return item;
    });

    updated = updated.filter(item => item.jumlah > 0); // hapus jika 0
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen flex items-center justify-center">
      <main className="bg-white w-full max-w-[590px] p-9 rounded-[10px] shadow-md mt-28 mb-10">
        <header className="mb-6 text-center">
          <h1 className="text-[32px] text-[#222325] mb-2 font-normal">Keranjang Belanja</h1>
          {cart.length === 0 ? (
            <p className="text-[16px] text-[#333333AD]">Belum ada item di keranjang Anda.</p>
          ) : (
            <p className="text-[16px] text-[#333333AD]">Berikut daftar item Anda:</p>
          )}
        </header>

        {cart.length > 0 && (
          <div>
            <div className="flex justify-end items-center">
            <button
              onClick={handleHapusSemua}
              className="mb-4 px-4 py-2 bg-red-500 text-xs text-white rounded hover:bg-red-600 transition"
              disabled={cart.length === 0}
            >Hapus Semua</button>
            </div>

            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between mb-4 bg-amber-50 border p-2 rounded">
                <div>
                  <h4 className="font-semibold">{item.nama}</h4>
                  <p className="text-sm text-gray-500">Rp {item.harga.toLocaleString()}</p>
                </div>

                <div className="flex items-center">
                  <button
                    onClick={() => handleKurang(item.id)}
                    className="px-2 py-1 bg-red-400 text-white rounded disabled:opacity-50"
                    disabled={item.jumlah <= 0}
                  >–</button>

                  <span className="mx-3">{item.jumlah}</span>

                  <button
                    onClick={() => handleTambah(item.id)}
                    className="px-2 py-1 bg-green-500 text-white rounded"
                  >+</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      </div>
    <Footer />
    </>
  )
}


