import React,{Component}  from 'react';
import axios from "axios";
import { runInThisContext } from 'vm';
class ComponenteBono extends Component{

    constructor(props){
        super(props);
        this.state ={ NOMBRES:[],
            url: null,
            url_uncontrolled: null,
            myData: [],
            currentData:[],
            machete:[]
          };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
        this.PROMESA_CB =this.PROMESA_CB.bind(this);
        this.PROMESA_RECURSIVE =this.PROMESA_RECURSIVE.bind(this);

    }
    handleChange(event) {
        this.setState({ url: event.target.value });
       this.setState({url_uncontrolled: event.target.value});
       event.preventDefault();
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ url: event.target.value });
        this.PROMESA_RECURSIVE();
       // this.SAVEQUERRYS();
    }

    SAVEQUERRYS=()=>{
        let fila={};
        fila.nombre= this.state.url_uncontrolled;
        let promesa1 = axios.post("/basicCRUD", fila);
        promesa1.then((res) => {
            setTimeout(()=>{},1000);
         console.log(res.data);
         });    
        promesa1.catch(() => alert("no se pudo comunicar con el back")); 
    }


     async PROMESA_CB(new_url) {
         const url=new_url;
        console.log(await axios.get(url));
        //promesa1.then((res)=>{console.log(res.data)});
        //promesa1.catch(() =>console.log("error cacheado"));
       // console.log(promesa1);
        
      
    }


    async PROMESA_RECURSIVE(){
        let offSet=0;
        let limit= 200;
        let new_url=`${this.state.url_uncontrolled}?$limit=${limit}&$offset=${offSet}`;
        let continua=true;
        console.log(new_url);
        while(continua)
        {   
        new_url=`${this.state.url_uncontrolled}?$limit=${limit}&$offset=${offSet}`;
        offSet+= 200;
        //setTimeout( () => {this.PROMESA_CB(new_url)}, 1000);
        this.PROMESA_CB(new_url);
        console.log("hola");
        continua =offSet> 50000?false:true;
        }
    }

    render(){
        return(
      <div>
        <h1> 
            COMPONENTE BONO
        </h1>
        <p>Busque aqui todos los datos</p>
       
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="url" value={this.state.url} onChange={this.handleChange} />
            <input type="submit"  value="Guardar" />
        </form>
      </div>
        );
    }   



}

export default ComponenteBono;