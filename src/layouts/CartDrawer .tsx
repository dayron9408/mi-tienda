import { useCart } from '../context/CartContext'
import { FaTrash } from 'react-icons/fa'
import toast from 'react-hot-toast'

const CartDrawer = () => {
    const { cart, removeFromCart, updateQuantity } = useCart()
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)


    const handleRemove = (id: number) => {
        removeFromCart(id)
        toast.success('Producto eliminado del carrito')
    }

    return (
        <div className="drawer drawer-end z-50">
            <input id="cart-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label htmlFor="cart-drawer" className="drawer-overlay"></label>
                <div className="menu p-4 w-96 min-h-full bg-base-200 text-base-content">
                    <h2 className="text-lg font-bold mb-4">🛒 Carrito</h2>

                    {cart.length === 0 ? (
                        <p className="text-sm text-gray-500">Tu carrito está vacío.</p>
                    ) : (
                        <>
                            <div className="space-y-4">
                                {cart.map(item => (
                                    <div key={item.id} className="card bg-base-100 shadow-md">
                                        <div className="card-body flex flex-col md:flex-row items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="h-20 w-20 object-contain"
                                                />
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
                                <div className="flex flex-col gap-2 mt-4">
                                    <a href="/checkout" className="btn btn-primary btn-block">
                                        Ir al carrito
                                    </a>
                                    <a href="/confirmation" className="btn btn-success btn-block">
                                        Pagar
                                    </a>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div >
    )
}

export default CartDrawer
