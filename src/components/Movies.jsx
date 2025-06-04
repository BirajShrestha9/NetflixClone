import React, { useRef } from "react";
import  cards  from "../helpers/cards.js";
import './Movies.css'

function Movies ()  {

    const carouselRef = useRef(null);

    const scroll = (direction) => {
      const scrollAmount = 300; 
      if (carouselRef.current) {
        carouselRef.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    };
  

  return (
    <div>
      <div className="carousel-wrapper">
      <button className="carousel-btn left"  onClick={() => scroll("left")}>
  <img src="/prev.png" alt="Prev" />
</button>



      <div className="carousel" ref={carouselRef}>
        {cards.map((cards) => (
          <div key={cards.id} className="card">
            <img src={cards.image} alt={`Movie ${cards.id}`} />
          </div>
        ))}
      </div>

      <button className="carousel-btn right" onClick={() => scroll("right")}>
        <img src="/next.png" alt="Next" />
      </button>
    </div>
      
    </div>
  )}
export default Movies
