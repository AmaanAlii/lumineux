import React from "react";
import "./PropertiesShowcase.css";

import PropertyCard from "../Property Card/PropertyCard";

function PropertiesShowcase({ heading, coloredHeading, productData }) {
  console.log("product data in Shocase=", productData);
  const renderedProductCards = productData.map((data, index) => (
    <PropertyCard
      key={index}
      image={data.image}
      name={data.name}
      price={data.price}
      description={data.description}
      rooms={data.rooms}
      bathRooms={data.bathRooms}
      address={data.address}
    />
  ));

  return (
    <div className="properties-showcase-main">
      <div className="properties-showcase-heading">
        <h3>
          {heading} <span>{coloredHeading}</span>
        </h3>
      </div>
      <div className="properties-showcase-section">
        <div className="propeties-cards-container">{renderedProductCards}</div>
      </div>
    </div>
  );
}

export default PropertiesShowcase;
