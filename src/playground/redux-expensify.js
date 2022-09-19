import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';







 


// Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
); 

store.subscribe(() => {
  const state = store.getState();
  const VisibleExpenses = getVisibleExpenses(state.expenses , state.filters)
  console.log(VisibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 500 , createdAt :-21000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 ,createdAt :-1000}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

 //store.dispatch(setTextFilter('rent')); // startDate 125
// store.dispatch(setStartDate()); // startDate undefined
// store.dispatch(setEndDate(1250)); // endDate 1250

const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};