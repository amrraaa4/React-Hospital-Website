import React from 'react';
import "./article.css"

const Article = ({ imgUrl, title, text }) => {
  return (
    <div className='blog-container_article'>
      <div className='blog-container_article-image'>
        <img src={imgUrl} alt="blog" />
      </div>
      <div className='blog-container_article-content'>
        <div>
          <h3>{title}</h3>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article