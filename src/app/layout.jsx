'use client'
import './globals.css'
import { Roboto_Mono } from 'next/font/google'
import { Start } from '@/components/Start/Start'
import React, { useState } from 'react'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'

const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  const [starting, setStarting] = useState(true)

  return (
    <html lang="en">
      <head>
      <title>MNP Portfolio</title>
      </head>
      <body className={robotoMono.className}>
        {starting &&
          <Start setStarting={setStarting} />
        }
        {!starting &&
          <>
            <Header />
            {children}
            <Footer />
          </>
        }
      </body>
    </html>
  )
}