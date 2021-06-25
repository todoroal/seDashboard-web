import React, { Fragment, useEffect, useContext, useState } from 'react';
import NewsContext from '../../context/news/newsContext';
import { v4 as uuidv4 } from 'uuid';
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";


const StandardRss = () => {
  const newsUpdate = useContext(NewsContext);
  const { getNews, news, loading } = newsUpdate;

  let [color, setColor] = useState("#ffffff");
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;


  useEffect(() => {
    getNews();
    console.log(loading, 'loading after get news')
    // eslint-disable-next-line

  }, []);

  return (
    <Fragment>
      <div className="container-dash-rss">
        {loading ? (
          <div className="spinner-placement">
            <BeatLoader color={color} loading={loading} css={override} size={20}></BeatLoader>
          </div>
        ) : (

          <ul className="ul-newsroom-scroolbar">

          </ul>
        )}


      </div>
    </Fragment>

  )
};

export default StandardRss;