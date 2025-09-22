const ProductSkeleton = () => {
    return (
        <div className="card bg-base-100 shadow-md animate-pulse">
            <figure className="px-4 pt-4">
                <div className="h-40 w-full bg-base-300 rounded"></div>
            </figure>
            <div className="card-body items-center text-center">
                <div className="h-4 w-3/4 bg-base-300 rounded mb-2"></div>
                <div className="h-4 w-1/2 bg-base-300 rounded mb-2"></div>
                <div className="h-8 w-24 bg-base-300 rounded"></div>
            </div>
        </div>
    )
}

export default ProductSkeleton
