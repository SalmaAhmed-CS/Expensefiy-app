// import validator from 'validator';
import React from "react";
import{Provider} from 'react-redux'
import  ReactDOM  from "react-dom";
import './styles/styles.css'
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filiters'
import  getVisibleExpenses from './selectors/expenses.js'

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));


    const state = store.getState();
    const VisibleExpenses = getVisibleExpenses(state.expenses , state.filters)
    console.log(VisibleExpenses);
  
const jsx = (
    <Provider store = {store}>
         
        <AppRouter/>
    </Provider>
)    

ReactDOM.render( jsx, document.getElementById('app'));

