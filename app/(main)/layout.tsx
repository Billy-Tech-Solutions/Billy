import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
