'use client'//rerenders page when props change

import ProductCard from '../product/ProductCard.jsx'
import ProductFilters from '../product/ProductFilters.jsx'

const productList = [
    {
        id: 1,
        name: "Floral Green Shirt",
        desc: "Ready for holiday",
        color: "green",
        price: "1000",
        img: "https://www.mydesignation.com/cdn/shop/files/tropical-shirt-303798.jpg?v=1742891498&width=1100",
        size: "S",
        discount: "10",
    },
    {
        id: 2,
        name: "Purple Shirt",
        desc: "Formal Shirt",
        color: "purple",
        price: "2000",
        img: "https://m.media-amazon.com/images/I/71sDm1tJHyL._AC_UL640_FMwebp_QL65_.jpg",
        size: "M",
        discount: "0",
    },
    {
        id: 3,
        name: "Simple Office Shirt",
        desc: "Hustle",
        color: "blue",
        price: "3000",
        img: "https://m.media-amazon.com/images/I/419BrtPg8ML._AC_UL640_FMwebp_QL65_.jpg",
        size: "L",
        discount: "20",
    },
    {
        id: 4,
        name: "Classic Green Shirt",
        desc: "If classy is your thing",
        color: "green",
        price: "1500",
        img: "https://m.media-amazon.com/images/I/71kh27MQabL._AC_UL640_FMwebp_QL65_.jpg",
        size: "XXL",
        discount: "0",
    },
    {
        id: 5,
        name: "Classic Red Shirt",
        desc: "For Bold Looks",
        color: "red",
        price: "2000",
        img: "https://m.media-amazon.com/images/I/71m4tJMh+GL._AC_UL640_FMwebp_QL65_.jpg",
        size: "M",
        discount: "10",
    },
    {
        id: 6,
        name: "Plain Black Shirt",
        desc: "For all occasions",
        color: "black",
        price: "2500",
        img: "https://m.media-amazon.com/images/I/613f7elaBAL._AC_UL640_FMwebp_QL65_.jpg",
        size: "M",
        discount: "0",
    },
]

const ProductPage = ({ selectedFilters = {}, checkedFilters = {} }) => {
    const filteredProducts = productList.filter((product) => {
        // Filter by color (checkbox - multiple selection)
        if (checkedFilters.color?.length > 0) {
            if (!checkedFilters.color.includes(product.color)) return false
        }

        // Filter by size (checkbox - multiple selection)
        if (checkedFilters.size?.length > 0) {
            if (!checkedFilters.size.includes(product.size)) return false
        }

        // Filter by price (radio - single selection)
        if (selectedFilters.price) {
            const price = parseInt(product.price)
            const filterPrice = parseInt(selectedFilters.price)
            if (price > filterPrice) return false
        }

        // Filter by discount (radio - single selection)
        if (selectedFilters.discount) {
            const discount = parseInt(product.discount)
            const filterDiscount = parseInt(selectedFilters.discount)
            if (discount < filterDiscount) return false
        }

        return true
    })
    return (
        <div className='m-5 grid grid-cols-2 md:grid-cols-3 gap-2 place-items-center justify-items-center'>

            {filteredProducts.map((product) => (
                <ProductCard
                    key={product.id}
                    name={product.name}
                    desc={product.desc}
                    price={product.price}
                    img={product.img}
                    discount={product.discount}

                />
            ))}
        </div>
    )
}

export default ProductPage