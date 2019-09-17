import React from 'react';
import navio from 'navio';
import Componente2 from '../components/Componente2/Componente2';

class NavioComponent extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            myDiv : null,
            myData :[]
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
    myDataFun=(datos) =>{
        this.setState({myData:datos});
    }
       

    render(){
        return(
            <div>
                <div ref={myDiv => this.myDiv=myDiv}>
              
              </div>
              <Componente2 DataFun={this.myDataFun} ></Componente2>  
            </div>
                


        )
    }

}

export default NavioComponent;