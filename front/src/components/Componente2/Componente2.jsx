import React,{Component}  from 'react';
import axios from "axios";
import NavioComponent from '../../NavioComponent/NavioComponent';



class Componente2 extends Component{

    constructor(props){
        super(props);
        this.state ={ NOMBRES:[],
            url: null,
            url_uncontrolled: null,
            myData: [],
          };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);

    }
    componentDidMount(){
    
          
    }

     handleChange(event) {

        this.setState({ url: event.target.value });
        this.setState({url_uncontrolled: event.target.value});
        event.preventDefault();

     }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ url: event.target.value });
        this.PROMESA_CB();
        this.SAVEQUERRYS();
    }

    SAVEQUERRYS=()=>{
        
        let fila={};
        fila.nombre= this.state.url_uncontrolled;
        console.log("la url que quiero guardar es",this.state.url)
        let promesa1 = axios.post("/basicCRUD", fila);
        promesa1.then((res) => {
         console.log(res.data);
         });
          
        promesa1.catch(() => alert("no se pudo comunicar con el back")); 


    }

    PROMESA_CB=()=>{
        let promesa1 = axios.get(this.state.url);
           let promesa2=promesa1.then((res) => {
            this.setState({myData:res.data});   
            console.log(res.data);
            this.props.DataFun(res.data);
            
           // promesa2.then(()=>{SAVEQUERRYS});
        });
             

           promesa1.catch(() => alert("no se pudo comunicar con DATOS.GOV")); 

    }
          
        
        
    render(){
        return(
      <div>
        <h1> 
            COMPONENTE 2
        </h1>
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="url" value={this.state.url} onChange={this.handleChange} />
            <input type="submit"  value="Guardar" />
        </form>
        <div>
        </div>
      
        </div>
        )
    }   


}
export default Componente2;