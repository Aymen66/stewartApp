import CheckIcon from "../image/checkIcon.png";
export default function Heading() {
  return (
    <div className="heading-items">
      <div className="item">
        <img src={CheckIcon} className="CheckIcon"></img>
        <div className="itemCaption">
          <h4>Owner's Representation</h4>
          <p>Owners get a good deal</p>
        </div>
      </div>
      <div className="item">
        <img src={CheckIcon} className="CheckIcon"></img>
        <div className="itemCaption">
        <h4>Project Management</h4>
        <p>Projects managed successfully</p>
        </div>
      </div>
      <div className="item">
        <img src={CheckIcon} className="CheckIcon"></img>
        <div className="itemCaption">
          <h4>Mediation</h4>
          <p>Workable & fair settlements</p>
        </div>
      </div>
      <div className="item">
        <img src={CheckIcon} className="CheckIcon"></img>
        <div className="itemCaption">
          <h4>Troubled Construction</h4>
          <p>Sound evidence for solid cases</p>
        </div>
      </div>
    </div>
  );
}
