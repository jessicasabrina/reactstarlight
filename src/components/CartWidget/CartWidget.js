import cart from './assets/cart.png'
import './CartWidget.css'

const CartWidget = () => { 
    return (
        <div>
            <img className='imgCarrito' src={cart} alt="Carrito" />
            <strong>0</strong>
        </div>
    )
}

export default CartWidget