import React from "react";
import "./CarCard.css";

const CarCard = ({ name, image, topSpeed, speed, braking, brand, control }) => {
  return (
    <div className="car-card">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <ul>
        <li><strong>Marca:</strong> {brand}</li>
        <li><strong>Velocidad Máxima:</strong> {topSpeed} km/h</li>
        <li><strong>Velocidad Actual:</strong> {speed} km/h</li>
        <li><strong>Frenado:</strong> {braking}</li>
        <li><strong>Control:</strong> {control}</li>
      </ul>
    </div>
  );
};

export default CarCard;
