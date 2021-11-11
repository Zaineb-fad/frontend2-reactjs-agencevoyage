import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import "./DevisTableRow.css";
export default class DevisTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteDevis = this.deleteDevis.bind(this);
    }

    deleteDevis() {
        axios.delete('http://localhost:4000/devis/delete-devis/' + this.props.obj._id)
            .then((res) => {
                console.log('Devis successfully deleted!')
                this.props.deleteDevis(this.props.obj._id)
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.telehpone}</td>
                                <td>{this.props.obj.ville}</td>
                                              

              
                <td>{this.props.obj.date}</td>
                               

                
                <td>{this.props.obj.destination}</td>
                <td>{this.props.obj.notes}</td>

                <td>
                <div id="conteneur">
                    <Link className="edit-link" to={"/edit-devis/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteDevis} size="sm" variant="danger">Delete</Button></div>

                </td>
            </tr>
        );
    }
}