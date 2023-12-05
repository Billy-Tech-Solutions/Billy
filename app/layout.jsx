import { Roboto } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500'] })

export const metadata = {
    title: 'Billy',
    description: 'Your upcoming adspace aggregator!',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="billy_scrollbar">
            <body className={roboto.className}>
                <Nav />
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
