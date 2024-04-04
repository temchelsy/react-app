import React, { useState, useEffect } from 'react';

const CarouselComponent = () => {
    const [carouselData, setCarouselData] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
            .then(response => response.json())
            .then(data => setCarouselData(data.meals));
    }, []);

    return (
        <div className="carousel">
            {carouselData.map(item => (
                <div key={item.idMeal} className="carousel-item">
                    <img src={item.strMealThumb} alt={item.strMeal} />
                    <h3>{item.strMeal}</h3>
                    <p>{item.strInstructions}</p>
                </div>
            ))}
        </div>
    );
};

export default CarouselComponent;