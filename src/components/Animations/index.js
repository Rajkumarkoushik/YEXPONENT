import {FaArrowRight} from "react-icons/fa"
import img1 from "../../assets/static-data-apis/block-05-progress-slider/media-files/industries.avif"
import img2 from "../../assets/static-data-apis/block-05-progress-slider/media-files/r&d.avif"
import img3 from "../../assets/static-data-apis/block-05-progress-slider/media-files/consulting.avif"
import img4 from "../../assets/static-data-apis/block-05-progress-slider/media-files/resources.avif"
import "./index.css"

import React, { useState } from 'react';
/*
function Animations() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="ani-container">
    <div className="row32">
        <div className="ani-card">
            <h1 className="ani-heading">Industries</h1>
            <p className="ani-para">Are you ready to make your business more organized? Download Spend.In now!</p>
            <div className={`hover-box ${isHovered ? 'hovered' : 'outer-circle'}`} 
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}> Explore
                <div className= 'inner-circle'>
    
                   <FaArrowRight />
                </div>
            </div>
        </div>
        <img src={industries} alt="img" className="img" />
    </div>
    <div className="row32">
        <div className="ani-card">
            <h1 className="ani-heading">Industries</h1>
            <p className="ani-para">Are you ready to make your business more organized? Download Spend.In now!</p>
            <div className={`hover-box ${isHovered ? 'hovered' : 'outer-circle'}`} 
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}> Explore
                <div className= 'inner-circle'>
    
                   <FaArrowRight />
                </div>
            </div>
        </div>
        <img src={img2} alt="img" className="img" />
    </div>
    <div className="row32">
        <div className="ani-card">
            <h1 className="ani-heading">Industries</h1>
            <p className="ani-para">Are you ready to make your business more organized? Download Spend.In now!</p>
            <div className={`hover-box ${isHovered ? 'hovered' : 'outer-circle'}`} 
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}> Explore
                <div className= 'inner-circle'>
    
                   <FaArrowRight />
                </div>
            </div>
        </div>
        <img src={img3} alt="img" className="img" />
    </div>
    <div className="row32">
        <div className="ani-card">
            <h1 className="ani-heading">Industries</h1>
            <p className="ani-para">Are you ready to make your business more organized? Download Spend.In now!</p>
            <div className={`hover-box ${isHovered ? 'hovered' : 'outer-circle'}`} 
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}> Explore
                <div className= 'inner-circle'>
    
                   <FaArrowRight />
                </div>
            </div>
        </div>
        <img src={img4} alt="img" className="img" />
    </div>
</div>
  );
}

export default Animations; */

const Animations = () => {
  const [selectedFilter, setSelectedFilter] = useState('Industries')
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredFilter, setHoveredFilter] = useState(null)
  const [isHoveredAnima, setIsHoveredAnima] = useState(false);

  const list = [
    {
      id: 1,
      heading: 'Industries',
      category: 'Industries',
      image:  img1,
      content:
        'Are you ready to make your business more organized? Download Spend.In',
    },
    {
      id: 2,
      heading: 'R & D',
      category: 'R & D',
      image: img2,
      content:
        'Are you ready to make your business more organized? Download Spend.In',
    },
    {
      id: 3,
      heading: 'Consulting',
      category: 'Consulting',
      image: img3,
      content:
        'Are you ready to make your business more organized? Download Spend.In',
    },
    {
      id: 4,
      heading: 'resources',
      category: 'resources',
      image: img4,
      content:
        'Are you ready to make your business more organized? Download Spend.In',
    },
  ]

  const filters = [
    'Industries',
    'R & D',
    'Consulting',
    'resources',
  ]

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleFilterHover = filter => {
    setHoveredFilter(filter)
    setSelectedFilter(filter)
  }

  const handleFilterLeave = () => {
    setHoveredFilter(null)
  }

  const handleMouseEnterAnima = () => {
    setIsHoveredAnima(true);
  };

  const handleMouseLeaveAnima = () => {
    setIsHoveredAnima(false);
  };



  const filteredData = selectedFilter
    ? list.filter(
        item => item.category === selectedFilter || selectedFilter === 'All',
      )
    : list

  return (
    <div className="ani-container">
      <div className="filters">
     <div className={`hover-div ${isHoveredAnima ? 'scroll2' : 'scroll'}`}
      onMouseEnter={handleMouseEnterAnima}
      onMouseLeave={handleMouseLeaveAnima} >
        {filters.map(filter => (
          <p
            key={filter}
            className={`filter-button ${
              selectedFilter === filter ? 'active' : ''
            } ${hoveredFilter === filter ? 'hovered4' : ''}`}
            onMouseEnter={() => handleFilterHover(filter)}
            onMouseLeave={handleFilterLeave}
          >
            {filter}
          </p>
        ))}
      </div>
      </div>
        <div className="row32">
          <div className="ani-card">
            {filteredData.map(item => (
              <div className="item" key={item.id}>
                <div className="col99">
                <h1 className="ani-heading">{item.heading}</h1>
                <p className="ani-para">{item.content}</p>
                <div
                  className={`hover-box ${
                    isHovered ? 'hovered' : 'outer-circle'
                  }`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Explore
                  <div  className={`hover-box ${
                    isHovered ? 'inner-circle2' : 'inner-circle'
                  }`}  >
                    <FaArrowRight />
                  </div>
                </div>
                </div>
                <img src={item.image} alt="img" className="img" />
              </div>
            ))}
          </div>
        </div>
      </div>  
  )
}

export default Animations



