import React from 'react'
import aboutPageBanner from '../Assets/about-background.png'
import aboutPageImage from '../Assets/about-background-image.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
  return (
    <div className="about-section">
      <h1 className="page-title">About</h1>
      <div className="about-section-content">
        <div className="about-background-banner">
          <img src={aboutPageBanner} alt="" />
        </div>
        <div className="about-page-image">
          <img src={aboutPageImage} alt="about page image" />
        </div>
        <div className="about-page-description">
          <h1>Food Is An Important Part Of A Balanced Diet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <p>
            Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
            facilisis at fringilla quam.
          </p>
          <div className='about-buttons'>
            <button className='learn-more-button'>Learn More</button>
                      <button className='watch-video-button'>
                          <BsFillPlayCircleFill size={'35px'}/>
                          Watch Video</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About