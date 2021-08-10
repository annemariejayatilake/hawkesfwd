import React from 'react' ;

export default class Button extends React.Component {
    constructor(props){
        super(props);

        this.state= {
            title: "hi anne-marie"
        }
    }
        onClick(){
            this.setState({ title:  this.state.title === "hi anne-marie" ? "bye anne-marie" : "hi anne-marie"})
        }
    
        render(){
            return (
                <button onClick={() => { this.onClick() } }>{this.state.title}</button>
            )
        }
}