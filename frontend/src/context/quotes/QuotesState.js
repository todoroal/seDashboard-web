import React, { useContext, useEffect, Fragment, useReducer } from 'react'
import axios from 'axios';
import QuotesContext from './quotesContext';
import QuotesReducer from './quotesReducer';
import {
    GET_QUOTES
} from '../types'


const QuotesState = props => {
  const initialState = {
    news: [],
    loading: true
  };
  const [state, dispatch] = useReducer(QuotesReducer, initialState);



  const getNews = async () => {
    try {
      const res = await axios.get('/api/dashboard/arnieQuote');

      dispatch({
        type: GET_QUOTES,
        payload: res.data
      })

    } catch (err) {
      console.error(err.message, 'my err?');
      // res.status(500).send('Server Error');
    }
  }


  return (
    <QuotesContext.Provider value={{
      quotes: state.quotes,
      loading: state.loading,
      getNews
    }}>
      {props.children}

    </QuotesContext.Provider>
  )

}

export default NewsState;