import React from 'react' ;
import Header from '../components/header';
import Grid from '../components/grid';

export default class Home extends React.Component {
render(){
    let myVar = "name"
    return (
        <div>
             <Header title="Hipster"></Header>
             <Grid data={["one" , "two" , "three"]}/>
        </div>
    )
}
}