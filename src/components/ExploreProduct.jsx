import React from 'react'
import { product_list } from '../assets/assets'

const ExploreProduct = ({ category, setCategory }) => {
  return (
    <div className='flex flex-col gap-5' id='explore-product'>
      <h1 className='text-red-500 font-medium'>Explore our product</h1>
      <p className='max-w-[60%] column text-red-500'>
        Shoes are a type of footwear designed to protect and provide comfort to the feet while walking, running, or standing
      </p>
      <div className='flex justify-between items-center gap-7 text-center my-5 overflow-x-auto'>
        {product_list.map((item, index) => {
          return (
            <div
              onClick={() => setCategory(prev => (prev === item.product_name ? 'All' : item.product_name))}
              key={index}
              className='flex flex-col items-center cursor-pointer'
            >
              <img
                className={`w-[7.5vw] min-w-[80px] rounded-full transition-all duration-200 ${category === item.product_name ? 'border-4 border-red-500 p-1' : ''}`}
                src={item.product_image}
                alt=""
              />
              <p className='mt-2 text-orange-500 text-[max(1.4vw,_16px)]'>{item.product_name}</p>
            </div>
          )
        })}
      </div>
      <hr className='my-2 h-[2px] bg-[#e2e2e2] border-none' />
    </div>
  )
}

export default ExploreProduct
