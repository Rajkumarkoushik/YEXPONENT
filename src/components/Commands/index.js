import {HiChevronDoubleDown} from "react-icons/hi"
import 'animate.css';
//import {commantImg} from "../../assets/static-data-apis/block-07-tweets/media-files/profile.avif"
import y from "../../assets/static-data-apis/header/media-files/nav/whyExponent/yexponent.png"
import React from 'react';

import "./index.css"

// import Slider from 'react-slick';

const Commants = ({ items }) => {
 /* const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust as needed
    slidesToShow: 3,
    slidesToScroll: 1,
  }; */
  
  return (<div className="commants-container">
  <h1 className="commants-heading">1.8 million+ businesses </h1>
  <h1 className="commants-heading">feel the magic</h1>
  <p className="animate__animated animate__fadeInUp animate__infinite"><HiChevronDoubleDown className="color" /></p>
  <div>
  {/* <marquee width="100%"
  height="200" direction="left">  */}
  <div className="mt-3">
  <div className="row15 card-line">
  <div className="commants-card">
            <div className="row mb-2">
            <img src={y} alt="" className="img555" />
               <div >
                <p className="paragraph">Amandine Flachs</p>
                <p className="paragraph">@AmandineFlachs</p>
               </div>
            </div>
            <h1 className="cmt-heading">I literally have my own product running off of Yexponent. I charge $100 per month and have several subscribers. It’s a great and powerful tool!</h1>
        </div>
        <div className="commants-card">
            <div className="row mb-2">
            <img src={y} alt="" className="img555" />
               <div >
                <p className="paragraph">Amandine Flachs</p>
                <p className="paragraph">@AmandineFlachs</p>
               </div>
            </div>
            <h1 className="cmt-heading">I literally have my own product running off of Yexponent. I charge $100 per month and have several subscribers. It’s a great and powerful tool!</h1>
        </div>
        <div className="commants-card">
            <div className="row mb-2">
            <img src={y} alt="" className="img555" />
               <div >
                <p className="paragraph">Amandine Flachs</p>
                <p className="paragraph">@AmandineFlachs</p>
               </div>
            </div>
            <h1 className="cmt-heading">I literally have my own product running off of Yexponent. I charge $100 per month and have several subscribers. It’s a great and powerful tool!</h1>
        </div>
        <div className="commants-card">
            <div className="row mb-2">
            <img src={y} alt="" className="img555" />
               <div >
                <p className="paragraph">Amandine Flachs</p>
                <p className="paragraph">@AmandineFlachs</p>
               </div>
            </div>
            <h1 className="cmt-heading">I literally have my own product running off of Yexponent. I charge $100 per month and have several subscribers. It’s a great and powerful tool!</h1>
        </div>
        <div className="commants-card">
            <div className="row mb-2">
            <img src={y} alt="" className="img555" />
               <div >
                <p className="paragraph">Amandine Flachs</p>
                <p className="paragraph">@AmandineFlachs</p>
               </div>
            </div>
            <h1 className="cmt-heading">I literally have my own product running off of Yexponent. I charge $100 per month and have several subscribers. It’s a great and powerful tool!</h1>
        </div>
        <div className="commants-card">
            <div className="row mb-2">
            <img src={y} alt="" className="img555" />
               <div >
                <p className="paragraph">Amandine Flachs</p>
                <p className="paragraph">@AmandineFlachs</p>
               </div>
            </div>
            <h1 className="cmt-heading">I literally have my own product running off of Yexponent. I charge $100 per month and have several subscribers. It’s a great and powerful tool!</h1>
        </div>
      </div>
     </div>
        {/* </marquee> */}
    </div>
        
        <div className="mt-3">
  <div className="row15 card-line">
  <div className="commants-card">
            <div className="row mb-2">
            <img src={y} alt="" className="img555" />
               <div >
                <p className="paragraph">Amandine Flachs</p>
                <p className="paragraph">@AmandineFlachs</p>
               </div>
            </div>
            <h1 className="cmt-heading">I literally have my own product running off of Yexponent. I charge $100 per month and have several subscribers. It’s a great and powerful tool!</h1>
        </div>
        <div className="commants-card">
            <div className="row mb-2">
            <img src={y} alt="" className="img555" />
               <div >
                <p className="paragraph">Amandine Flachs</p>
                <p className="paragraph">@AmandineFlachs</p>
               </div>
            </div>
            <h1 className="cmt-heading">I literally have my own product running off of Yexponent. I charge $100 per month and have several subscribers. It’s a great and powerful tool!</h1>
        </div>
        <div className="commants-card">
            <div className="row mb-2">
            <img src={y} alt="" className="img555" />
               <div >
                <p className="paragraph">Amandine Flachs</p>
                <p className="paragraph">@AmandineFlachs</p>
               </div>
            </div>
            <h1 className="cmt-heading">I literally have my own product running off of Yexponent. I charge $100 per month and have several subscribers. It’s a great and powerful tool!</h1>
        </div>
       </div>
     </div>
   </div>
  );
};

