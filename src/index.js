import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const initialState ={
  balance : 0,
  totalIncome:0,
  totalExpense:0, 
   dummyTransactions : [
    { text: "Flower", amount: "+20000" },
    { text: "Salary", amount: "-20000" },
    { text: "Book", amount: "+20000" },
    { text: "Camera", amount: "+20000" },
    { text: "Laptop", amount: "-20000" },
  ]
  
}

   const balanceReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'BALANCE': 
        return {...state, balance : action.payload}
      case 'ADD': 
        return {...state, dummyTransactions:[...state.dummyTransactions, action.payload]}
      case 'REMOVE': 
        return {...state, dummyTransactions: action.payload}
      case 'INCOME': 
        return {...state, totalIncome: action.payload}
      case 'EXPENSE': 
        return {...state, totalExpense: action.payload}
  
      default:
        return state
    }
    
  }

  const store = createStore(balanceReducer);
  

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
