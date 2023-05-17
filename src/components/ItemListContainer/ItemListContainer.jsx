import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    // useEffect(() => {
    //     getProducts()
    //         .then(response => {
    //             setProducts(response)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }, [])


    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryId])

    return (
        <div className="ItemContainer">
            <h1>{greeting}</h1>
            <ItemList products={products}></ItemList>
        </div>
    )
}

export default ItemListContainer