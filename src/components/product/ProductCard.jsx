import React from 'react'

const ProductCard = () => {
    return (
        <div className='product-card border w-[200px] flex flex-col'>
            <img src="https://www.mydesignation.com/cdn/shop/files/tropical-shirt-303798.jpg?v=1742891498&width=1100" alt="" className=' object-cover' />
            <div className="bottom-section flex flex-col p-2">
                <h3 className='name'>Product Name</h3>
                <p className="desc">Desc</p>
                <p className="color">Green</p>
                <span className="price">$0.00</span>
            </div>
        </div>
    )
}

export default ProductCard