import {
    GET_COVID
} from '../types'

export default (state, action) =>{
    switch(action.type){
       
               case GET_COVID:
                   console.log(action.payload, 'pay')
                   return{
                       ...state,
                       covidData: action.payload,
                       loading: false
                   }
               default:
                   return state;
       
           }
       
       
       }