import React from 'react';
import Feature from '../../components/feature/Feature';
import './rating.css';

const Rating = () => (
  <div className="rating section__margin" id="wgpt3">
    <div className="rating-feature">
      <Feature title="Team Lead -- Elena Yilmaz's Message to the world" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
    </div>
    <div className="rating-heading">
      <h1 className="gradient__text">We garentee you outstanding services!</h1>
      <p>Ratings we recieve on a daily basis:</p>
    </div>
    <div className="rating-container">
      <Feature title="Simon Parker" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Mariam Ahmad" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="Glinda Huggens" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
  </div>
);

export default Rating;