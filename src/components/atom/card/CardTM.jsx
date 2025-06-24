import React from 'react'
import imgCTM from '../../../assets/images/beranda/card2.jpg'
import avatarCTM from '../../../assets/images/beranda/jenna2.png'
import Card from '../props/Card'

export default function CardTM() {
   
  return (
    <div>
      <Card 
        id= "Kelas-002"
        nama="Big 4 Auditor Financial Analyst"
        harga={300000}
        deskripsi="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik."
        gambarKelas={imgCTM}
        avatarPengajar={avatarCTM}
        namaPengajar="Jenna Ortega"
        jabatanPengajar="Senior Accountant di Gojek"
        />
    </div>   
  )
}
