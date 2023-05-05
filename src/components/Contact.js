
import ContatImg from "../image/contactIMG.jpg"
export default function Contact() {
    return(
      <div className="contact">
         <h1>About Stewart Consulting</h1>
         <div className="contactDetail">
         <img className="ContatImg" alt="Contat photo" src={ContatImg} />
        <p>Operating mainly in the greater Seattle and Portland areas of Washington and Oregon, Stewart Consulting LLC has been providing expert advice in the construction industry since 1996. Civil engineer David Stewart began the company with little more than a notebook computer, offering construction consulting to contractors, owners, insurance companies and attorneys. Since then, Stewart Consulting has developed an impressive clientele including over 50 clients in Seattle, Portland, Las Vegas and Auckland. 
        Stewart Consulting aims to stay small and mobile, providing excellent support and advice to clients. David Stewart is the primary consultant, but he frequently utilises a consulting staff of seasoned construction professionals who can draw on tremendous resources when required.  Have a look at Meet the Team for more details.</p>
       </div>
      </div>
    )
    }
    