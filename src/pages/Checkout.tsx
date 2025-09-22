import { useCart } from '../context/CartContext'
import { toast } from 'react-hot-toast'
import { Link, useNavigate } from '@tanstack/react-router'
import { FaTrash } from 'react-icons/fa'

const Checkout = () => {
    const { cart, removeFromCart, updateQuantity } = useCart()
    const navigate = useNavigate()

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    const handleRemove = (id: number) => {
        removeFromCart(id)
        toast.error('Producto eliminado del carrito')
    }

    const handleCheckout = () => {
        // toast.success('Compra finalizada 🎉')
        // clearCart()
        navigate({ to: '/confirmation' })
    }

    if (cart.length === 0) {
        return (
            <div className="text-center py-10">
                <p className="text-lg">Tu carrito está vacío</p>
                <Link to="/" className="btn btn-primary mt-4">Volver a la tienda</Link>
            </div>
        )
    }

    return (
        <section className="px-4 py-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-center">Resumen de Compra</h1>
            <div className="space-y-4">
                {cart.map(item => (
                    <div key={item.id} className="card bg-base-100 shadow-md">
                        <div className="card-body flex flex-col md:flex-row items-center justify-between">
                            <div className="flex items-center gap-4">
                                <img src={item.image} alt={item.title} className="h-20 w-20 object-contain" />
                                <div>
                                    <h2 className="card-title text-sm">{item.title}</h2>
                                    <p className="text-sm font-bold text-primary">
                                        Subtotal: ${(item.price * item.quantity).toFixed(2)}
                                    </p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <button
                                            className="btn btn-xs btn-outline"
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            disabled={item.quantity === 1}
                                        >
                                            –
                                        </button>
                                        <span className="text-sm">{item.quantity}</span>
                                        <button
                                            className="btn btn-xs btn-outline"
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="btn btn-sm btn-error mt-4 md:mt-0"
                                onClick={() => handleRemove(item.id)}
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 text-center">
                <p className="text-lg font-bold">Total: ${total.toFixed(2)}</p>
                <button className="btn btn-success mt-4" onClick={handleCheckout}>
                    Finalizar compra
                </button>
            </div>
        </section>
    )
}

export default Checkout
