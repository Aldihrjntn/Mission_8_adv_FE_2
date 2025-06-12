import React from 'react'

export default function CardLayout({children}) {
  return (
    <>
    <section className="px-6 md:px-20 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {children}
        </div>
    </section>
    </>
  )
}
