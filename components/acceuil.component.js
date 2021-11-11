import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card ,Image } from 'react-bootstrap';
import { Pagination,Carousel } from 'react-bootstrap';
import Seychelles from "./Seychelles.component";
import Maldives from "./Maldives.component";
import Mexique from "./Mexique.component";
import Zanzabir from "./Zanzabir.component";
import Bali from "./Bali.component";
import Jordani from "./Jordani.component";
import Bordrum from "./Bordrum.component";
import Grece from "./Grece.component";
import "./acceuil.component.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


// core components

function Images() {
  return (
    <>
      <div className="t1">
      <Container>
          <Row>
      <video width="900" height="500" controls>
  <source src="Promo May 2019_FULL_HD.mp4" type="video/mp4"/>
  <source src="Promo May 2019_FULL_HD.ogg" type="video/ogg"/>
  Your browser does not support the video tag.
</video>
        
        <h1 align="center"> ROUKA TRAVEL LE SPÉCIALISTE DU VOYAGE ORGANISÉ EXOTIQUE</h1>
<p align="center">ROUKA est une agence de voyage spécialisée dans les destinations tropicales et exotiques depuis 2013. Notre création de valeur est apportée par notre connaissance de ces destinations. Nous partageons avec nos voyageurs des conseils pour une expérience de voyage unique et authentique.

Notre sélection de voyages au départ de la Tunisie
Découvrez notre sélection de destinations exotiques et escapades soigneusement conçues par nos experts</p>
            <Col md="3">
                        
                      

                <Card style={{ width: '20rem' }}>
                 <Card.Img variant="top" src="./1.PNG" />
                  <Card.Body>
                    <Card.Text>
                    
                    <ul>
                      <li><Link to="/Seychelles">Seychelles </Link></li>
                      <li><Link to="/Maldives">Maldives</Link></li>
                    </ul>
                    
  

    </Card.Text>
  </Card.Body>
</Card></Col>
            <Col md="3">
            
                        

<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="./2.PNG" />
  <Card.Body>
    <Card.Text>
<ul>
                      <li><Link to="/Mexique">Mexique</Link></li>
                      <li><Link to="/Zanzabir">Zanzabir</Link></li>
                    </ul>
    </Card.Text>
  </Card.Body>
</Card></Col><Col md="3">
            
                       

<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="./3.PNG" />
  <Card.Body>
    <Card.Text>
<ul>
                      <li><Link to="/Bali">Bali</Link></li>
                      <li><Link to="/Jordani">Jordani</Link></li>
                    </ul>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
 <Col md="3">
            
                       

<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="./4.PNG" />
  <Card.Body>
    <Card.Text>
<ul>
                      <li><Link to="/Bordrum">Bordrum</Link></li>
                      <li><Link to="/Grece">Grece</Link></li>
                    </ul>


    </Card.Text>
  </Card.Body>
</Card>


            </Col>
          <h2 align="center">  Faites de votre voyage de noces un moment inoubliable</h2>
<p align="center">Votre voyage de noces doit être un moment magique et mémorable quelque soit la destination que vous allez choisir. ROUKA vous propose une sélection de destinations paradisiaques pour une lune de miel de rêve.</p>
<Image src="./5.PNG" fluid />
<Col md="4">
                        
                      

                <Card style={{ width: '20rem' }}>
                 <Card.Img variant="top" src="./6.PNG" />
                  <Card.Body>
                    <Card.Text>
                    
                <p>  Nous offrons des expériences authentiques en petits groupes grâce à nos Tour Leaders qui proposent des voyages inédits.
</p><div className="d1"><Link to="">En savoir plus</Link></div>
                    
  

    </Card.Text>
  </Card.Body>
</Card></Col>
            <Col md="4">
            
                        

<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="./7.PNG" />
  <Card.Body>
    <Card.Text>
<p>Nous adoptons une approche qui encourage le tourisme responsable  envers les populations locales.</p>
<div className="d1"><Link to="">En savoir plus</Link></div>
    </Card.Text>
  </Card.Body>
</Card></Col><Col md="4">
            
                       

<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="./8.PNG" />
  <Card.Body>
    <Card.Text>
<p>Rouka s’engage à un tourisme écologique et responsable en plantant, en Tunisie, 1 arbre pour chaque voyage effectué.</p>
<div className="d1"><Link to="">En savoir plus</Link></div>
    </Card.Text>
  </Card.Body>
</Card>
</Col></Row></Container>
<h1 align="center">EXPÉRIENCES DE VOYAGES AVEC ROUKA
</h1>
<Container>
          <Row>
 <Col md="4">
                        
                      

                <Card style={{ width: '20rem' }}>
                 <Card.Img variant="top" src="./10.PNG" />
                  <Card.Body>
                    <Card.Text>
              <p>   Vous êtes à la recherche d’une destination festive pour danser jusqu’à l’aube et passer un séjour mémorable ? </p>
<div className="d1"><Link to="">LIRE LA SUITE...</Link></div>

  

    </Card.Text>
  </Card.Body>
</Card></Col>
            <Col md="4">
            
                        

<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="./11.PNG" />
  <Card.Body>
    <Card.Text>
<p>Un voyage de noces n’est pas un voyage comme les autres, il doit être inoubliable et assez unique. C’est souvent le voyage d’une vie, la destination où vous n’irez certainement qu’une fois.
                   </p><div className="d1" >   <Link to="">LIRE LA SUITE...</Link></div>

    </Card.Text>
  </Card.Body>
</Card></Col><Col md="4">
            
                       

<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="./12.PNG" />
  <Card.Body>
    <Card.Text>
<p>Un mariage est un événement marquant dans la vie des couples, des préparatifs, des émotions, et un nouveau départ pour les jeunes mariés. 
</p><div className="d1"><Link to="">LIRE LA SUITE...</Link></div>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
</Row></Container></div>
            
           
    </>

  );
}

export default Images;