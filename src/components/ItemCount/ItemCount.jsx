import { useState } from 'react'
// import { FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa'

export default function ItemCount({ stock, initial, onAdd }) {
    const [quantity, setQuantity] = useState(initial)

    function increment() {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    function decrement() {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="Counter">
            <div className="Controls">
                <button className="Button" onClick={decrement} disabled={quantity === 1}>-</button>
                    <h4 className="Number">{quantity}</h4>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="Button" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}
