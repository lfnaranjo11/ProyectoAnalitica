import React,{Component}  from 'react';
import './Component1.css';
import axios from "axios";


class Component1 extends Component{

    constructor(props){
        super(props);
        this.state ={ NOMBRES:[], 
          OTRO:[1,2,3,4], 
        cargado:false,
       url_Clicked: null,
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
        handleSubmit=(event) => {
        console.log("se activa el click");
        let url_Clicked1=event.target.value;
        console.log("la url clickeada es:",url_Clicked1);
          this.PROMESA_CB(url_Clicked1);
      }
      PROMESA_CB=(url_Clicked)=>{
        console.log("llega a la promesa a la promesa con url",url_Clicked);
        let promesa1 = axios.get(url_Clicked);
           let promesa2=promesa1.then((res) => {
            this.setState({myData:res.data});   
            console.log(res.data);
            this.props.DataFun(res.data);
        });
      }

      handleChange=(event)=>{

          event.preventDefault();


      }

    render(){
        return(
          <div>
            <h1> HOLA MMJC

            <button onClick={this.name}>Mostrar recientes</button>
            </h1>
            { this.state.cargado && 
            <ul>
              {this.state.NOMBRES.map(x =><li>{x.nombre}   <button onChange={this.handleChange} value={x.nombre} onClick={this.handleSubmit}>BUSCAR ESTE</button> </li>)} 
            </ul> 
            }
            <div ref={DivSelect => this.DivSelect=DivSelect}>
              
            </div>
        </div>
        )
    }   


}
export default Component1;