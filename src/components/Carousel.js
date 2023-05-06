// import Carousel from 'react-bootstrap/Carousel';
import Banner1 from "../image/banner-1.jpg"
import Banner2 from "../image/banner-2.jpg"
import Banner3 from "../image/banner-3.jpg"
import Banner4 from "../image/banner-4.jpg"
// import Contact from "../components/Contact";
import { Link } from "react-router-dom";

// import React from "react";
// import CheckIcon from "../image/checkIcon.png";

// export function Representation(){
//   return(
//     <a  href="Slide 1">
//       <div className="item">
//         <img src={CheckIcon} className="CheckIcon"></img>
//         <div className="itemCaption">
//           <h4>Owner's Representation</h4>
//           <p>Owners get a good deal</p>
//         </div>
//       </div>
//     </a>
    
    
    
//   )
// }
// export function Mediation(){
//   return(
//     <Link  to="Slide 2">
//       <div  className="item">
//         <img src={CheckIcon} className="CheckIcon"></img>
//         <div className="itemCaption">
//         <h4>Project Management</h4>
//         <p>Projects managed successfully</p>
//         </div>
//       </div>
//     </Link>

    
//   )
// }

// export function Management(){
//   return(
//     <a  href="Slide 3">
//       <div className="item">
//         <img src={CheckIcon} className="CheckIcon"></img>
//         <div className="itemCaption">
//           <h4>Mediation</h4>
//           <p>Workable & fair settlements</p>
//         </div>
//       </div>
//     </a>
    
//   )
// }


// export function Construction(){
//   return(
//     <a  href="Slide 4">
//       <div className="item">
//         <img src={CheckIcon} className="CheckIcon"></img>
//         <div className="itemCaption">
//           <h4>Troubled Construction</h4>
//           <p>Sound evidence for solid cases</p>
//         </div>
//       </div>
//     </a>
    
//   )
// }
// function CarouselFadeExample() {
// function representationHandle(){

// }

//   return (
//     <Carousel  fade controls={false}>

//       <Carousel.Item id='Representative'>

//         <img
//           className="bannerImage"
//           src={Banner1}
//           alt="First slide"
//         />
        
        
        


//         <Carousel.Caption>
//         <div  className="heading-items">
//         <h1 className="item-display">
//         <Representation onClick={representationHandle} />
//         </h1>
//         <h1 className="item-display">
//         <Mediation/>
//         </h1>
//         <h1 className="item-display">
//         <Management/>
//         </h1>
//         <h1 className="item-display">
//         <Construction/>
//         </h1>
//       </div>

          
//           <p  className='caption'>Keeping owners informed and in financial control of their projects</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <div>
//         <img
//           className="bannerImage"
//           src={Banner2}
//           alt="Second slide"
//         />


// </div>
//         <Carousel.Caption>

//         <div className="heading-items">
//         <h1 className="item-display">
//         <Representation/>
//         </h1>
//         <h1 className="item-display">
//         <Mediation/>
//         </h1>
//         <h1 className="item-display">
//         <Management/>
//         </h1>
//         <h1 className="item-display">
//         <Construction/>
//         </h1>
//       </div>
//           <p className='caption'>Managing projects for quality workmanship and timely completion.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="bannerImage"
//           src={Banner3}
//           alt="Third slide"
//         />

// <Carousel.Caption>
// <div className="heading-items">
//         <h1 className="item-display">
//         <Representation/>
//         </h1>
//         <h1 className="item-display">
//         <Mediation/>
//         </h1>
//         <h1 className="item-display">
//         <Management/>
//         </h1>
//         <h1 className="item-display">
//         <Construction/>
//         </h1>
//       </div>
//           <p className='caption'>Settling cases quickly and equitably with factual information.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="bannerImage"
//           src={Banner4}
//           alt="Third slide"
//         />

//         <Carousel.Caption>
//         <div className="heading-items">
//         <h1 className="item-display">
//         <Representation/>
//         </h1>
//         <h1 className="item-display">
//         <Mediation/>
//         </h1>
//         <h1 className="item-display">
//         <Management/>
//         </h1>
//         <h1 className="item-display">
//         <Construction/>
//         </h1>
//       </div>

       
//           <p className='caption'>
//           Helping lawyers build firm cases and stick to the construction facts.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default CarouselFadeExample;


// import React, { useState } from 'react';
// import { Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap';
// import CheckIcon from "../image/checkIcon.png";

// export function Representation(){
//   return(
//     <a  href="Slide 1">
//       <div className="item">
//         <img src={CheckIcon} className="CheckIcon"></img>
//         <div className="itemCaption">
//           <h4>Owner's Representation</h4>
//           <p>Owners get a good deal</p>
//         </div>
//       </div>
//     </a>
    
    
    
//   )
// }
// const CarouselFadeExample = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setActiveIndex(selectedIndex);
//   };

//   const slides = [
//     {
//       id: 1,
//       title: 'Slide 1',
//       caption: <Representation/>,
//       image: "https://picsum.photos/800/400?text=Slide%203",
//     },
//     {
//       id: 2,
//       title: 'Slide 2',
//       caption: <Representation/>,
//       image: "https://picsum.photos/800/400?text=Slide%203",
//     },
//     {
//       id: 3,
//       title: 'Slide 3',
//       caption: <Representation/>,
//       image: 'https://picsum.photos/800/400?text=Slide%203',
//     },
//   ];

//   return (
//     <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
//       {slides.map((slide, index) => (
//         <CarouselItem key={index}>
//           <img
//             className='d-block w-100'
//             src={slide.image}
//             alt={slide.title}
//             onClick={() => handleSelect(index)}
//           />
          
//             <Carousel.Caption>
//             <h3>{slide.title}</h3>
//             <p>{slide.caption}</p>

