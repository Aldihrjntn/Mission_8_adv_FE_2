import React from 'react'
import imgCBR from '../../../assets/images/beranda/card9.jpg'
import avatarCBR from '../../../assets/images/beranda/jenna3.png'
import Card from '../props/card'

export default function CardBR() {
  return (
    <>  
      <Card 
        id= "kelas-009"
        nama="Big 4 Auditor Financial Analyst"
        harga={300000}
        deskripsi="Pengetahuan lengkap audit eksternal dan internal perusahaan."
        gambarKelas={imgCBR}
        avatarPengajar={avatarCBR}
        namaPengajar="Jenna Ortega"
        jabatanPengajar="Senior Accountant di Gojek"
      />
    </>
  )
}
