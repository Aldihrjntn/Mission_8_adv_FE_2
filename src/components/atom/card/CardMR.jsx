import React from 'react'
import imgCMR from '../../../assets/images/beranda/card6.jpg'
import avatarCMR from '../../../assets/images/beranda/jenna6.png'
import Card from '../props/Card'

export default function CardMR() {
  return (
    <>
      <Card 
        id= "kelas-006"
        nama="Big 4 Auditor Financial Analyst"
        harga={300000}
        deskripsi="Pelajari teknik dan alat bantu untuk audit secara efisien."
        gambarKelas={imgCMR}
        avatarPengajar={avatarCMR}
        namaPengajar="Jenna Ortega"
        jabatanPengajar="Senior Accountant di Gojek"
      />  
    </>
  )
}
