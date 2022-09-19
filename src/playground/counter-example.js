class Counter  extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count:0
           
        }


    }
    componentDidMount() {
        try {
          const stringCount = localStorage.getItem('count');
          const count = parseInt(stringCount,10);
    
          if (!isNaN(count)) {
            this.setState(() =>  ({ count }));
          }
        } catch (e) {
          // Do nothing at all
        }
      }
      componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
          localStorage.setItem('count', this.state.count);
        }
      }
    handleAddOne (){
     this.setState((prevesState) =>{
        return {
            count : prevesState.count+1
        }
     });
     
    }
    handleMinusOne (){
        this.setState((prevesState) =>{
            return {
                count : prevesState.count-1
            }
         }); 
    }
    handleReset (){
        this.setState(() =>{
            return {
                count : 0
            }
         }); 
    }
    render(){
     return (
        <div>
            <h1>Count : {this.state.count} </h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>reset</button>
        </div>
     )
    }
   
}

// Counter.defaultProps = {
//     count :0
// }
ReactDOM.render(<Counter />,document.getElementById('app'));

//  //count app 
//  let count =0;
//  const addOne =()=>{
//     count++;
//      renderCountApp();
//  }
//  const minusOne =()=>{
//      count--;
//     renderCountApp();
//  }

//  const reset =()=>{
//    count=0;
//    renderCountApp();
// }

// const templateTow =(
// <div>
// <h1>Count : {count}</h1>
// <button onClick={addOne}>+1</button>
// <button onClick={minusOne}>-1</button>
// <button onClick={reset}>reset</button>
// </div>
// );


// //console.log(templateTow)
// const renderCountApp = ()=>{
//     const templateTow =(
//         <div>
//         <h1>Count : {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>reset</button>
//         </div>
//         );
//     ReactDOM.render(templateTow,appRoot);

// };
// //ReactDOM.render(template,appRoot);
// renderCountApp();