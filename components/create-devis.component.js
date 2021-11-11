import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import "./create-devis.component.css";
import FormCheck from 'react-bootstrap/FormCheck'
export default class CreateDevis extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeDevisName = this.onChangeDevisName.bind(this);
    this.onChangeDevisEmail = this.onChangeDevisEmail.bind(this);
    this.onChangeDevisTelephone = this.onChangeDevisTelephone.bind(this);
    this.onChangeDevisVille = this.onChangeDevisVille.bind(this);
        

    this.onChangeDevisDate = this.onChangeDevisDate.bind(this);
        
    this.onChangeDevisDestination = this.onChangeDevisDestination.bind(this);
   

    this.onChangeDevisNotes = this.onChangeDevisNotes.bind(this);
     this.onChangeRadio1=this.onChangeRadio1.bind(this);
    this.onChangeRadio2=this.onChangeRadio2.bind(this);
    this.onChangeRadio3=this.onChangeRadio3.bind(this);
    this.onChangeRadio4=this.onChangeRadio4.bind(this);
    this.onChangeRadio5=this.onChangeRadio5.bind(this);
    this.onChangeRadio6=this.onChangeRadio6.bind(this);
    this.onChangeRadio7=this.onChangeRadio7.bind(this);
    this.onChangeRadio8=this.onChangeRadio8.bind(this);
    this.onChangeRadio9=this.onChangeRadio9.bind(this);
    this.onChangeRadio10=this.onChangeRadio10.bind(this);
    this.onChangeRadio11=this.onChangeRadio11.bind(this);
    this.onChangeRadio12=this.onChangeRadio12.bind(this);
    this.onChangeRadio13=this.onChangeRadio13.bind(this);
    this.onChangeRadio14=this.onChangeRadio14.bind(this);
    this.onChangeRadio15=this.onChangeRadio15.bind(this);
    this.onChangeRadio16=this.onChangeRadio16.bind(this);
    this.onChangeRadio17=this.onChangeRadio17.bind(this);
    this.onChangeRadio18=this.onChangeRadio18.bind(this);
    this.onChangeRadio19=this.onChangeRadio19.bind(this);
    this.onChangeRadio20=this.onChangeRadio20.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
        name: '',
      email: '',
      telehpone: '',
        ville: '',
      type: '',
       

      date: '',
       

      destination: '',
      notes: '',
       radio1:'', 
        radio2:'', 
        radio3:'', 
        radio4:'', 
        radio5:'', 
        radio6:'', 
        radio7:'', 
        radio8:'', 
        radio9:'', 
        radio10:'', 
        radio11:'', 
        radio12:'', 
        radio13:'', 
        radio14:'', 
        radio15:'', 
        radio16:'', 
        radio17:'', 
        radio18:'', 
        radio19:'', 
        radio20:''
    }
  }

  
  onChangeDevisName(e) {
    this.setState({ name: e.target.value })
  }


  onChangeDevisEmail(e) {
    this.setState({ email: e.target.value })
  }
  onChangeDevisTelephone(e) {
    this.setState({ telephone: e.target.value })
  }
  onChangeDevisVille(e) {
    this.setState({ ville: e.target.value })
  }
  
  

  

  onChangeDevisDate(e) {
    this.setState({ date: e.target.value })
  }
  

  onChangeDevisDestination(e) {
    this.setState({ destination: e.target.value })
  }

  onChangeDevisNotes(e) {
    this.setState({ notes: e.target.value })
  }
  onChangeRadio1(e){
      this.setState({radio1:e.target.value})
    }
onChangeRadio2(e){
      this.setState({radio2:e.target.value})
    }
onChangeRadio3(e){
      this.setState({radio3:e.target.value})
    }
onChangeRadio4(e){
      this.setState({radio4:e.target.value})
    }
onChangeRadio5(e){
      this.setState({radio5:e.target.value})
    }
onChangeRadio6(e){
      this.setState({radio6:e.target.value})
    }
onChangeRadio7(e){
      this.setState({radio7:e.target.value})
    }
onChangeRadio8(e){
      this.setState({radio8:e.target.value})
    }
onChangeRadio9(e){
      this.setState({radio9:e.target.value})
    }
onChangeRadio10(e){
      this.setState({radio10:e.target.value})
    }
onChangeRadio11(e){
      this.setState({radio11:e.target.value})
    }
