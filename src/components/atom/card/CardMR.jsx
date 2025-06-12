import React from 'react'
import imgCMR from '../../../assets/images/beranda/card5.jpg'
import avatarCMR from '../../../assets/images/beranda/jenna5.png'

export default function CardMR() {
  return (
    <>
      <article className="bg-white p-5 rounded-lg shadow hover:-translate-y-1 transition-transform">
        <img src={imgCMR} alt="Course 1" className="w-full h-48 object-cover rounded" />
        <h3 className="font-semibold text-lg my-3">Big 4 Auditor Financial Analyst</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2 overflow-hidden text-ellipsis">Pelajari teknik dan alat bantu untuk audit secara efisien.</p>
        <div className="flex justify-between items-center mt-auto">
          <div className="flex items-center gap-2">
            <img src={avatarCMR} alt="Jenna Ortega" className="w-8 h-8 rounded-full" />
            <span className="text-sm">Jenna Ortega<br/><small className="text-xs text-gray-500">Senior Accountant di Gojek</small></span>
          </div>
          <div className="text-sm text-right">
            <span>⭐ 3.5 (86)</span><br/>
            <strong className="text-lg">Rp 300K</strong>
          </div>
        </div>
      </article>  
    </>
  )
}
