import Carousel from "../components/Carousel";
import Toast from 'react-bootstrap/Toast';
import { Link } from "react-router-dom";

export function BasicExample() {
  return (
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
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
       <h4>Clear guidance and well-researched assessments from an experienced construction professional.</h4>
        <p>Comprehensive technical understanding, dependable research and effective communication are part and parcel of a solid education, professional qualifications and a lifetime of experience in the construction trenches. 
       Take a closer look at what David Stewart and the Stewart Consulting team can do for you:
        </p>
       </div>

      <BasicExample/>

      </div>
    </div>
  );
}