export default Commants;

/* import React, {useState, useEffect} from 'react'

function Commants() {
  const items = [
    <div className="row">
      <div className="commants-card">
        <div className="row">
          <p className="commant-image">Y</p>
          <div>
            <p className="paragraph">Amandine Flachs</p>
            <p className="paragraph">@AmandineFlachs</p>
          </div>
        </div>
        <h1 className="cmt-heading">
          I literally have my own product running off of Yexponent. I charge
          $100 per month and have several subscribers. It’s a great and powerful
          tool!
        </h1>
      </div>
      <div className="commants-card">
        <div className="row">
          <p className="commant-image">Y</p>
          <div>
            <p className="paragraph">Amandine Flachs</p>
            <p className="paragraph">@AmandineFlachs</p>
          </div>
        </div>
        <h1 className="cmt-heading">
          I literally have my own product running off of Yexponent. I charge
          $100 per month and have several subscribers. It’s a great and powerful
          tool!
        </h1>
      </div>
      <div className="commants-card">
        <div className="row">
          <p className="commant-image">Y</p>
          <div>
            <p className="paragraph">Amandine Flachs</p>
            <p className="paragraph">@AmandineFlachs</p>
          </div>
        </div>
        <h1 className="cmt-heading">
          I literally have my own product running off of Yexponent. I charge
          $100 per month and have several subscribers. It’s a great and powerful
          tool!
        </h1>
      </div>
    </div>,
    <div className="row">
      <div className="commants-card">
        <div className="row">
          <p className="commant-image">Y</p>
          <div>
            <p className="paragraph">Amandine Flachs</p>
            <p className="paragraph">@AmandineFlachs</p>
          </div>
        </div>
        <h1 className="cmt-heading">
          I literally have my own product running off of Yexponent. I charge
          $100 per month and have several subscribers. It’s a great and powerful
          tool!
        </h1>
      </div>
      <div className="commants-card">
        <div className="row">
          <p className="commant-image">Y</p>
          <div>
            <p className="paragraph">Amandine Flachs</p>
            <p className="paragraph">@AmandineFlachs</p>
          </div>
        </div>
        <h1 className="cmt-heading">
          I literally have my own product running off of Yexponent. I charge
          $100 per month and have several subscribers. It’s a great and powerful
          tool!
        </h1>
      </div>
      <div className="commants-card">
        <div className="row">
          <p className="commant-image">Y</p>
          <div>
            <p className="paragraph">Amandine Flachs</p>
            <p className="paragraph">@AmandineFlachs</p>
          </div>
        </div>
        <h1 className="cmt-heading">
          I literally have my own product running off of Yexponent. I charge
          $100 per month and have several subscribers. It’s a great and powerful
          tool!
        </h1>
      </div>
    </div>,
    <div className="row">
      <div className="commants-card">
        <div className="row">
          <p className="commant-image">Y</p>
          <div>
            <p className="paragraph">Amandine Flachs</p>
            <p className="paragraph">@AmandineFlachs</p>
          </div>
        </div>
        <h1 className="cmt-heading">
          I literally have my own product running off of Yexponent. I charge
          $100 per month and have several subscribers. It’s a great and powerful
          tool!
        </h1>
      </div>
      <div className="commants-card">
        <div className="row">
          <p className="commant-image">Y</p>
          <div>
            <p className="paragraph">Amandine Flachs</p>
            <p className="paragraph">@AmandineFlachs</p>
          </div>
        </div>
        <h1 className="cmt-heading">
          I literally have my own product running off of Yexponent. I charge
          $100 per month and have several subscribers. It’s a great and powerful
          tool!
        </h1>
      </div>
      <div className="commants-card">
        <div className="row">
          <p className="commant-image">Y</p>
          <div>
            <p className="paragraph">Amandine Flachs</p>
            <p className="paragraph">@AmandineFlachs</p>
          </div>
        </div>
        <h1 className="cmt-heading">
          I literally have my own product running off of Yexponent. I charge
          $100 per month and have several subscribers. It’s a great and powerful
          tool!
        </h1>
      </div>
    </div>,
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % items.length)
    }, 1000) // Change the duration (in milliseconds) as needed

    return () => clearInterval(interval)
  }, [items.length])

  return (
    <marguee>
      <div>{items[currentIndex]}</div>
    </marguee>
  )
} */


