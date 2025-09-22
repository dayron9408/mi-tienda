import { useState } from 'react'
import { useProducts } from '../hooks/useProducts'
import { ProductCard } from '../components/ProductCard'
import ProductDetail from '../components/ProductDetail'
import type { Product } from '../types/product'
import { FaBoxOpen } from 'react-icons/fa'
import ProductSkeleton from '../components/ProductSkeleton'

const Home = () => {
    const { data, isLoading, error } = useProducts()
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState<string | null>(null)
    const [sortBy, setSortBy] = useState<'price' | 'rating' | null>(null)
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

    const handleCloseModal = () => setSelectedProduct(null)

    const categories = Array.from(new Set(data?.map(p => p.category)))

    let filteredProducts = data?.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase())
        const matchesCategory = category ? product.category === category : true
        return matchesSearch && matchesCategory
    })

    if (sortBy === 'price') {
        filteredProducts = filteredProducts?.slice().sort((a, b) =>
            sortDirection === 'asc' ? a.price - b.price : b.price - a.price
        )
    } else if (sortBy === 'rating') {
        filteredProducts = filteredProducts?.slice().sort((a, b) =>
            sortDirection === 'asc' ? a.rating.rate - b.rating.rate : b.rating.rate - a.rating.rate
        )
    }

    if (isLoading) return (
        <section className="px-4 py-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center py-10 animate-pulse">
                <FaBoxOpen className="text-5xl text-primary mb-4" />
                <p className="text-sm text-gray-500">Cargando productos...</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                    <ProductSkeleton key={i} />
                ))}
            </div>
        </section>
    )

    if (error) return <div className="text-center py-10 text-error">Error al cargar productos</div>

    return (
        <section className="px-4 py-6 max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-center">Catálogo</h1>

            {/* Buscador + Filtros */}
            <div className="mb-6 flex flex-col md:flex-row items-center gap-4">
                <input
                    type="text"
                    placeholder="Buscar producto..."
                    className="input input-bordered w-full md:w-1/2"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <div className="flex flex-wrap  gap-2">
                    <button
                        className={`btn btn-sm ${category === null ? 'btn-primary' : 'btn-outline'}`}
                        onClick={() => setCategory(null)}
                    >
                        Todos
                    </button>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`btn btn-sm ${category === cat ? 'btn-primary' : 'btn-outline'}`}
                            onClick={() => setCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Ordenamiento */}
            <div className="flex flex-wrap  gap-2 mb-6">
                <button
                    className={`btn btn-sm ${sortBy === 'price' ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => setSortBy('price')}
                >
                    Ordenar por precio
                </button>
                <button
                    className={`btn btn-sm ${sortBy === 'rating' ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => setSortBy('rating')}
                >
                    Ordenar por popularidad
                </button>
                <button
                    className="btn btn-sm btn-outline"
                    onClick={() => setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'))}
                >
                    {sortDirection === 'asc' ? 'Ascendente ↑' : 'Descendente ↓'}
                </button>
            </div>

            {/* Productos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts?.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onClick={() => setSelectedProduct(product)}
                    />
                ))}
            </div>

            {/* Modal de detalles */}
            {selectedProduct && (
                <dialog id="product_modal" className="modal modal-open">
                    <ProductDetail product={selectedProduct} onClose={handleCloseModal} />
                </dialog>
            )}
        </section>
    )
}

export default Home
