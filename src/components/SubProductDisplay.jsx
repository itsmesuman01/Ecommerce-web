import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext.jsx";
import SubProductItem from "./SubProductItem.jsx";

const SubProductDisplay = ({ category }) => {
  const { subproduct_list } = useContext(StoreContext);

  const subproductDisplayStyle = {
    marginTop: "10px",
  };

  const h2Style = {
    fontSize: "max(2vw, 24px)",
    fontWeight: "600",
  };

  const subproductDisplayListStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    marginTop: "30px",
    gap: "30px",
    rowGap: "50px",
  };

  return (
    <div className="subproduct-display" id="subproduct-display" style={subproductDisplayStyle}>
      <h2 style={h2Style}>Top product near you</h2>
      <div className="subproduct-display-list" style={subproductDisplayListStyle}>
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