onChangeRadio12(e){
      this.setState({radio12:e.target.value})
    }
onChangeRadio13(e){
      this.setState({radio13:e.target.value})
    }
onChangeRadio14(e){
      this.setState({radio14:e.target.value})
    }
onChangeRadio15(e){
      this.setState({radio15:e.target.value})
    }
onChangeRadio16(e){
      this.setState({radio16:e.target.value})
    }
onChangeRadio17(e){
      this.setState({radio17:e.target.value})
    }
onChangeRadio18(e){
      this.setState({radio18:e.target.value})
    }
onChangeRadio19(e){
      this.setState({radio19:e.target.value})
    }
onChangeRadio20(e){
      this.setState({radio20:e.target.value})
    }

  onSubmit(e) {
    e.preventDefault()

    const devisObject = {
      name: this.state.name,
      email: this.state.email,
            telehpone: this.state.telephone,
      ville: this.state.ville,
           

     
      date: this.state.date,
           

     
      destination: this.state.destination,
      notes: this.state.notes,
       radio1:this.state.radio1,
             radio2:this.state.radio2,
             radio3:this.state.radio3,
             radio4:this.state.radio4,
             radio5:this.state.radio5,
             radio6:this.state.radio6,
             radio7:this.state.radio7,
             radio8:this.state.radio8,
             radio9:this.state.radio9,
             radio10:this.state.radio10,
             radio11:this.state.radio11,
             radio12:this.state.radio12,
             radio13:this.state.radio13,
             radio14:this.state.radio14,
             radio15:this.state.radio15,
             radio16:this.state.radio16,
             radio17:this.state.radio17,
             radio18:this.state.radio18,
             radio19:this.state.radio19,
             radio20:this.state.radio20


    };

    axios.post('http://localhost:4000/devis/create-devis', devisObject)
      .then(res => console.log(res.data));

    this.setState({
       name: '',
      email: '',
      telehpone: '',
        ville: '',
      type: '',
         

      date: '',
             


      destination: '',
      notes: '',
      radio1:this.state.radio1,
             radio2:this.state.radio2,
             radio3:this.state.radio3,
             radio4:this.state.radio4,
             radio5:this.state.radio5,
             radio6:this.state.radio6,
             radio7:this.state.radio7,
             radio8:this.state.radio8,
             radio9:this.state.radio9,
             radio10:this.state.radio10,
             radio11:this.state.radio11,
             radio12:this.state.radio12,
             radio13:this.state.radio13,
             radio14:this.state.radio14,
             radio15:this.state.radio15,
             radio16:this.state.radio16,
             radio17:this.state.radio17,
             radio18:this.state.radio18,
             radio19:this.state.radio19,
             radio20:this.state.radio20
    });
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
      
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeDevisName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeDevisEmail} />
        </Form.Group>
         <Form.Group controlId="Telephone">
          <Form.Label>Telephone</Form.Label>
          <Form.Control type="tel" value={this.state.telephone} onChange={this.onChangeDevisTelephone} />
        </Form.Group>
         <Form.Group controlId="ville">
          <Form.Label>La Residence ville</Form.Label>
          <Form.Control type="text" value={this.state.ville} onChange={this.onChangeDevisVille} />
        </Form.Group>
        <strong>Type de voyage</strong>
        
         <Form.Group controlId="Date">
          <Form.Label>Date du depart</Form.Label>
          <Form.Control type="number" value={this.state.date} onChange={this.onChangeDevisDate} />
        </Form.Group>
        
         <Form.Group controlId="destination">
          <Form.Label>Autre(s) destination(s) ou combinés de plusieurs destinations :
</Form.Label>
          <Form.Control type="text" value={this.state.destination} onChange={this.onChangeDevisDestination} />
        </Form.Group>
         <Form.Group controlId="Notes">
          <Form.Label>Notes</Form.Label>
          <Form.Control type="textarea" value={this.state.notes} onChange={this.onChangeDevisNotes} />
        </Form.Group><h6>vous distination</h6>
        <div id="conteneur">
       <div className="r">