//             </Carousel.Caption>
//         </CarouselItem>
//       ))}
      
//     </Carousel>
//   );
// };

// export default CarouselFadeExample;
// import { Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap';
import CheckIcon from "../image/checkIcon.png";
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export function Representation(){
  const [isShown, setIsShown] = React.useState(true)

  function toggleShown(){
    setIsShown(prevShown => !prevShown)
}
  return(
    <div>
     { window.innerWidth > 900?<div>
      <div  className="item">
        <img src={CheckIcon} className="CheckIcon"></img>
        <div className="itemCaption">
          <h4>Owner's Representation</h4>
          <p>Owners get a good deal</p>
        </div>
      </div>
      </div>:
      <div onClick={toggleShown}>
       { isShown?<div className="item">
        <img src={CheckIcon} className="CheckIcon"></img>
        <div className="itemCaption">
          <h4>Owner's Representation</h4>
          <p>Owners get a good deal</p>
        </div>
      </div>: <div  className="itemFlip">
        <div className="itemCaptionFlip">
          <p>Keeping owners informed and in financial control of their projects.</p>
          <Link to="/Representation" >Read more</Link>

        </div>
      </div>}
    </div>}
    </div>
  
  )
}
export function Management(){
  const [isShown, setIsShown] = React.useState(true)

  function toggleShown(){
    setIsShown(prevShown => !prevShown)
}
  return(
    <div>
      { window.innerWidth > 900?<div>
      <div  className="item">
        <img src={CheckIcon} className="CheckIcon"></img>
        <div className="itemCaption">
          <h4>Project Management</h4>
          <p>Projects managed successfully</p>
        </div>
      </div>
      </div>:
       <div onClick={toggleShown}>
       {isShown?<div  className="item">
        <img src={CheckIcon} className="CheckIcon"></img>
        <div className="itemCaption">
        <h4>Project Management</h4>
        <p>Projects managed successfully</p>
        </div>
      </div>:<div  className="itemFlip">
        <div className="itemCaptionFlip">
          <p>Managing projects for quality workmanship and timely completion.</p>
          <Link >Read more</Link>

        </div>
      </div>}
    </div>}
    </div>
   

     

    
  )
}

export function  Mediation(){
  const [isShown, setIsShown] = React.useState(true)

  function toggleShown(){
    setIsShown(prevShown => !prevShown)
}
  return(
    <div>
      { window.innerWidth > 900?<div>
      <div  className="item">
        <img src={CheckIcon} className="CheckIcon"></img>
        <div className="itemCaption">
          <h4>Mediation</h4>
          <p>Workable & fair settlements</p>
        </div>
      </div>
      </div>:
       <div onClick={toggleShown}>
      {isShown?<div className="item">
        <img src={CheckIcon} className="CheckIcon"></img>
        <div className="itemCaption">
          <h4>Mediation</h4>
          <p>Workable & fair settlements</p>
        </div>
      </div>:<div  className="itemFlip">
        <div className="itemCaptionFlip">
          <p>Settling cases quickly and equitably with factual information.</p>
          <Link >Read more</Link>

        </div>
      </div>}
    </div>}
    </div>

   
      
    
  )
}


export function Construction(){
  const [isShown, setIsShown] = React.useState(true)

  function toggleShown(){
    setIsShown(prevShown => !prevShown)
}
  return(
    <div>
      { window.innerWidth > 900?<div>
      <div  className="item">
        <img src={CheckIcon} className="CheckIcon"></img>
        <div className="itemCaption">
          <h4>Troubled Construction</h4>
          <p>Sound evidence for solid cases</p>
        </div>
      </div>
      </div>:
    <div onClick={toggleShown}>

{isShown?<div className="item">
    <img src={CheckIcon} className="CheckIcon"></img>
    <div className="itemCaption">
      <h4>Troubled Construction</h4>
      <p>Sound evidence for solid cases</p>
    </div>
  </div>:<div  className="itemFlip">
    <div className="itemCaptionFlip">
      <p>Helping lawyers build firm cases and stick to the construction facts.</p>
      <Link >Read more</Link>

    </div>
  </div>}
</div>}

    </div>

    
  )
}
const CarouselFadeExample = () => {
  const [index, setIndex] = useState(0);
  
 
 
  

  const slides = [
    { image: Banner1, title: <Representation/> ,caption: <h4 className="caption">Keeping owners informed and in financial control of their projects. <Link to="/Representation" >Read more</Link></h4>},
    { image: Banner2, title: <Mediation/> , caption:<h4 className="caption">Managing projects for quality workmanship and timely completion.</h4> },
    { image: Banner3, title: <Management/>, caption: <h4 className="caption">Settling cases quickly and equitably with factual information.</h4>},
    { image: Banner4, title: <Construction/>, caption: <h4 className="caption">Helping lawyers build firm cases and stick to the construction facts.</h4>},

  ];
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  function Heading() {
    return (
        
        <div  className="heading  justify-content-center mt-2">
    {slides.map((slide, i,) => (
      <button
        key={i}
        
        className={`mx-2 ${index === i && 'active'}`}
        onClick={() => setIndex(i)}
      >
       {slide.title}

      </button>
    ))}
  </div>
        
        
    );
  }
  
  return (
  
      <Carousel   interval={6000} activeIndex={index} controls={false} onSelect={handleSelect}>
  {slides.map((slide, i) => (
    <Carousel.Item key={i}>
      <img className="bannerImage" src={slide.image} alt={slide.caption} />
      <Carousel.Caption>
        <Heading/>

        {slide.caption}

      </Carousel.Caption>
      
    </Carousel.Item>
    


    
  ))}
  
</Carousel>
  


  );
};

export default CarouselFadeExample;