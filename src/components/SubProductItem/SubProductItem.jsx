import React from 'react'
import './SubProductItem.css'
import { images } from '../../assets/assets'

const SubProductItem = ({id,name,price,description,image}) => {
  return (
    <div className='subproduct-item'>
      <div className="subproduct-item-img-container">
        <img className="subproduct-item-image" src={image} alt="" />
      </div>
      <div className="subproduct-item-info">
        <div className="subproduct-item-name-rating">
          <p>{name}</p>
          <img src={images.rating_starts} alt="" />
        </div>
        <p className="subproduct-item-desc">{description}</p>
        <p className="subproduct-item-price">${price}</p>
      </div>
    </div>
  )
}

export default SubProductItem
