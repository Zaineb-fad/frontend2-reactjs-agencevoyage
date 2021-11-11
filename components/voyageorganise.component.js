import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image } from 'react-bootstrap';
import { Pagination,Carousel,ListGroup } from 'react-bootstrap';
import "./voyageorganise.component.css";
import Button from 'react-bootstrap/Button';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

 function Images() {
  return (
    
    <>
      <div id="conteneur">
        <Container>
          <Row>
          <Col  md={10}>
          <video width="500" height="300" controls>
  <source src="Promo May 2019_FULL_HD.mp4" type="video/mp4"/>
  <source src="Promo May 2019_FULL_HD.ogg" type="video/ogg"/>
  Your browser does not support the video tag.
</video>
 <p>Pays ouverts aux voyageurs tunisiens en 2021 : </p>
<p>Nous avons selectionné pour vous quelques destinations pour voyager en 2021</p>

<p>A l'Océan Indien :</p> 
<ul>
<li>Zanzibar : En savoir plus</li>

<li>Maldives  : En savoir plus</li>

<li>Seychelles : En savoir plus</li>

<li>Île Maurice : En savoir plus</li>

<li>Aux Caraïbes :
Mexique ( visa Schengen ou US ) : En savoir plus</li>

<li>République Dominicaine ( visa Schengen ou US ) : En savoir plus</li>

<li>Costa Rica  ( visa US ) : En savoir plus</li>

<li>Moyen orient :</li>
<li>Jordanie  : En savoir plus</li>

<li>Dubaï Experience  : En savoir plus</li>
</ul>

 

<p>Notice Covid-19 : Avant de voyager, Nous vous prions de vous informer  par vos propres soins des mesures sanitaires et conditions d'entrée et de séjour qui pourraient être prises par les autorités du pays de destination ou au retour en Tunisie.</p>
<div className="v1"><Link to="/create-devis"className="btn btn-dark">
         demander un Devis
        </Link>   </div>       
         


</Col>
           
   
</Row></Container>
<div className="e1">
   
      <Image src="./13.PNG" thumbnail />
    
      <Image src="./14.PNG" thumbnail />
  
   <ListGroup>
  <ListGroup.Item>Voyage organisé à Phuket en Thaïlande depuis la Tunisie</ListGroup.Item>
  <ListGroup.Item>Voyage organisé à Bali depuis la Tunisie en groupes et en privé</ListGroup.Item>
  <ListGroup.Item>Voyage organisé en Malaisie & Phuket en Thaïlande depuis la Tunisie</ListGroup.Item>
  <ListGroup.Item>Voyage de noces organisé aux Maldives depuis la Tunisie</ListGroup.Item>
  <ListGroup.Item>Voyage à Istanbul en Turquie depuis la Tunisie</ListGroup.Item>
    <ListGroup.Item>Voyage organisé aux Seychelles à Mahe depuis la Tunisie</ListGroup.Item>

</ListGroup>
   </div>
       </div>
    </>
 );
}

export default Images;