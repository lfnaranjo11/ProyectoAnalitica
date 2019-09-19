import React from 'react';
import navio from 'navio';
import Componente2 from '../components/Componente2/Componente2';
import Componente1 from '../components/Component1/Component1';
import ComponenteBono from '../components/ComponenteBono/ComponenteBono';
class NavioComponent extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            myDiv : null,
            myData :[],
            nv:null,
        };
        this.myUpdate=this.myUpdate.bind(this);
    }
    componentDidMount(){

        this.myUpdate();

    }
    myUpdate(){
       this.state.nv= new navio(this.myDiv,600);
    }

    componentDidUpdate(){

    }
    navioFuncion(){
    }
    myDataFun=(datos) =>{
        this.setState({myData:datos});
       this.state.nv.data(this.state.myData);
        this.state.nv.addAllAttribs();
    }
       
   

    render(){
        return(
            <div>
                <div ref={myDiv => this.myDiv=myDiv}>
              
              </div>
              <ComponenteBono DataFun={this.myDataFun}></ComponenteBono>
              <Componente2 DataFun={this.myDataFun} ></Componente2> 
              <Componente1 DataFun={this.myDataFun}></Componente1> 
            </div>
                


        )
    }

}

export default NavioComponent;