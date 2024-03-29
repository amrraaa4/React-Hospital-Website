import React from 'react';
import doctor from '../../assets/doctor1.png';
import './possibility.css';

const Possibility = () => (
  <div className="possibility section__padding" id="possibility">
    <div className="possibility-image">
      <img src={doctor} alt="possibility" />
    </div>
    <div className="possibility-content">
      <h4>Excellent service is waiting for you!</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <h4>Try it and you won't regret it!</h4>
    </div>
  </div>
);

export default Possibility;