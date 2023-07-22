const products=[
    {
      id: 1,
      brand: 'Adidas',
      model: 'Stan Smith',
      price: 250,
      img: './assets/adidas-stan-smith.png',
      stock: 12,
      category: 'Urbana'
    },
    {
      id: 2,
      brand: 'Adidas',
      model: 'Superstar',
      price: 235,
      img: './assets/adidas-superstar.png',
      stock: 10,
      category: 'Urbana'
    },
    {
      id: 3,
      brand: 'Fila',
      model: 'Classic',
      price: 135,
      img: './assets/fila-classic.png',
      stock: 3,
      category: 'Deportiva'
    },
    {
      id: 4,
      brand: 'Nike',
      model: 'Air Force 1',
      price: 270,
      img: './assets/nike-air-force-1.png',
      stock: 1,
      category: 'Urbana'
    },
    {
      id: 5,
      brand: 'Nike',
      model: 'Dunk Low',
      price: 180,
      img: './assets/nike-dunk-low.png',
      stock: 5,
      category: 'Urbana'
    },
    {
      id: 6,
      brand: 'Vans',
      model: 'Old Skool',
      price: 120,
      img: './assets/vans-old-skool.png',
      stock: 7,
      category: 'Urbana'
    }
  ]
  

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },1500)
    })
}

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId))
    }, 1500)
  })
}

export const getProductsByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.category === productCategory))
    }, 1500)
  })
}