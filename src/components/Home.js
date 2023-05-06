import Carousel from "../components/Carousel";
import Toast from 'react-bootstrap/Toast';
import { Link } from "react-router-dom";
import Representation from "../image/representation.jpg"

export function BasicExample() {
  return (
    <Toast>
      <Toast.Header>
        <strong className="me-auto">New to constuction?</strong>
        <small ><Link to="/contact">Give me an overview</Link></small>
      </Toast.Header>
      <Toast.Body>Here’s a brief overview to get you started. People and processes vary depending on the project, of course, but it helps to know the basics.</Toast.Body>
    </Toast>
  );
}

export default function Home() {
  return (
    <div className="main">
      
      <h1><Carousel/></h1>
      <div className="homeMainSection">
       <div>
       <h4 >Clear guidance and well-researched assessments from an experienced construction professional.</h4>
        <p>Comprehensive technical understanding, dependable research and effective communication are part and parcel of a solid education, professional qualifications and a lifetime of experience in the construction trenches.
        </p>
       </div>

      <BasicExample/>

      </div>
      <div className="cardsMain">
        <h5 >Take a closer look at what David Stewart and the Stewart Consulting team can do for you:</h5>
        <div className="cards">
        <div className="cardOne">
          <img className="Card-image" src={Representation}/>
          <h4 className="cards-title">Owner's Representation</h4>
          <ul>
            <li>Design optimization</li>
            <li>Contract advice</li>
            <li>Project monitoring</li>
          </ul>
        <h5 className="overview"><Link to="/contact">Give me an overview</Link></h5>


        </div>
        <div className="cardOne">
        <img className="Card-image" src={Representation}/>
          <h4 className="cards-title">Project Management</h4>
          <ul>
            <li>Expert coordination</li>
            <li>Technical advice</li>
            <li>Time and cost control</li>
          </ul>
        <h5 className="overview"><Link to="/contact">Give me an overview</Link></h5>

        </div>
        <div className="cardOne">
        <img className="Card-image" src={Representation}/>
          <h4 className="cards-title">Mediation</h4>
          <ul>
            <li>Technical expertise</li>
            <li>Merit-based resolution</li>
            <li>Qualified mediator</li>
          </ul>
        <h5 className="overview"><Link to="/contact">Give me an overview</Link></h5>

        </div>
        <div className="cardOne">
        <img className="Card-image" src={Representation}/>
          <h4 className="cards-title">Troubled Construction</h4>
          <ul>
            <li>Expert opinions</li>
            <li>Clear settlement advice</li>
            <li>Courtroom experience</li>
          </ul>
        <h5 className="overview" ><Link to="/contact">Give me an overview</Link></h5>

        </div>
        </div>

      </div>
    </div>
  );
}
