import React, { useState } from "react";
import "./produkt.css";

import p3 from "../../assets/p3.jpg";
import p4 from "../../assets/p4.jpg";
import p5 from "../../assets/p5.jpg";
import p6 from "../../assets/p6.jpg";
import p7 from "../../assets/p7.jpg";
import p8 from "../../assets/p8.jpg";
import p9 from "../../assets/p9.jpg";
import p10 from "../../assets/p10.jpg";
import p11 from "../../assets/p11.jpg";
import p12 from "../../assets/p12.jpg";
import p13 from "../../assets/p13.jpg";
import p14 from "../../assets/p14.jpg";
import p15 from "../../assets/p15.jpg";
import p16 from "../../assets/p16.jpg";
import p17 from "../../assets/p17.jpg";
import p18 from "../../assets/p18.jpg";

const Data = [
  {
    id: 3,
    title: "Vitamin C",
    description:
      "Unterstützen Sie Ihr Immunsystem mit unserem hochwertigen Vitamin C-Präparat.",

    image: p3
  },
  {
    id: 4,
    title: "Vitamin B12",
    description:
      "Versorgen Sie Ihren Körper mit lebenswichtigem Vitamin B12 für mehr Energie und Vitalität.",

    image: p4
  },
  {
    id: 5,
    title: "Vitamin D3K2",
    description:
      "Unterstützen Sie Ihre Knochen- und Herzgesundheit mit unserer optimalen Kombination aus Vitamin D3 und K2.",

    image: p5
  },
  {
    id: 6,
    title: "Curcuma",
    description:
      "Nutzen Sie die kraftvollen pflanzlichen Eigenschaften von Curcuma, um Entzündungen zu bekämpfen und die Gesundheit zu fördern.",

    image: p6
  },
  {
    id: 7,
    title: "Gerstengras",
    description:
      "Entdecken Sie die vielen gesundheitlichen Vorteile von Gerstengras, einem natürlichen Superfood mit zahlreichen Nährstoffen.",

    image: p7
  },
  {
    id: 8,
    title: "Passionsblüte",
    description:
      "Beruhigen Sie Ihr Nervensystem und reduzieren Sie Stress mit unserer hochwertigen Passionsblüte.",

    image: p8
  },
  {
    id: 9,
    title: "Eisen",
    description:
      "Füllen Sie Ihren Eisenhaushalt auf und steigern Sie Ihre Energie und Ausdauer.",

    image: p9
  },
  {
    id: 10,
    title: "Zink",
    description:
      "Stärken Sie Ihr Immunsystem und fördern Sie die allgemeine Gesundheit mit unserem hochwertigen Zinkpräparat.",

    image: p10
  },
  {
    id: 11,
    title: "JodKomplex",
    description:
      "Unterstützen Sie eine gesunde Schilddrüsenfunktion mit unserem JodKomplex, der essentielle Mineralstoffe enthält.",

    image: p11
  },
  {
    id: 12,
    title: "BactillusSubtilis",
    description:
      "Verbessern Sie Ihre Darmgesundheit und fördern Sie eine ausgewogene Verdauung mit unseren hochwertigen Bakterienkulturen.",

    image: p12
  },
  {
    id: 13,
    title: "Flora-21Kulturen",
    description:
      "Unterstützen Sie Ihre Darmflora mit unserer Mischung aus 21 wertvollen Bakterienkulturen für eine optimale Verdauung.",

    image: p13
  },
  {
    id: 14,
    title: "ProbiotikaPlus",
    description:
      "Geben Sie Ihrer Darmgesundheit einen Schub mit unserer einzigartigen Kombination aus Probiotika und präbiotischen Ballaststoffen.",

    image: p14
  },
  {
    id: 15,
    title: "L-Arginin",
    description:
      "Steigern Sie Ihre sportliche Leistungsfähigkeit und fördern Sie die Durchblutung mit unserer hochwertigen Aminosäure L-Arginin.",

    image: p15
  },
  {
    id: 16,
    title: "L-Tyrosin",
    description:
      "Unterstützen Sie Ihre mentale Leistungsfähigkeit und verbessern Sie Ihre Stimmung mit unserer hochwertigen Aminosäure L-Tyrosin.",

    image: p16
  },
  {
    id: 17,
    title: "L-Tryptophan",
    description:
      "Fördern Sie einen gesunden Schlaf und verbessern Sie Ihre Stimmung mit unserer hochwertigen Aminosäure L-Tryptophan.",

    image: p17
  },
  {
    id: 18,
    title: "L-Lysin",
    description:
      "Unterstützen Sie die Proteinsynthese und fördern Sie eine gesunde Knochen- und Gewebestruktur mit unserer hochwertigen Aminosäure L-Lysin.",

    image: p18
  }
];

const Product = () => {
  const addToCart = (product) => {
    // Add your cart logic here
    console.log("Added to cart:", product.title);
  };

  return (
    <div className="container">
      <br></br>
      <h1> Alle Produkte </h1>
      <div className="product-list">
        {Data.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h2>{product.title}</h2>
            <p>{product.description}</p>

            <button
              className="add-to-cart-button"
              onClick={() => addToCart(product)}
            >
              Jetzt Kaufen
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
