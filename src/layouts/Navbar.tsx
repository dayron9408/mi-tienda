import { useCart } from '../context/CartContext'
import { FaShoppingCart } from 'react-icons/fa'
import ThemeSwitcher from '../components/ThemeSwitcher'

const Navbar = () => {
  const { cart } = useCart()
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="navbar bg-base-100 text-base-content px-4 shadow-md sticky top-0 z-50">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo Mi tienda" className="h-8 w-8" />
          <a href="/" className="text-xl font-bold">Mi Tienda</a>
        </div>
      </div>


      <div className="flex items-center gap-4">
        <ThemeSwitcher />

        <label htmlFor="cart-drawer" className="btn btn-sm btn-outline btn-accent relative cursor-pointer">
          <FaShoppingCart />
          {totalItems > 0 && (
            <span className="badge badge-secondary text-xs px-2 py-1 rounded-full absolute -top-2 -right-2">
              {totalItems}
            </span>
          )}
        </label>
      </div>
    </div>
  )
}

export default Navbar
