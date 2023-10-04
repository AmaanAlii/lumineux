import React from "react";
import "./Properties.css";

import PropertiesBannerBgImg from "../../Assets/Properties/PropertiesBannerBgImg.jpeg";
import PropertiesPageMainBgImg from "../../Assets/Properties/PropertiesPageMainBgImg.png";
import PropertiesPageMainBgImg2 from "../../Assets/Properties/PropertiesPageMainBgImg2.png";

import Banner from "../../Components/Banner Component/Banner";
import PropertyCard from "../../Components/Property Card/PropertyCard";

import productData from "../../Data/Product Data/ProductData";

function Properties() {
  const propertiesMainBgStyle = {
    backgroundImage: `url("${PropertiesPageMainBgImg}")`,
  };

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
    <div className="properties-section">
      <div className="properties-main-section">
        <Banner img={PropertiesBannerBgImg} heading="Properties" />
        <div className="properties-results-heading">
          <h4> Showing 1-9 of 26 results</h4>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <rect width="48" height="48" rx="2" fill="white" />
              <rect x="9" y="16" width="31" height="4" rx="1" fill="#3D3D3D" />
              <rect x="9" y="22" width="31" height="4" rx="1" fill="#3D3D3D" />
              <rect x="9" y="28" width="31" height="4" rx="1" fill="#3D3D3D" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <rect
                width="48"
                height="48"
                rx="2"
                fill="url(#paint0_linear_288_3848)"
              />
              <rect
                width="48"
                height="48"
                rx="2"
                fill="black"
                fill-opacity="0.2"
              />
              <rect
                width="48"
                height="48"
                rx="2"
                fill="black"
                fill-opacity="0.2"
              />
              <rect
                x="13.7046"
                y="14.5537"
                width="9.77273"
                height="9.77273"
                stroke="white"
                stroke-width="0.5"
              />
              <rect
                x="23.9773"
                y="14.5537"
                width="9.77273"
                height="9.77273"
                stroke="white"
                stroke-width="0.5"
              />
              <rect
                x="23.9773"
                y="24.1289"
                width="9.77273"
                height="9.77273"
                stroke="white"
                stroke-width="0.5"
              />
              <rect
                x="13.7046"
                y="24.1289"
                width="9.77273"
                height="9.77273"
                stroke="white"
                stroke-width="0.5"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_288_3848"
                  x1="-4.80312e-07"
                  y1="-30.7097"
                  x2="120.478"
                  y2="2.63784"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.00520833" stop-color="#BE9118" />
                  <stop offset="0.03125" stop-color="#EFD84E" />
                  <stop offset="0.0989583" stop-color="#BE9218" />
                  <stop offset="0.197917" stop-color="#F4DE53" />
                  <stop offset="0.307292" stop-color="#D4B030" />
                  <stop offset="0.375" stop-color="#DFC03C" />
                  <stop offset="0.463542" stop-color="#C0941A" />
                  <stop offset="0.463642" stop-color="#C49A1E" />
                  <stop offset="0.5625" stop-color="#B48F25" />
                  <stop offset="0.671875" stop-color="#C89F23" />
                  <stop offset="0.8125" stop-color="#AE9449" />
                  <stop offset="1" stop-color="#BF9319" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="properties-main-bg-layer" style={propertiesMainBgStyle}>
        <div className="properties-main-section-2">
          <div className="property-results-section">{renderedProductCards}</div>
        </div>
      </div>
    </div>
  );
}

export default Properties;
