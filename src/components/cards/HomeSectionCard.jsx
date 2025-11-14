import React from 'react'
import shoppingWebp from '../../assets/shopping.webp'
const HomeSectionCard = () => {
    return (
        <div className="home-section-card flex flex-col m-3 w-[240px] bg-gray-200 items-center shrink-0 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img src={shoppingWebp} alt="Shopping" className='w-full object-cover object-top h-64 rounded-t-xl' />
            <div className="bottom-section m-1 text-center">
                <div className="title font-bold">
                    Shirt</div>
                <div className="desc">Printed holiday shirt</div>
            </div>
        </div>
    )
}

export default HomeSectionCard