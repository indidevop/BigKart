import ProductCard from '../product/ProductCard.jsx'
import ProductFilters from '../product/ProductFilters.jsx'

const productList = [
    {
        id: 1,
        name: "Floral Green Shirt",
        desc: "Ready for holiday",
        color: "Green",
        price: "1000",
        img: "https://www.mydesignation.com/cdn/shop/files/tropical-shirt-303798.jpg?v=1742891498&width=1100",
        size: "S",
        discount: "10",
    },
    {
        id: 2,
        name: "Purple Shirt",
        desc: "Formal Shirt",
        color: "Purple",
        price: "2000",
        img: "https://m.media-amazon.com/images/I/71sDm1tJHyL._AC_UL640_FMwebp_QL65_.jpg",
        size: "M",
        discount: "0",
    },
    {
        id: 3,
        name: "Simple Office Shirt",
        desc: "Hustle",
        color: "Blue",
        price: "3000",
        img: "https://m.media-amazon.com/images/I/419BrtPg8ML._AC_UL640_FMwebp_QL65_.jpg",
        size: "L",
        discount: "20",
    },
    {
        id: 4,
        name: "Classic Green Shirt",
        desc: "If classy is your thing",
        color: "Green",
        price: "1500",
        img: "https://m.media-amazon.com/images/I/71kh27MQabL._AC_UL640_FMwebp_QL65_.jpg",
        size: "XXL",
        discount: "0",
    },
    {
        id: 5,
        name: "Classic Red Shirt",
        desc: "For Bold Looks",
        color: "Red",
        price: "2000",
        img: "https://m.media-amazon.com/images/I/71m4tJMh+GL._AC_UL640_FMwebp_QL65_.jpg",
        size: "M",
        discount: "10",
    },
    {
        id: 6,
        name: "Plain Black Shirt",
        desc: "For all occasions",
        color: "Black",
        price: "2500",
        img: "https://m.media-amazon.com/images/I/613f7elaBAL._AC_UL640_FMwebp_QL65_.jpg",
        size: "M",
        discount: "0",
    },
]

const ProductPage = () => {
    return (
        <div className='m-5 grid grid-cols-2 md:grid-cols-3 gap-2 place-items-center justify-items-center'>
            {productList.map((product) => (
                <ProductCard
                    key={product.id}
                    name={product.name}
                    desc={product.desc}
                    color={product.color}
                    price={product.price}
                    img={product.img}
                    discount={product.discount}

                />
            ))}
        </div>
    )
}

export default ProductPage