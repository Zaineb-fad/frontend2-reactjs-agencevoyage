import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import DevisTableRow from './DevisTableRow';


export default class DevisList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      devis: []
    };
  }

  componentDidMount() {
    console.log("list")
    axios.get('http://localhost:4000/devis/')
      .then(res => {
        console.log(res)
        this.setState({
          devis: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      }) 
  }
DataTable(deleteDev) {
    return this.state.devis.map((res, i) => {
      return <DevisTableRow deleteDevis={deleteDev} obj={res} key={i} />;
    });
  }


deleteDevis=(data)=>{
    this.setState(function(state){
      return state.devis.filter((devis)=>devis._id!=data)
    })
  }

  
  

  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
                        <th>Telephone</th>
            <th>Ville</th>
           
            <th>Date</th>
            
            <th>Destination</th>
            <th>Notes</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable(this.deleteDevis)}
        </tbody>
      </Table>
    </div>);
  }
}