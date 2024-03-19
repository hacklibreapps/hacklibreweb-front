import type { Metadata } from 'next'
import gilroy from '@/assets/fonts/fonts'
import '@/assets/css/globals.css'
import { NavBar } from '@/components/organism/navbar/navBar'

const fontGilroy = gilroy

export const metadata: Metadata = {
  title: 'Hacklibre - Mejorando tu experiencia',
  description:
    'Somos una consultora enfocada en crear e implementar soluciones tecnológicas como webs corporativas, e-commerce, desarrollo de apps móviles y plataformas de gestión.',
  authors: [{ name: 'Alem Bär', url: 'https://alem.rocks' }]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={fontGilroy.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
