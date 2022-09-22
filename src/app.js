// import validator from 'validator';
import React from "react";
import{Provider} from 'react-redux'
import  ReactDOM  from "react-dom";
import './styles/styles.css'
// import 'normalize.css/normalize.css';
// import 'react-dates/lib/css/_datepicker.css';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filiters'
import  getVisibleExpenses from './selectors/expenses.js'

const store = configureStore();

  
const jsx = (
    <Provider store = {store}>
         
        <AppRouter/>
    </Provider>
)    

ReactDOM.render( jsx, document.getElementById('app'));

