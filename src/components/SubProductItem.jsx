import React, { useContext } from "react";
import { images } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const SubProductItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const subproductItemStyle = {
    width: "100%",
    margin: "auto",
    borderRadius: "15px",
    boxShadow: "0px 0px 10px #00000015",
    transform: "0.3s",
    animation: "fadeIn 1s",
  };

  const subproductItemInfoStyle = {
    padding: "20px",
  };

  const subproductItemNameRatingStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  };

  const subproductItemDescStyle = {
    color: "red",
    fontSize: "12px",
  };

  const subproductItemPriceStyle = {
    color: "green",
    fontSize: "22px",
    fontWeight: "500",
    margin: "10px 0px",
  };

  const subproductItemImgContainerStyle = {
    position: "relative",
  };

  const addIconStyle = {
    width: "35px",
    position: "absolute",
    bottom: "15px",
    right: "15px",
    cursor: "pointer",
    borderRadius: "50%",
  };

  const subproductItemCounterStyle = {
    position: "absolute",
    bottom: "15px",
    right: "15px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "6px",
    borderRadius: "50%",
    backgroundColor: "white",
  };

  const subproductItemCounterImgStyle = {
    width: "30px",
  };

  return (
    <div className="subproduct-item" style={subproductItemStyle}>
      <div className="subproduct-item-img-container" style={subproductItemImgContainerStyle}>
        <img className="subproduct-item-image" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={images.add_icon_white}
            style={addIconStyle}
          />
        ) : (
          <div className="subproduct-item-counter" style={subproductItemCounterStyle}>
            <img
              onClick={() => removeFromCart(id)}
              src={images.remove_icon_red}
              alt=""
              style={subproductItemCounterImgStyle}
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={images.add_icon_green}
              alt=""
              style={subproductItemCounterImgStyle}
            />
          </div>
        )}
      </div>
      <div className="subproduct-item-info" style={subproductItemInfoStyle}>
        <div className="subproduct-item-name-rating" style={subproductItemNameRatingStyle}>
          <p>{name}</p>
          <img src={images.rating_starts} alt="" />
        </div>
        <p className="subproduct-item-desc" style={subproductItemDescStyle}>
          {description}
        </p>
        <p className="subproduct-item-price" style={subproductItemPriceStyle}>
          ${price}
        </p>
      </div>
    </div>
  );
};

export default SubProductItem;
