import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card ,Image } from 'react-bootstrap';
import { Pagination,Carousel,ListGroup} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Grece.component.css";


// core components

function Images() {
  return (
    <>
      <div id="conteneur">
        <Container>
          <Row>
         
            <Col md="12">
                        
                      

                <Card style={{ width: '40rem' }}>
                
                 <Card.Img variant="top" src="./35.PNG" />
                  

                  <Card.Body>
                    <Card.Text>
       La Grèce est un pays avec un passé historique unique et un paysage qui donne des centaines d’images de cartes postales. C'est le pays des belles contradictions, un voyage constant au temps. En Grèce vous vous situez au carrefour des civilisations, couleurs et cultures.

Qui dit Grèce, dit automatiquement Mykonos ce qui vous fera penser à ses ruelles colorées instagramables, ses plages aux eaux cristallines et ses lounges pour faire la fête. N’hésitez pas à découvrir la capitale Athènes et de faire une escapade à Santorin pour admirer ses vues à couper le souffle.

Idées de voyages en grèce avec ROUKA :              
                  
  

    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '40rem' }}>
                
                 <Card.Img variant="top" src="./36.PNG" />
                  

                  <Card.Body>
                    <Card.Text>
     <ul><li> Type : Voyage organisé en privé. </li>
<li>Dates : Ce voyage est disponible en 2022</li>
<li>Durée : 3 nuits ou 6 nuits extensibles</li> 
<li>Résumé : Vols, Hôtels, Transferts et activités </li>    </ul>        
                  
  

    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '40rem' }}>
                
                 <Card.Img variant="top" src="./37.PNG" />
                  

                  <Card.Body>
                    <Card.Text>

 
     <ul><li> Mode : Voyage organisé en privé. . </li>
<li>Dates : Ce voyage est disponible en 2022</li>
<li>Durée : 3 nuits extensibles.</li> 
<li> Résumé : Vols, Hôtels, Transferts et activités au choix. 
</li>            
                  
  </ul>

    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '40rem' }}>
                
                 <Card.Img variant="top" src="./38.PNG" />
                  

                  <Card.Body>
                    <Card.Text>

 

     <ul><li>Type : Voyage organisé en privé  </li>
<li>Dates : Ce voyage est disponible en 2022</li>
<li>Durée : 7 nuits / 8 jours extensibles.</li> 
<li>Résumé : Vols, Hôtels, transferts et ferry 
 </li>   
 <li>Prix : A partir de 4400 DT / voyageur </li>         
                  
  
</ul>
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '40rem' }}>
                
                 <Card.Img variant="top" src="./39.PNG" />
                  

                  <Card.Body>
                    <Card.Text>

 



     <ul><li>Type : Voyage organisé en privé.   </li>
<li>Dates : Ce voyage est disponible en 2022</li>
<li>Durée : 6 nuits / 7 jours extensibles
</li> 
<li>
Résumé : Vols, Hôtels, Transferts et activités optionnelles 
 </li>   
 <li>Prix : A partir de 4590 DT  </li>   </ul>      
</Card.Text>
  </Card.Body>
</Card>
<hr/>
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