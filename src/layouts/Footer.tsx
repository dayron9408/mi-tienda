const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content mt-12">
            <div className="footer grid grid-cols-1 md:grid-cols-3 gap-10 p-10">
                <div>
                    <span className="footer-title">Tienda</span>
                    <a className="link link-hover">Inicio</a>
                    <a className="link link-hover">Productos</a>
                    <a className="link link-hover">Carrito</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Términos</a>
                    <a className="link link-hover">Privacidad</a>
                </div>
                <div>
                    <span className="footer-title">Contacto</span>
                    <a className="link link-hover">soporte@mitienda.com</a>
                    <a className="link link-hover">+53 555-1234</a>
                </div>
            </div>

            <div className="text-center pb-6 text-sm text-gray-500">
                © 2025 Mi Tienda
            </div>
        </footer>
    )
}

export default Footer
