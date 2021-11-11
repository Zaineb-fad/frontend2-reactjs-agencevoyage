import React from "react";

// reactstrap components

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card ,Image } from 'react-bootstrap';
import { Pagination,Carousel,ListGroup} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import "./Seychelles.component.css";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


// core components

function Images() {
  return (
    <>
      <div id="conteneur">
        <Container>
          <Row>
         
            <Col md="12">
                        
              <h1>Voyage organisé aux Seychelles à Mahe depuis la Tunisie</h1>        

               
</Col>
    


<Col  md={10}>
<Image src="./28.PNG" thumbnail />
</Col>

<ul><li>Type : Voyage organisé sur mesure en privé</li>
<li>Dates : Départs garantis tous les jours de la Tunisie</li>
<li>Durée : 8 jours ou 10 jours extensibles</li>
<li>Résumé : Vols + Hôtel + Transferts + activités en option</li></ul>
<p>Prix : A partir de  6000 DT / voyageur
Profitez d’un séjour inoubliable aux Seychelles et faites que votre voyage de noces soit une expérience marquante et différente. Vous allez certainement apprécier ses superbes plages au sable fin et sa nature envoûtante. Un séjour mémorable qui vous offrira le plaisir d’être dans un endroit paradisiaque et de savourer des spécialités culinaires succulentes. Que demander de mieux à la vie? </p>



<p>Après le petit déjeuner, visitez en option les îles Phi Phi sur speedboat : Découvrez les spectaculaires formations rocheuses calcaires de Phi Phi Islande là où vous pouvez faire du Snorkeling et nager dans une eau cristalline de l'une des plus belles baies. Déjeuner à Phi Phi Don avec un peu de temps libre pour découvrir le village. Dernier arrêt sur une belle île avec une grande plage de sable blanc, l’endroit idéal pour s’allonger et se détendre à la plage ou encore nager ou faire du snorkeling dans un joli récif autour de l’île.


Soirée libre. (Nous vous communiquerons les bonnes adresses)

Nuit dans votre hôtel.</p>

<ul><li>| 5ème Jour: Eco-aventure : Rafting</li></ul>

<p>Après le petit déjeuner, en option partez en une journée de Rafting. Vous prendrez une route panoramique Phang Nga, un bel endroit recouvert d’une végétation magnifique. Ensuite, partez en Rafting avant de vous détendre dans une cascade d’eau. </p>
<p>Programme conseillé d'un voyage aux Seychelles :</p> <ul><li>
1er Jour : Tunis</li>

<li>Vol international au départ de Tunis vers Les Seychelles. Nuit à Bord. </li>

<li>2ème Jour : Seychelles</li>

<li>Arrivée à l'aéroport international de Mahé. Transfert vers l'hôtel de votre choix.  ( voir la liste de nos propositions selon votre budget ) 

Check-in à 14h</li> </ul>
<Col  md={10}>
<Image src="./29.PNG" thumbnail />
</Col>

<p>Après le petit déjeuner, en option Excursion d'une journée à Praslin & La Digue. Vous allez vous embraquer sur le ferry qui vous amènera à la 2ème plus grande île des Seychelles, Praslin. Vous allez visiter la Vallèe de Mai, le seul endroit sur terre où le Coco de Mer géant grandit dans son milieu naturel. Vous pouvez explorer la forêt vierge, écouter les oiseaux. Cette excursion comprend également une visite à la célèbre plage d'Anse Lazio avant de vous embarquer pour la traversée vers l'île de La Digue. Au cours du trajet de 30 minutes, vous aurez une bonne occasion d'apercevoir quelques dauphins. Sur l'ile vous allez voir la coprah des cocotiers, les tortues géantes terrestres et la maison coloniale rénovée de plantation. La visite continue avec Anse Source d'Argent, l'une des plages les plus spectaculaires au monde.

Dîner libre, nuit dans votre hôtel.



</p>

<ul><li>4ème Jour : Visite de Mahé   </li></ul>
<Col md={8}>
<Image src="./31.PNG" thumbnail />
</Col>

<p>2 journées de détente sur les plages des Seychelles.</p> 

<ul><li>7ème Jour : Départ</li></ul>

<p>Après le petit déjeuner, check-out à midi puis temps libre jusqu'au transfert vers l'aéroport international pour le vol vers Tunis ou votre prochaine destination ( Dubaï ou Istanbul ) 

</p><ul><li>8ème Jour : Arrivé</li></ul> 

<ul><li>Arrivée à l’aéroport de Tunis Carthage ou à votre prochaine destination. </li>

<li>Voir aussi Notre proposition de voyage combiné Mahe & Praslin </li></ul>

<p>Remarque : il est possible de personnaliser votre voyage en ajoutant des nuitées, des excursions à Dubaï ou à Istanbul, Veuillez remplir le formulaire de devis ci-dessous pour nous communiquer vos besoins.

Bon à savoir : Les voyageurs doivent avoir une autorisation de voyage approuvée , ( payante par votre carte de crédit internationale )  , obtenue à l'adresse https://seychelles.govtas.com/</p>





<hr/>
<div className="v1"><Link to="/create-devis"className="btn btn-dark">
         demander un Devis
        </Link>   </div>       
         
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