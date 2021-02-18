import React, { Component } from 'react';
 
class Form extends Component {
  state = { 
   
   wishes: ''
  }
  
  handleFormSubmit = (event) =>{
      event.preventDefault();
      

  }

handleChange = (event)=>{
this.setState({...this.state, [event.target.name]: event.value})

}
// Falta añadir algo mas  pero no veo que para que funcione, esta todo a medias...

  render(){
    return (
        <div>
          <form onSubmit={this.handleFormSubmit}>
            

            {/* value={this.state.wishes} ?? funciona sin este...*/ }
   
            <label>Lista de Deseos:</label>
            <input type="text" name="wish"  onChange={(event)=>this.handleChange(event)} value={this.state.wishes}/>
   
            
            <button type = 'submit'>Submit</button>
          </form>
        </div>
      )
    }
  }

  export default Form;