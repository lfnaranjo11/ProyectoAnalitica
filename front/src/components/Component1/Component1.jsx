import React,{Component}  from 'react';
import './Component1.css';
import axios from "axios";


class Component1 extends Component{

    constructor(props){
        super(props);
        this.state ={ NOMBRES:[] };
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
            this.setState({NOMBRES:res});
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
        <ul>
          const listItems = NOMBRES.map((number) =>
          <li key={number.toString()}>
          {number}
          </li>
        </ul>
        </div>
        
        )
    }   


}
export default Component1;