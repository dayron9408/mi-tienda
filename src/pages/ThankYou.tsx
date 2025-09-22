import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'

const ThankYou = () => {
    const [orderId, setOrderId] = useState('')

    useEffect(() => {
        const id = Math.floor(100000 + Math.random() * 900000)
        setOrderId(`ORD-${id}`)
    }, [])

    return (
        <section className="text-center py-10">
            <h1 className="text-3xl font-bold text-success mb-4">¡Gracias por tu compra!</h1>
            <p className="text-lg mb-2">Tu número de orden es:</p>
            <p className="text-xl font-mono text-primary mb-6">{orderId}</p>
            <Link to="/" className="btn btn-primary">Volver a la tienda</Link>
        </section>
    )
}

export default ThankYou
