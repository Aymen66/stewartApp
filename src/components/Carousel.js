import Carousel from 'react-bootstrap/Carousel';
import Banner1 from "../image/banner-1.jpg"
import Banner2 from "../image/banner-2.jpg"
import Banner3 from "../image/banner-3.jpg"
import Banner4 from "../image/banner-4.jpg"
import Heading from "../components/Heading";
function CarouselFadeExample() {
  return (
    <Carousel fade controls={false}>

      <Carousel.Item>
        <img
          className="bannerImage"
          src={Banner1}
          alt="First slide"
        />



        <Carousel.Caption>
        <Heading/>

          {/* /<h3>Owner's Representation</h3> */}
          {/* <p>Owners get a good deal.</p> */}
          <p className='caption'>Keeping owners informed and in financial control of their projects</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div>
        <img
          className="bannerImage"
          src={Banner2}
          alt="Second slide"
        />

</div>
        <Carousel.Caption>

        <Heading/>
          {/* <h3>Second slide label</h3> */}
          <p className='caption'>Managing projects for quality workmanship and timely completion.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="bannerImage"
          src={Banner3}
          alt="Third slide"
        />

<Carousel.Caption>
<Heading/>
          {/* <h3>Second slide label</h3> */}
          <p className='caption'>Settling cases quickly and equitably with factual information.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="bannerImage"
          src={Banner4}
          alt="Third slide"
        />

        <Carousel.Caption>
        <Heading/>
          {/* <h3>Third slide label</h3> */}
          <p className='caption'>
          Helping lawyers build firm cases and stick to the construction facts.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
