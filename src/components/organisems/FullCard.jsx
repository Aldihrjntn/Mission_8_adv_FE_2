import React from 'react'
import CardLayout from '../../layouts/CardLayout'
import CardTL from '../atom/card/CardTL'
import CardTM from '../atom/card/CardTM'
import CardTR from '../atom/card/CardTR'
import CardML from '../atom/card/CardML'
import CardMM from '../atom/card/CardMM'
import CardMR from '../atom/card/CardMR'
import CardBL from '../atom/card/CardBL '
import CardBM from '../atom/card/CardBM'
import CardBR from '../atom/card/CardBR'

export default function FullCard() {
  return (
    <>
        <CardLayout>
            <CardTL />
            <CardTM />
            <CardTR />
            <CardML />
            <CardMM />
            <CardMR />
            <CardBL />
            <CardBM />
            <CardBR />
        </CardLayout>
    </>
  )
}
