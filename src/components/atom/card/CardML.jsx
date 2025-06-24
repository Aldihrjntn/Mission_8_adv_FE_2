import React from 'react'
import imgCML from '../../../assets/images/beranda/card4.jpg'
import avatarCML from '../../../assets/images/beranda/jenna4.png'
import Card from '../props/card'

export default function CardML() {
  return (
    <>
      <Card 
        id= "kelas-004"
        nama="Big 4 Auditor Financial Analyst"
        harga={300000}
        deskripsi="Studi kasus nyata dari perusahaan besar di Asia Tenggara."
        gambarKelas={imgCML}
        avatarPengajar={avatarCML}
        namaPengajar="Jenna Ortega"
        jabatanPengajar="Senior Accountant di Gojek"
      />
    </>
  )
}
