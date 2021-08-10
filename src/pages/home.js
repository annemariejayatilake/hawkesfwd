import React from 'react' ;
import Header from '../components/header';
import Grid from '../components/grid';
import Button from '../components/button';  
import Image from '../components/image';        

export default class Home extends React.Component {
render(){
    let myVar = "name"
    return (
        <div>
            <Image />
             <Header title="Hipster"></Header>
             <Grid data={["one" , "two" , "three"]}/>
        </div>
    )
}
}