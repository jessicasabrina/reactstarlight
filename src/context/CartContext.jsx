import { createContext, useState, useContext } from 'react'

// export const CartContext = createContext(0)
// export const useCartContext = () => useContext(CartContext)

// export const CartProvider = ({ children }) => {
//     const [cartList, setCartList] = useState([]);
    
//     const addToCart = (itemAdd) => {
//         if(!isInCart(itemAdd.id)) {
//             setCartList([...cartList, itemAdd])
//         }
//     };

//     const isInCart = (id) => cartList.some(it => it.id === id);

//     const getItemQuantity = () => {
//         return cartList.reduce((prevQuantity, actQuantity) => prevQuantity + actQuantity.quantity, 0)
//     };

//     const getTotalPrice = () => {
//         return cartList.reduce((prev, act) => prev + act.quantity * act.price, 0)
//     };

//     const deleteItem = (id) => setCartList(cartList.filter(it => it.id !== id));
    
//     const clearCartList = () => setCartList([]);

//     return(
//         <CartContext.Provider value={{ 
//             cartList, 
//             setCartList, 
//             addToCart, 
//             isInCart, 
//             getItemQuantity, 
//             getTotalPrice, 
//             deleteItem, 
//             clearCartList,
//         }}>
//             {children}
//         </CartContext.Provider>
//     )
// }

export const CartContext = createContext ({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
            { children }
        </CartContext.Provider>
    )

}