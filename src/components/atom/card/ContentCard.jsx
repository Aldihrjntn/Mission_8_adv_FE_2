import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../../molecules/Card'
import axios from 'axios';

export default function ContentCard() {
    const [produk, setProduk]  = useState([])
    const apiUrl = import.meta.env.VITE_API_URL;

    // useEffect(() => { 
    //     fetch(`${apiUrl}/product`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setProduk(data)
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         })
    // }, [apiUrl])

    useEffect(() => {
        axios.get(`${apiUrl}/product`)
            .then((response) => {
                setProduk(response.data)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            })}, [apiUrl])

 
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
