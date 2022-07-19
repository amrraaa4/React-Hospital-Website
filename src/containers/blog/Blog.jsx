import React from 'react';
import Article from '../../components/article/Article';
import { img1, img2, img3, img4, img5 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="blog section__padding" id="blog">
    <div className="blog-heading">
      <h1 className="gradient__text">Why choose Heart Beat?</h1>
    </div>
    <div className="blog-container">
      <div className="blog-container_groupA">
        <img src={img1} alt="img1" />
      </div>
      <div className="blog-container_groupB">
        <Article imgUrl={img2} title="Advanced, Modern, and Latest Medical Equipment" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Article imgUrl={img3} title="Specialized and Experienced Medical Staff" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Article imgUrl={img4} title="All Spaces Sanitized and Fully Equiped" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Article imgUrl={img5} title="Very Soon Recovery with Satisfaction" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      </div>
    </div>
  </div>
);

export default Blog;