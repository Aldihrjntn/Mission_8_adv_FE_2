import { create } from "zustand"
import apiClient from "../api/axiosconfig"

const useProductStore = create((set) => ({
    produk: [],
    setProduk: async () => {
        const response = await apiClient.get('/product')
        set({ produk: response.data })
    },
}))

export default useProductStore;