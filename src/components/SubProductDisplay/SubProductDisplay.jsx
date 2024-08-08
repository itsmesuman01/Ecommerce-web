import React, { useContext } from "react";
import "./SubProductDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import SubProductItem from "../SubProductItem/SubProductItem.jsx";

const SubProductDisplay = ({ category }) => {
  const { subproduct_list } = useContext(StoreContext);
  return (
    <div className="subproduct-display" id="subproduct-display">
      <h2>Top product near you</h2>
      <div className="subproduct-display-list">
        {subproduct_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <SubProductItem
                key={index}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default SubProductDisplay;
