import React, { useContext, useState } from "react";
import "./SubProductItem.css";
import { images } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const SubProductItem = ({ id, name, price, description, image }) => {
  // const [itemCount,setItemCount] = useState(0)
  const { cartItems, setCartItems, addToCart, removeFromCart } = useContext(
    StoreContext
  );

  return (
    <div className="subproduct-item">
      <div className="subproduct-item-img-container">
        <img className="subproduct-item-image" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={images.add_icon_white}
          />
        ) : (
          <div className="subproduct-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={images.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={images.add_icon_green}
              alt=""
            />
          </div>
        )}
        {/* {!itemCount ? <img className='add' onClick={() => setItemCount(prev => prev + 1 )} src={images.add_icon_white} /> :
        <div className="subproduct-item-counter">
          <img onClick={() => setItemCount(prev => prev - 1 )} src={images.remove_icon_red} alt="" />
          <p>{itemCount}</p>
          <img onClick={() => setItemCount(prev => prev + 1 )} src={images.add_icon_green} alt="" />
        </div>} */}
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
  );
};

export default SubProductItem;
