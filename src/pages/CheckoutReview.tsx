import { useCart } from '../context/CartContext'
import { toast } from 'react-hot-toast'
import { Link, useNavigate } from '@tanstack/react-router'

const CheckoutReview = () => {
    const { cart, clearCart } = useCart()
    const navigate = useNavigate()

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    const handlePay = () => {
        toast.success('¡Compra realizada con éxito! 🎉')
        clearCart()
        navigate({ to: '/thanks' })
    }

    if (cart.length === 0) {
        return (
            <div className="text-center py-10">
                <h1 className="text-2xl font-bold text-success mb-4">No hay productos para pagar</h1>
                <Link to="/" className="btn btn-primary">Volver al catálogo</Link>
            </div>
        )
    }

    return (
        <section className="max-w-3xl mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold text-center mb-6">Resumen de tu compra</h1>
            <div className="space-y-4">
                {cart.map(item => (
                    <div key={item.id} className="card bg-base-100 shadow-md">
                        <div className="card-body flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />
                                <div>
                                    <h2 className="text-sm font-bold">{item.title}</h2>
                                    <p className="text-sm">Cantidad: {item.quantity}</p>
                                    <p className="text-sm font-bold text-primary">
                                        Total: ${(item.price * item.quantity).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 text-center">
                <p className="text-lg font-bold">Total a pagar: ${total.toFixed(2)}</p>
                <button className="btn btn-success mt-4" onClick={handlePay}>
                    Pagar
                </button>
            </div>
        </section>
    )
}

export default CheckoutReview
