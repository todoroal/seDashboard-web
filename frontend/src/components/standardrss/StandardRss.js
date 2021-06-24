import React, { Fragment, useEffect, useContext } from 'react';
import NewsContext from '../../context/news/newsContext';

const StandardRss = () => {
  const newsUpdate = useContext(NewsContext); 
  const {getNews, news} = newsUpdate;

      useEffect(()=>{
        getNews();
        // eslint-disable-next-line
    },[]); 

 return (
    <Fragment>
      <div className="container-dash-rss">
        <h2>derStandard Newsroom</h2>
        <div className="image-wrapper">
        <ul className="ul-newsroom-scroolbar">
        {news.map(item =>{
          return(
            <li className="li-newsroom-text">
            <a href={`${item.link}`}>{item.title}</a>  
            <img className="li-newsroom-img" src={`${item.thumbnail}`}  alt="derStandard" width="100%" height="100%"/>
            </li>
            )            
        })}
        </ul>          
        </div>       
      </div>
    </Fragment>

)
};

export default StandardRss;