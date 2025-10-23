import React from "react";
import "./Characters.css";
import bombon from "../assets/bombon.png";
import burbuja from "../assets/burbuja.png";
import bellota from "../assets/bellota.png";

const Characters = () => {
  return (
    <section className="characters-section">
      <h2 className="characters-title">Personajes Principales</h2>
      <div className="characters-container">
        <div className="character-card burbuja">
          <img src={burbuja} alt="Burbuja" className="character-img" />
          <h3>Burbuja</h3>
          <p>La dulce y tierna, pero con gran poder oculto.</p>
        </div>
        <div className="character-card bombon">
          <img src={bombon} alt="Bombón" className="character-img" />
          <h3>Bombón</h3>
          <p>La líder inteligente y decidida del grupo.</p>
        </div>
        <div className="character-card bellota">
          <img src={bellota} alt="Bellota" className="character-img" />
          <h3>Bellota</h3>
          <p>La fuerte y valiente, siempre lista para luchar.</p>
        </div>
      </div>
    </section>
  );
};

export default Characters;
