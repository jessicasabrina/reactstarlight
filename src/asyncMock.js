const products =
[
    {
        id: "1",
        name: "Remera1",
        category: "remeras",
        description: "Remera1",
        price: 2200,
        stock: 30,
        img: '../img/remera1.jpeg'
    },

    {
        id: "2",
        name: "Remera2",
        category: "remeras",
        description: "Remera2",
        price: 6500,
        stock: 25,
        img: '../img/remera2.jpeg'
    },

    {
        id: "3",
        name: "Remera3",
        category: "remeras",
        description: "Remera3",
        price: 30000,
        stock:100,
        img: '../img/remera3.jpeg'
    },

    {
        id: "4",
        name: "Remera4",
        category: "remeras",
        description: "Remera4",
        price: 6000,
        stock: 6,
        img: '../img/remera4.jpeg'
    },

    {
        id: "5",
        name: "Pollera1",
        category: "polleras",
        description: "Pollera1",
        price: 8000,
        stock: 99,
        img: '../img/pollera1.jpeg'
    },

    {
        id: "6",
        name: "Pollera2",
        category: "polleras",
        description: "Pollera2",
        price: 5000,
        stock: 230,
        img: '../img/pollera2.jpeg'
    },

    {
        id: "7",
        name: "Pollera3",
        category: "polleras",
        description: "Pollera3",
        price: 6000,
        stock: 67,
        img: '../img/pollera3.jpeg'
    },

    {
        id: "8",
        name: "Pollera4",
        category: "polleras",
        description: "pollera4",
        price: 5000,
        stock: 23,
        img: 'img/pollera4.jpeg'
    },

    {
        id: "9",
        name: "Zapatos",
        category: "zapatos",
        description: "Zapatos",
        price: 1000,
        stock: 3,
        img: '../img/zapatos.jpeg'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 100)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 100)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 100)
    })
}

// export const getProducts = () => {
//     return new Promise(resolve => {
//         setTimeout( ()=> {
//             resolve(products)
//         }, 100) 
//     })
// }

// //Creamos una nueva función similar pero que nos retorne un solo item: 

// export const getProductById = (id) => {
//     return new Promise(resolve => {
//         setTimeout( ()=> {
//             const productbyid = products.find(prod => prod.id === id);
//             resolve(productbyid);
//         }, 100)
//     })
// }


// //Creamos una nueva función que retorna toda la categoría. 

// export const getProductsByCategory = (idCategoria) => {
//     return new Promise( resolve => {
//         setTimeout( ()=> {
//             const productosCategoria = products.filter(prod => prod.idCat === idCategoria);
//             resolve(productosCategoria);
//         },100)
//     })
// }
