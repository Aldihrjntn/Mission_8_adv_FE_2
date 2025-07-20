import React from 'react'
import HomeLayout from '../layouts/HomeLayout'
import { useState, useEffect } from 'react'
import useProductStore from '../store/ProductStore'
import apiClient from '../api/axiosconfig'
import { tambahProduk, editProduk, hapusProduk } from '../services/ProductCrud'



//saya menggunakan axios untuk CRUD data produk dari API


export default function Admin() {

  const [form, setForm] = useState({ title: "", subtitle: "", mentor: "", price: "" });
  const [editingId, setEditingId] = useState(null); // null berarti sedang tidak edit

  //ambil Produk
 const { produk, setProduk } = useProductStore()
    useEffect(() => {
        const fetchProduk = async () => {
            try {
                const response = await apiClient.get('/product')
                setProduk(response.data)
                console.log("Data:", response.data)
            }
            catch (error) {
                console.error("Gagal mengambil data:", error)
            }
        }
        fetchProduk()
    }, [setProduk])


  // Tambah Produk
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        // Update produk
        await editProduk(editingId, form);
      } else {
        // Tambah produk baru
        await tambahProduk(form);
      }
      setProduk() // Refresh data produk
      setForm({ 
        title: "", 
        subtitle: "", 
        mentor: "", 
        price: "" })
      setEditingId(null) // Reset editingId setelah submit
    } catch (error) {
      console.error("Gagal menyimpan data:", error)
    }
  }



  // Hapus Produk
  const handleDelete = async (id) => {
    const confirmDelete = confirm("Yakin ingin menghapus produk ini?")
    if (!confirmDelete) return

    try {
      await hapusProduk(id);
      setProduk() // Refresh data produk setelah hapus
    } catch (error) {
      console.error("Gagal menghapus data:", error)
    }
  }

  // Edit Produk
  const handleEdit = (item) => {
    setForm({ 
      title: item.title, 
      subtitle: item.subtitle, 
      mentor: item.mentor, 
      price: item.price })
    setEditingId(item.id) // Set id produk yang sedang diedit
  }

  

  return (
    <>
    <HomeLayout>
      |<div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md mb-10">
        <div className="w-full bg-white p-4 mb-10">
          <h2 className="text-xl font-bold pb-5">Admin Produk</h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nama Produk</label>
              <input 
              type="text" 
              name="title" 
              value={form.title} 
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="h-12 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Deskripsi Singkat</label>
              <textarea 
              name="subtitle" 
              value={form.subtitle} 
              onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
              className="h-12 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mentor</label>
              <input 
              type="text" 
              name="mentor" 
              value={form.mentor} 
              onChange={(e) => setForm({ ...form, mentor: e.target.value })}
              className="h-12 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Harga</label>
              <input 
              type="number" 
              name="price" 
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className="h-12 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Tambah Produk</button>
          </form>

           {/* Produk  */}
          <main className="bg-white w-full p-4 rounded-[10px] shadow-md">
            <ul className="space-y-4">
              {produk.map((item) => (
                <li key={item.id} className="p-4 border rounded">
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="text-gray-500 font-light">{item.subtitle}</p>
                  <span className="text-gray-400 text-sm">Mentor: {item.mentor}</span>
                  <p className="text-green-600 font-bold text-lg">Rp{item.price}</p>
                  <div className="mt-4 flex space-x-2">
                    <button onClick={() => handleEdit(item)} className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">Edit</button>
                    <button onClick={() => handleDelete(item.id)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Hapus</button>
                  </div>
                </li>
              ))}
              
            </ul>
          </main>          
        </div>
      </div>

    </HomeLayout>
    </>
  )
}
