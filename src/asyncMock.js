const products =
[
    {
        id: "1",
        name: "Remera1",
        category: "remeras",
        description: "Remera1",
        price: 2200,
        stock: 30,
        img: '../img/anya.jpg'
    },

    {
        id: "2",
        name: "Remera2",
        category: "remeras",
        description: "Remera2",
        price: 6500,
        stock: 25,
        img: '../img/anya2.jpg'
    },

    {
        id: "3",
        name: "Remera3",
        category: "remeras",
        description: "Remera3",
        price: 30000,
        stock:100,
        img: '../img/anya3.jpg'
    },

    {
        id: "4",
        name: "Remera4",
        category: "remeras",
        description: "Remera4",
        price: 6000,
        stock: 6,
        img: '../img/anya4.jpg'
    },

    {
        id: "5",
        name: "Pollera1",
        category: "polleras",
        description: "Pollera1",
        price: 8000,
        stock: 99,
        img: '../img/anya5.jpg'
    },

    {
        id: "6",
        name: "Pollera2",
        category: "polleras",
        description: "Pollera2",
        price: 5000,
        stock: 230,
        img: '../img/anya6.jpg'
    },

    {
        id: "7",
        name: "Pollera3",
        category: "polleras",
        description: "Pollera3",
        price: 6000,
        stock: 67,
        img: '../img/anya7.jpg'
    },

    {
        id: "8",
        name: "Pollera4",
        category: "polleras",
        description: "Pollera4",
        price: 5000,
        stock: 23,
        img: '../img/anya8.jpg'
    },

    {
        id: "9",
        name: "Zapatos",
        category: "zapatos",
        description: "Zapatos",
        price: 1000,
        stock: 3,
        img: '../img/anya9.jpg'
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
