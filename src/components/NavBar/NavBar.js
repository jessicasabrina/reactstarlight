import CartWidget from '../CartWidget/CartWidget.js'
import './NavBar.css'

const NavBar = () => { 
    return (
        <header>
            <h1>Starlight Store</h1>
            <nav>
                <ul>
                    <li>Accesorios</li>
                    <li>Figuras</li>
                    <li>Resina</li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar