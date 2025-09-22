import type { Product } from '../types/product'
import { FaCartPlus, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import { toast } from 'react-hot-toast'

export const ProductCard = ({
    product,
    onClick,
}: {
    product: Product
    onClick: () => void
}) => {
    const { addToCart } = useCart()

    const handleAdd = (e: React.MouseEvent) => {
        e.stopPropagation()
        addToCart(product)
        toast.success(`${product.title} agregado al carrito`)
    }

    const renderStars = (rate: number) => {
        const stars = []
        for (let i = 1; i <= 5; i++) {
            if (rate >= i) {
                stars.push(<FaStar key={i} className="text-yellow-400" />)
            } else if (rate >= i - 0.5) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />)
            } else {
                stars.push(<FaRegStar key={i} className="text-yellow-400" />)
            }
        }
        return <div className="flex gap-1 justify-center mt-1">{stars}</div>
    }

    return (
        <div
            className="card bg-base-100 shadow-md hover:shadow-lg transition hover:scale-[1.02] cursor-pointer"
            onClick={onClick}
        >
            <figure className="px-4 pt-4">
                <img src={product.image} alt={product.title} className="h-40 object-contain" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-sm">{product.title}</h2>
                {renderStars(product.rating.rate)}
                <p className="text-primary font-bold">${product.price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary btn-sm gap-2" onClick={handleAdd}>
                        <FaCartPlus />
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    )
}
