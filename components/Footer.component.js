import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as  Link } from "react-router-dom";
import "./Footer.component.css";

 function Images() {
  return (
    
    <>
      <div className="gg1">
        <Container>
          <Row>
          <Col  xs={6} md={2}>
<Link to="">Voyages de noces</Link><br/>
<Link to="">Zanzibar</Link><br/>
<Link to="">Seychelles</Link><br/>
<Link to="">Maldive</Link><br/>
          </Col>
          <Col xs={6} md={2}>

<Link to="">Voyages Exotiques</Link><br/>
<Link to="">Thaïlande</Link><br/>
<Link to="">Bali</Link><br/>
<Link to="">Mexique</Link><br/>


          </Col>
                 <Col xs={6} md={2}>
<Link to="">Méditerranée</Link><br/>
<Link to="">Bodrum</Link><br/>
<Link to="">Turquie </Link><br/>  
   </Col>
   <Col xs={6} md={3}>
<Link to="">Nous contacter </Link><br/>
<Link to="">Par Téléphone : +216.53787800 </Link><br/>

<Link to="">Tunis, Les berges du lac 1 sur RDV : Plan </Link><br/>

<Link to="">Sousse : Route Touristique sur RDV : Plan </Link><br/>

<Link to="">Sfax sur RDV : Plus d'infos.</Link><br/></Col>

   <Col xs={6} md={3}>

<Link to="">ROUKA TRAVEL </Link><br/>
<Link to="">Agence de voyages licence A. </Link><br/>

<Link to="">Nous sommes spécialistes des voyages de noces exotiques depuis 2013. </Link><br/>
</Col></Row></Container>

       </div>
    </>
 );
}

export default Images;