import React from 'react'
import imgCTL from '../../../assets/images/beranda/card1.jpg'
import avatarCTL from '../../../assets/images/beranda/jenna1.png'
import Card from '../../molecules/Card'

export default function CardTL() {
   
  return (
    <div>
      <Card 
        id= "Kelas-001"
        nama="Big 4 Auditor Financial Analyst"
        harga={300000}
        deskripsi="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik."
        gambarKelas={imgCTL}
        avatarPengajar={avatarCTL}
        namaPengajar="Jenna Ortega"
        jabatanPengajar="Senior Accountant di Gojek"
        />
    </div>   
  )
}
