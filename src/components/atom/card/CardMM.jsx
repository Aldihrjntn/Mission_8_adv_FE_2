import React from 'react'
import imgCMM from '../../../assets/images/beranda/card5.jpg'
import avatarCMM from '../../../assets/images/beranda/jenna5.png'
import Card from '../props/card'

export default function CardMM() {
  return (
    <>
      <Card 
        id= "kelas-005"
        nama="Big 4 Auditor Financial Analyst"
        harga={300000}
        deskripsi="Modul lengkap dan terstruktur untuk mempercepat kariermu."
        gambarKelas={imgCMM}
        avatarPengajar={avatarCMM}
        namaPengajar="Jenna Ortega"
        jabatanPengajar="Senior Accountant di Gojek"
      />  
    </>
  )
}
