import React,{Component}  from 'react';
import './Component1.css';
import axios from "axios";


class Component1 extends Component{

    constructor(props){
        super(props);
        this.state ={ NOMBRES:[], 
          OTRO:[1,2,3,4], 
        cargado:false,
       };
    }



    componentDidMount(){
   
        }
        name= ()=>{
          
          let promesa = axios.get("/basicCRUD",{
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          });
          promesa.then(res => {
            let data=res.data;
            let nombres=[];

          //  console.log( data.map( entrada=>{entrada.nombre}));

            this.setState({NOMBRES:data,
                            cargado: true
                                        });
        console.log(this.state.NOMBRES); 
     
        });
          promesa.catch((err)=> console.log("pailas. serividor desconectado",err));
        }

    render(){
        return(
          <div>
        <h1> HOLA MMJC

          <button onClick={this.name}>click me</button>
        </h1>
       { this.state.cargado && 
        <ul>
                    {this.state.NOMBRES.map(x =><li>{x.nombre}</li>)}
       </ul> 
      }
        </div>
        
        )
    }   


}
export default Component1;