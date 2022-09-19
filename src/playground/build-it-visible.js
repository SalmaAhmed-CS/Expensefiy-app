class Visibility  extends React.Component{
    constructor(props){
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);

        this.state = {
            visibility : false,
           
        }


    }
    toggleVisibility (){
        this.setState((prevesState) =>{
           return {
            visibility :  ! prevesState.visibility 
           }
        });
        
       }

       render(){
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.toggleVisibility}>
              {this.state.visibility ? 'Hide details' : 'Show details'}
            </button>
            {this.state.visibility && (
              <div>
                <p>Hey. These are some details you can now see!</p>
              </div>
            )}
          </div>
        )
       }
}

ReactDOM.render(< Visibility />,document.getElementById('app'));






//حله 
// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details you can now see!</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();

// حلي

// console.log(' app is running');

// const app = {
//     titel: 'Visiblity Toggle',
//     ditail : 'there is some ditals',

//  }
// const appRoot = document.getElementById('app')

// const ShowDetils = ()=> {
    
//     reander();
   
// }
// const hideDetils = ()=>{
//      <p> </p>
//      ReactDOM.render(temp,appRoot);
    
// }


// const temp = (
// <div>
//     <h1>{app.titel}</h1>
//     <button onClick={ShowDetils}>Show detilis</button>
// </div>

// )

// const reander = ()=>{
//     const temp = (
//         <div>
//             <h1>{app.titel}</h1>
//             <p>{app.ditail}</p>
//             <button onClick={hideDetils}>hid detilis</button>
//         </div>
        
//         ) 
//     ReactDOM.render(temp,appRoot);

// }
// ReactDOM.render(temp,appRoot);
