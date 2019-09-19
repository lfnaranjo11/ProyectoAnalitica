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
            list:[],
            resultados:[]
          };
       
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);

    }
    componentDidMount(){
        let offset=0;
        let lista=[];
        for(offset=0;offset<10000;offset+=400){
            lista= [...lista, offset];
        }
        this.setState({list:lista});
    }
    handleChange(event) {
        this.setState({ url: event.target.value });
       this.setState({url_uncontrolled: event.target.value});
       event.preventDefault();
    }

   async handleSubmit(event) {
        event.preventDefault();
        this.setState({ url: event.target.value });
        let newDatos=[];
         this.hacerPromises(newDatos);
    //setTimeout(this.setState({myData:[2,3]}),8000))
       //this.hacerArreglo();
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

    onAddItem = () => {

        let value=3;
        const lista= [...this.state.list, value];
        this.setState({list:lista});
    }
     
    async hacerPromises(newDatos){

    let P =  new  Promise(async()=>{
    
        const base_url=this.state.url_uncontrolled;
        const limit=400;
         let newDatosA=[];

        const results=Promise.all( 
                this.state.list.map(async item=>{
                    return await axios.get(`${base_url}?$limit=${limit}&$offset=${item}`);
                  })
               
            ).then( function(response){

               
               response.map(async x =>{ 
                  x.data.map((j)=>{
                    newDatosA=[...newDatosA,j]
               });
             
               })
             console.log(newDatosA);
            });
            return await newDatosA;
        });
        P.then((x)=>{this.setState({myData:x})})
    
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