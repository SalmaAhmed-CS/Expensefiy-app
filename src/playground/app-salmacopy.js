
class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state ={
            opptions: props.opptions

        }
    }
    handleDeleteOptions(){
      this.setState(() => ({opptions : []} ))
    }
  
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            opptions: prevState.opptions.filter((opp) => optionToRemove == opp)          }));
    }
    handlePick (){
       
        const randomNum = Math.floor(Math.random()* this.state.opptions.length);
        const option = this.state.opptions[randomNum]
        alert(option) 
        
    }
    handleAddOption (option){
        if (!option) {
            return 'Enter valid value to add item';
          } else if (this.state.opptions.indexOf(option) > -1) {
            return 'This option already exists';
          }
          this.setState((prevState)=> ({
            opptions: prevState.opptions.concat(option)

          }));
       
    }
    render(){
        const subtital = 'put your life in the hand of computer'
        return(
          <div>
            <Header  subtital= {subtital} />
            <Action hasOptions={this.state.opptions.length>0} 
            handlePick = {this.handlePick}
            />
            <Options
             Options = {this.state.opptions} 
             handleDeleteOptions ={this.handleDeleteOptions}
             handleDeleteOption = {this.handleDeleteOption}
            
            />
            <AddOption 
            handleAddOption = {this.handleAddOption}
            />

          </div>

        )
    }

}
IndecisionApp.defaultProps ={
    opptions: []
}

//the first lter most be upper case 

const Header = (props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
          {props.subtital &&  <h2> {props.subtital}</h2>}
        </div>
    )
}
Header.defaultProps ={
    title: 'indecision'
}
//statless function 
//بدال الكلاس اذا كان الكلاس بسيط جدا نقدر نبدله 
const Action = (props) =>{
    return(
        <div>
            <button onClick= {props.handlePick} 
            disabled={! props.hasOptions}
            >
                 what should i do ?
                 </button>
        </div>
    )

}
const Options = (props)=>{
    return(
        <div>
        <button onClick={props.handleDeleteOptions}>Remove all</button>
     {
        props.Options.map((opp)=>(
        <Option key= {opp}
         optiontext= {opp}
         handleDeleteOption={props.handleDeleteOption}
         />))
     } 
 
        </div>
    )

}
const Option = (props) =>{
    return(
        <div>
            {props.optiontext }
            <button onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
            >remove</button>
        </div>
    )
}
class AddOption extends React.Component{
     constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
          };
     }
     handleAddOption(e) {
        e.preventDefault();
    
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
    
        this.setState(() => ({error}));
        
      }
    render(){
        return(
        <div>
     {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.handleAddOption}>
        <input type="text" name='option'></input>
        <button >Add Option</button>

       </form>
         </div>
        )
    }
}
ReactDOM.render(<IndecisionApp />, document.getElementById('app'))