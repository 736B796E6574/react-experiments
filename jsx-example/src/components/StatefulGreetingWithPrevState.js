import React from "react";

class StatefulGreetingWithPrevState extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            introduction : "Hello!",
            buttonText: "Exit",
            count: 0,
        }
    }




handleClick(){
    this.setState((prevState, prevProps) => { 
        return{
        introduction : prevState.introduction === "Bye!" ? "Hello!" : "Bye!",
        buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
        }
})}

increment(){
    this.setState((prevState, PrevProps) => {

        console.log(prevState.count)
     return   {count : prevState.count+1}
    }, () => {
    })}

    render(){return <div>
        <h1>{this.state.introduction} {this.props.name}</h1>
        <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
        <button onClick={() => this.increment()}>{this.state.count}</button>
        </div>
};};


export default StatefulGreetingWithPrevState; 