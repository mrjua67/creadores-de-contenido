import React from "react";
import CarCard from "../components/CarCard.jsx";
import "../styles/Galeria.css";


const Galeria = () => {
  const cars = [
    {
      name: "Datsun",
      brand: "Datsun",
      speed: 180,
      topSpeed: 220,
      braking: "Bueno",
      control: "Alto",
      image: "https://images.unsplash.com/photo-1736654641856-05b21cc63a6e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Lamborghini Diablo",
      brand: "Lamborghini",
      speed: 320,
      topSpeed: 350,
      braking: "Excelente",
      control: "Alto",
      image: "https://images.unsplash.com/photo-1687975893224-09bacc979bab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Nissan Skyline",
      brand: "Nissan",
      speed: 200,
      topSpeed: 240,
      braking: "Muy Bueno",
      control: "Medio",
      image: "https://images.unsplash.com/photo-1733981787000-fffca13abb29?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "shelby cobra",
      brand: "shelby",
      speed: 205,
      topSpeed: 315,
      braking: "Bueno",
      control: "Medio",
      image: "https://images.unsplash.com/photo-1600711700203-b74c0160515e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Aston martin DB8",
      brand: "Aston martin",
      speed: 310,
      topSpeed: 290,
      braking: "Muy Bueno",
      control: "Alto",
      image: "https://images.unsplash.com/photo-1618486613525-c694bf152b2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Ford Mustang 1967",
      brand: "Mustang",
      speed: 205,
      topSpeed: 315,
      braking: "Bueno",
      control: "Medio",
      image: "https://images.unsplash.com/photo-1600897969467-36f27cbf649b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Nissan Silvia",
      brand: "Nissan",
      speed: 185,
      topSpeed: 260,
      braking: "Bueno",
      control: "Muy Bueno",
      image: "https://images.unsplash.com/photo-1577520413075-07f5bd4cbc62?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Mazda",
      brand: "RX7",
      speed: 205,
      topSpeed: 285,
      braking: "Bueno",
      control: "Muy Bueno",
      image: "https://images.unsplash.com/photo-1610836158027-35746947f928?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Mitsubishi Lancer Evolution",
      brand: "Lancer Evolution",
      speed: 195,
      topSpeed: 225,
      braking: "Bueno",
      control: "Muy Bueno",
      image: "https://images.unsplash.com/photo-1661858499024-0f1e991f3a3e?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Porshe 911",
      brand: "Porshe",
      speed: 135,
      topSpeed: 245,
      braking: "Bueno",
      control: "Muy Bueno",
      image: "https://images.unsplash.com/photo-1610788252775-de80a4fcdc5c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
 
  return (
    <div className="home">
      <h1>Galería de Autos</h1>
      <div className="car-grid">
        {cars.map((car, index) => (
          <CarCard key={index} {...car} />
        ))}
      </div>
    </div>
  );
};

export default Galeria;
