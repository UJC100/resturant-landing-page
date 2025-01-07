import React, { useState } from 'react'

import {cardData} from './data';


const Work = () => {
    

    const [currentIndex, setCurrentIndex] = useState(0)
    const [card, setCard] = useState(cardData)
     const handleNext = () => {
       setCurrentIndex((prevIndex) => (prevIndex + 1) % card.length);
     };

    //  React.useEffect(() => {
    //    const interval = setInterval(() => {
    //      handleNext();
    //    }, 5000);
    //    return () => clearInterval(interval);
    //  }, [card.length]);

    
    const mappedCardsArr = card.map((items, index) => {
        const isCenter = index === currentIndex
        const isLeft = index === (currentIndex - 1 + card.length) % card.length
      const isRight = index === (currentIndex + 1) % card.length
      
        return <div key={index}
            className={`card ${isCenter ? 'center' : isLeft ? 'left' : isRight ? 'right' : 'neitherLeftOrRight'}`}
            style={{
                transform: `translateX(${
                    isCenter ? '0%' : isLeft? '-120%' : isRight? '120%' : '0%'  
                })`
            }}
        >
            <div className='card-image-container'>
            <img src={items.image} alt={items.title}  className='card-image'/>
            </div>
            <h3 className='card-title'>{items.title}</h3>
            <p className='card-text'>{items.text }</p>
        </div> 
    })

  return (
    <div className="work-container">
      <h1 className="work-title">Work</h1>
      <div className="work-description">
        <h1 className="work-header">How It Works</h1>
        <p className="work-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="carousel-container">
            {mappedCardsArr}
            
      </div>
    </div>
  );
}

export default Work