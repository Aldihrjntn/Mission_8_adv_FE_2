import React from 'react'
import imgCBL from '../../../assets/images/beranda/card7.jpg'
import avatarCBL from '../../../assets/images/beranda/jenna7.png'
import Card from '../props/Card'

export default function CardBL() {
  return (
    <>
      <Card
        id= "kelas-007"
        nama="Big 4 Auditor Financial Analyst"
        harga={300000}
        deskripsi="Strategi sukses untuk menjadi auditor bersertifikat."
        gambarKelas={imgCBL}
        avatarPengajar={avatarCBL}
        namaPengajar="Jenna Ortega"
        jabatanPengajar="Senior Accountant di Gojek"
      />
    </>
  )
}
