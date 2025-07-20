
import { useEffect } from 'react'
import Card from '../../molecules/Card'
import useProductStore from '../../../store/ProductStore'
import apiClient from '../../../api/axiosconfig'


export default function ContentCard() {

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

 
  return (
    <>
    {produk.length > 0 ? (
        produk.map((content) => (
            <Card 
                key={content.id}
                id={content.id}
                nama={content.title}
                harga={content.price}
                deskripsi={content.description}
                gambarKelas={content.photos}
                avatarPengajar={content.avatar}
                namaPengajar={content.mentor}
                jabatanPengajar={content.rolementor}
            />
            ))
    ) : (
        <p>Produk tidak tersedia</p>
    )}
    </>
  )
}
