import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Creatend',
  description: 'Blog by HyukJoo Kwon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header></header>
      <nav><NavBar/></nav>
      <section>
        {children}
      </section>
      <footer>
        <Footer/>
      </footer>
      </body>
      <Analytics/>
    </html>
  )
}
