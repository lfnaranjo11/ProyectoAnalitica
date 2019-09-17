import React from 'react';
import navio from 'navio';

class NavioComponent extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            myDiv : null
        };
        this.myUpdate=this.myUpdate.bind(this);
    }
    componentDidMount(){

        this.myUpdate();

    }
    myUpdate(){
        new navio(this.myDiv,600);
    }
    componentDidUpdate(){

    }
    navioFuncion(){
    }
       

    render(){
        return(
            <div ref={myDiv => this.myDiv=myDiv}>

            </div>

        )
    }

}

export default NavioComponent;