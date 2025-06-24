import React from 'react'
import imgCTR from '../../../assets/images/beranda/card3.jpg'
import avatarCTR from '../../../assets/images/beranda/jenna3.png'
import Card from '../props/Card'

export default function CardTR() {
   
  return (
    <div>
      <Card 
        id= "Kelas-003"
        nama="Big 4 Auditor Financial Analyst"
        harga={300000}
        deskripsi="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik."
        gambarKelas={imgCTR}
        avatarPengajar={avatarCTR}
        namaPengajar="Jenna Ortega"
        jabatanPengajar="Senior Accountant di Gojek"
        />
    </div>   
  )
}
