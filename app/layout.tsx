import { Roboto } from 'next/font/google'
import '@quillforms/renderer-core/build-style/style.css'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/layout/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '@/components/layout/Navbar'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500'] })

export const metadata = {
  title: 'Billy',
  description: 'Your upcoming adspace aggregator!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="billy_scrollbar">
      <head>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/ddgv1onc1/image/upload/v1701769992/ihvmoevzpoaowcxr6ztp.png"
        />
      </head>
      <body className={roboto.className}>
        {/* <Nav /> */}
        {children}
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  )
}
