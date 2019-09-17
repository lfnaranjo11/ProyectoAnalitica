import React,{Component}  from 'react';
import axios from "axios";



class Componente2 extends Component{

    constructor(props){
        super(props);
        this.state ={ NOMBRES:[],
            url: null
          };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);

    }
    componentDidMount(){
    
          
    }

     handleChange(event) {
        alert("A url was submitted: " + this.state.url);
        this.setState({ url: event.target.value });
     }

    handleSubmit(event) {
            event.preventDefault();
           this.setState({ url: event.target.value });
          let promesa1 = axios.get(this.state.url);
           promesa1.then((res) => {
            //{this.props.NAVIOData}=res;
            console.log(res);
           
              });




        
           promesa1.catch(() => alert("no se pudo comunicar con DATOS.GOV")); 
    }
          
        
        
    render(){
        return(
      <div>
        <h1> 
            componente 2
        </h1>
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="url" value={this.state.url} onChange={this.handleChange} />
            <input type="submit"  value="Guardar" />
        </form>
            
      
        </div>
        )
    }   


}
export default Componente2;