

const ProductCard = ({ name, desc, price, img, discount }) => {
    return (

        <div className="product-card border w-52 rounded-md overflow-hidden bg-white flex flex-col">
            <div className="image-wrap w-full h-60 overflow-hidden">
                <img src={img} alt={name} className="w-full h-full object-cover object-top" />
            </div>
            <div className="bottom-section flex flex-col p-2 h-30">
                <h3 className='name font-bold'>{name}</h3>
                <p className="desc">{desc}</p>
                <span className="price">₹{price}</span>
                {discount > 0 && <span className="discount text-red-400 font-medium">{discount}% off</span>}
            </div>
        </div>
    )
}

export default ProductCard