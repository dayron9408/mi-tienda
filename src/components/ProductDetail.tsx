import type { Product } from '../types/product'
import { useCart } from '../context/CartContext'
import { toast } from 'react-hot-toast'
import { FaCartPlus } from 'react-icons/fa';

const ProductDetail = ({ product, onClose }: { product: Product; onClose: () => void }) => {
    const { addToCart } = useCart()

    const handleAdd = () => {
        addToCart(product)
        toast.success(`${product.title} agregado al carrito`)
        onClose()
    }

    return (
        <div className="modal-box max-w-xl">
            <h3 className="font-bold text-lg">{product.title}</h3>
            <img
                src={product.image}
                alt={product.title}
                className="h-48 object-contain mx-auto my-4"
            />
            <p className="text-sm text-gray-500 mb-2">{product.description}</p>
            <p className="text-primary font-bold text-lg mb-4">${product.price}</p>
            <div className="modal-action">
                <button className="btn btn-primary btn-sm gap-2" onClick={handleAdd}>
                    <FaCartPlus />
                    Agregar
                </button>
                <button className="btn btn-secondary btn-sm gap-2" onClick={onClose}>
                    Cerrar
                </button>
            </div>
        </div>
    )
}

export default ProductDetail
