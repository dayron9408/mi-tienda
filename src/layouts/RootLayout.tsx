import { Outlet } from '@tanstack/react-router'
import Navbar from './Navbar'
import Footer from './Footer'
import { Toaster } from 'react-hot-toast'
import CartDrawer from './CartDrawer '

const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-base-200 text-base-content">
            <Navbar />
            <CartDrawer />
            <main className="flex-grow px-4 py-6">
                <Outlet />
            </main>
            <Footer />
            <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
        </div>
    )
}

export default RootLayout
