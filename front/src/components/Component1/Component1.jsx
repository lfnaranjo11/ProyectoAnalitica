import React,{Component}  from 'react';
import './Component1.css';
import axios from "axios";


class Component1 extends Component{

    constructor(props){
        super(props);
        this.state ={ NOMBRES:[] };
    }


    componentDidMount(){
        let promesa = axios.get("http://localhost:3001/basicCRUD/",{
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          });
          promesa.then(res => {
             this.setState({NOMBRES:res.data});
          });
          promesa.catch(()=> console.log("pailas. serividor desconectado"));
          
        }


    render(){
        return(
        <h1> HOLA MAJo
        </h1>
        
        )
    }   


}
export default Component1;