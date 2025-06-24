import React from 'react'
import imgCBM from '../../../assets/images/beranda/card8.jpg'
import avatarCBM from '../../../assets/images/beranda/jenna8.png'
import Card from '../props/Card'

export default function CardBM() {
  return (
    <>
    <Card
      id= "kelas-008"
      nama="Big 4 Auditor Financial Analyst"
      harga={300000}
      deskripsi="Pelajari laporan keuangan dan teknik audit dari praktisi."
      gambarKelas={imgCBM}
      avatarPengajar={avatarCBM}
      namaPengajar="Jenna Ortega"
      jabatanPengajar="Senior Accountant di Gojek"
    />
    </>
  )
}
