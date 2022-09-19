import{createStore} from 'redux';
//ACTION genrators - function retun action object 

const incrementCount = ({incrementBy = 1} ={}) => ({
    type:'INCREMENT',
    incrementBy 
})

const decrementCount = ({decrementBy = 1} ={}) => ({
    type:'DECREMENT',
    decrementBy 
})

const restCount = () => ({
    type:'REST',
  
})

const setCount = ({set = 0} ={}) => ({
    type:'SET',
    set 
})

// reduser 
// reduser is a pure function
// naver change state or action

const countReducer = (state= {count:0} ,action) =>{
    switch (action.type) {
  
        case 'INCREMENT':
            return{
                count: state.count+ action.incrementBy
             }
        case 'DECREMENT':

            return{
                count: state.count- action.decrementBy
             }
        case 'REST':
            return{
                count:0
                 }
        case 'SET':
            return{
                count: action.set
                
            }
        default:
            return state
            break;
    }
    
}


const store = createStore(countReducer);
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());

});



store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy :5}));
//unsubscribe();

 store.dispatch(decrementCount());
 store.dispatch(decrementCount({decrementBy :10}));

 store.dispatch(restCount());
 store.dispatch(setCount());
 store.dispatch(setCount({set:5}));
