import apiClient from '../api/axiosconfig'


 //--- Ambil Produk ---
export const ambilProduk = async () => {
  const response = await apiClient.get('/product')
  return response.data
}

// --- Tambah Produk ---
export const tambahProduk = async (form) => {
  const response = await apiClient.post('/product', form)
  return response.data
}

// --- Update Produk ---
export const editProduk = async (id, form) => {
  const response = await apiClient.put(`/product/${id}`, form)
  return response.data
}

// --- Hapus Produk ---
export const hapusProduk = async (id) => {
  const response = await apiClient.delete(`/product/${id}`)
  return response.data
}