<FormCheck>
          <FormCheck.Input isInvalid type="radio" value="bali" onChange={this.onChangeRadio1} />
          <FormCheck.Label >Bali</FormCheck.Label>
         
      </FormCheck>
      <FormCheck>
          <FormCheck.Input isInvalid type="radio" value="turque" onChange={this.onChangeRadio2} />
          <FormCheck.Label>Turque</FormCheck.Label>
          
      </FormCheck>
      <FormCheck>
          <FormCheck.Input isInvalid type="radio" value="noces" onChange={this.onChangeRadio3} />
          <FormCheck.Label>Noces</FormCheck.Label>
         
      </FormCheck>
      <FormCheck>
          <FormCheck.Input isInvalid type="radio" value="seychelles" onChange={this.onChangeRadio4} />
          <FormCheck.Label>Seychelles</FormCheck.Label>
          
      </FormCheck>
      <FormCheck>
          <FormCheck.Input isInvalid type="radio" value="zanzibar" onChange={this.onChangeRadio5} />
          <FormCheck.Label>Zanzibar</FormCheck.Label>
         
      </FormCheck></div>
             <div className="r">
              
      <FormCheck>
          <FormCheck.Input isInvalid type="radio" value="cambodge" onChange={this.onChangeRadio6} />
          <FormCheck.Label>Cambodge</FormCheck.Label>
          
      </FormCheck>
      <FormCheck>
          <FormCheck.Input isInvalid type="radio" value="singapor" onChange={this.onChangeRadio7} />
          <FormCheck.Label>Singapor</FormCheck.Label>
         
      </FormCheck>
      <FormCheck>
          <FormCheck.Input isInvalid type="radio" value="thailande" onChange={this.onChangeRadio8} />
          <FormCheck.Label>Thailande</FormCheck.Label>
          
      </FormCheck>
      <FormCheck>
          <FormCheck.Input isInvalid type="radio" value="maldives" onChange={this.onChangeRadio9} />
          <FormCheck.Label>Maldives</FormCheck.Label>
         
      </FormCheck>
      <FormCheck>
          <FormCheck.Input isInvalid type="radio" value="inde" onChange={this.onChangeRadio10} />
          <FormCheck.Label>Inde</FormCheck.Label>
          
      </FormCheck></div>
             <div className="r">

      <FormCheck>
          <FormCheck.Input isInvalid type="radio" value="vietnam" onChange={this.onChangeRadio11} />
          <FormCheck.Label>Vietnam</FormCheck.Label>
         
      </FormCheck>
      <FormCheck>
          <FormCheck.Input isInvalid type="radio" value="dubai" onChange={this.onChangeRadio12} />
          <FormCheck.Label>Dubai</FormCheck.Label>
          
      </FormCheck>
      <FormCheck>
          <FormCheck.Input isInvalid type="radio" value="mexique" onChange={this.onChangeRadio13} />
          <FormCheck.Label>Mexique</FormCheck.Label>
         
      </FormCheck>
      <FormCheck>
          <FormCheck.Input isInvalid type="radio" value="greques" onChange={this.onChangeRadio14} />
          <FormCheck.Label>Greques</FormCheck.Label>
          
      </FormCheck>
      <FormCheck>
          <FormCheck.Input isInvalid type="radio" value="azur" onChange={this.onChangeRadio15} />
          <FormCheck.Label>Azur</FormCheck.Label>
         
      </FormCheck></div>
             <div className="r">

      <FormCheck>
          <FormCheck.Input isInvalid type="radio" value="malaisie" onChange={this.onChangeRadio16} />
          <FormCheck.Label>Malaisie</FormCheck.Label>
          
      </FormCheck>
      <FormCheck>
          <FormCheck.Input isInvalid type="radio" value="maurrisse" onChange={this.onChangeRadio17} />
          <FormCheck.Label>Maurrisse</FormCheck.Label>
         
      </FormCheck>
      <FormCheck>
          <FormCheck.Input isInvalid type="radio" value="lanka" onChange={this.onChangeRadio18} />
          <FormCheck.Label>Lanka</FormCheck.Label>
          
      </FormCheck>
      <FormCheck>
          <FormCheck.Input isInvalid type="radio" value="japon" onChange={this.onChangeRadio19} />
          <FormCheck.Label>Japon</FormCheck.Label>
         
      </FormCheck>
      <FormCheck>
          <FormCheck.Input isInvalid type="radio" value="cuba" onChange={this.onChangeRadio20} />
          <FormCheck.Label>cuba</FormCheck.Label>
          
      </FormCheck> </div></div>
    
        <Button variant="danger" size="lg" block="block" type="submit">
          Creer un Devis
        </Button>

      </Form>
    </div>);
  }
}
