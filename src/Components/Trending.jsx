import React, { useState } from "react";
import { trendingFoodData } from "./data";
import { FaStar } from "react-icons/fa";

const Trending = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [card, setCard] = useState(trendingFoodData);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % card.length);
    };
    const noOfStars = 5

    //  React.useEffect(() => {
    //    const interval = setInterval(() => {
    //      handleNext();
    //    }, 5000);
    //    return () => clearInterval(interval);
    //  }, [card.length]);

  const mappedCardsArr = card.map((items, index) => {
    const isCenter = index === currentIndex;
    const isLeft = index === (currentIndex - 1 + card.length) % card.length;
    const isLeft2 = index === (currentIndex - 2 + card.length) % card.length;
    const isRight = index === (currentIndex + 1) % card.length;
    const isRight2 = index === (currentIndex + 2) % card.length;

    return (
      <div
        key={index}
        className={`food-card ${
          isCenter
            ? "center-food"
            : isLeft
            ? "left-food"
            : isLeft2
            ? "left-food2"
            : isRight
            ? "right-food"
            : isRight2
            ? "right-food2"
            : "neitherLeftOrRight"
        }`}
        style={{
          transform: `translateX(${
            isCenter
              ? "0%"
              : isLeft
              ? "-90%"
              : isRight
              ? "90%"
              : isLeft2
              ? `${-90 * 1.9}%`
              : isRight2
              ? `${90 * 1.9}%`
              : "0%"
          }) scale(${isRight2 ? "0.8" : isLeft2 ? "0.8" : "1"})`,
        }}
      >
        <img src={items.image} alt={items.foodName} className="food-image" />
        <p className="price"> ₦{items.price.toString()}</p>
        <p className="food-name">{items.foodName}</p>
        <div className="food-rating">
          {[...Array(noOfStars)].map((_, index) => {
            index += 1;
            return (
              <FaStar
                key={index}
                className={
                  index <= items.rating ? "active-rating" : "inactive-rating"
                }
                size={25}
              />
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <div className="trending-container">
      <div className="trending-content">
        <h1 className="trending-header">Trending</h1>
        <h1 className="trending-title">Why Are They Trending</h1>
        <p className="trending-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="food-carousel-container">{mappedCardsArr}</div>
      <span className="circle-indicator">
        {card && card.length
          ? card.map((_, index) => {
              return (
                <button
                  key={index}
                  className={
                    currentIndex === index
                      ? "current-indicator"
                      : "current-indicator inactive-indicator"
                  }
                  onClick={() => setCurrentIndex(index)}
                ></button>
              );
            })
          : null}
      </span>
    </div>
  );
};

export default Trending;
