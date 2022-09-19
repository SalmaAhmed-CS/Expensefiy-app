console.log(' app is running');

 const APP = {
    titel: 'Indecision App',
    subtital:'put your life hands of a computer',
    opption:[ ]

 }

 const onFormsubit =(e)=>{
    e.preventDefault();

    const option =e.target.elements.option.value ;

    if(option){
        APP.opption.push(option)
        e.target.elements.option.value ='';
        renderlistapp();

    }
 };
 const Remove_All = () => {
    APP.opption =[];
    renderlistapp();

 };
 const omMakeDecision = ()=>{
   const randomNum = Math.floor(Math.random()* APP.opption.length);
   const option = APP.opption[randomNum]
   alert(option)



 };
 


//JSX javascript xml
const template = (
    <div>
     <h1>{APP.titel ? APP.titel : 'put your life hands of a computer'}  </h1>
     <p>{APP.subtital}</p>
     <p>{APP.opption.length>0 ? "your task  is : ": 'No task'}</p>
     <p>{APP.opption.length}</p>
     <button onClick={Remove_All}>Remove All</button>
     <ol>
        <li>
            Item one
        </li>
        <li>
            Item tow
        </li>
     </ol>
    <form onSubmit={onFormsubit}>
        <input type="text" name='option'></input>
        <button>Add Option</button>

    </form>
    </div>

);
const appRoot = document.getElementById('app')
const renderlistapp = ()=>{
const template = (
    <div>
     <h1>{APP.titel ? APP.titel : 'put your life hands of a computer'}  </h1>
     <p>{APP.subtital}</p>
     <p>{APP.opption.length>0 ? "your task  is : ": 'No task'}</p>
     <button onClick={Remove_All} >Remove All</button>
     <button disabled ={APP.opption.length ===0}onClick = {omMakeDecision}>What shold i do ?</button>

     <ol>
       { 
        APP.opption.map((opp)=>{
            return <li key= {opp}>{opp}</li>
        })
       }
     </ol>
    <form onSubmit={onFormsubit}>
        <input type="text" name='option'></input>
        <button>Add Option</button>

    </form>
    </div>

);
ReactDOM.render(template,appRoot);

}
renderlistapp();

