import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FooterSection({ title, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full md:w-auto">
      <h4
        className="font-bold flex items-center justify-between md:block cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {title}
        <span className="md:hidden text-lg ml-2">{open ? '˅' : '>'}</span>
      </h4>

      <ul className={`space-y-1 ${open ? 'block' : 'hidden'} md:block`}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const navigate = useNavigate()

  return (
    <footer className="bg-white px-6 md:px-20 py-10 flex flex-wrap gap-10 justify-between text-sm">
      <div className="w-full md:w-1/4">
        <h4 className="text-lg font-bold">videobelajar</h4>
        <p className="mb-1">Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
        <p className="mb-1">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
        <p>+62-877-7123-1234</p>
      </div>

      <FooterSection
        title="Kategori"
        items={[
          'Digital & Teknologi',
          'Pemasaran',
          'Manajemen Bisnis',
          'Pengembangan Diri',
          'Desain',
        ]}
      />

      <FooterSection
        title="Perusahaan"
        items={[
          'Tentang Kami',
          'FAQ',
          'Kebijakan Privasi',
          'Ketentuan Layanan',
          'Bantuan',
        ]}
      />

      <FooterSection 
        title="Komunitas" 
        items={[
          'Tips Sukses', 
          'Blog'
        ]} 
      />

      <p onClick={() => navigate('/admin')} className='font-bold flex items-center justify-between md:block cursor-pointer'>Admin</p>

    </footer>
  );
}
