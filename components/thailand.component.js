import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card ,Image } from 'react-bootstrap';
import { Pagination,Carousel,ListGroup} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


// core components

function Images() {
  return (
    <>
      <div id="conteneur">
        <Container>
          <Row>
         
            <Col md="12">
                        
                      

                <Card style={{ width: '15rem' }}>
                <div id="conteneur">
                 <Card.Img variant="top" src="./15.PNG" />
                   <Card.Img variant="top" src="./16.PNG" />
                 <Card.Img variant="top" src="./17.PNG" /></div>

                  <Card.Body>
                    <Card.Text>
                    
                  
  

    </Card.Text>
  </Card.Body>
</Card></Col>
<ul><li> Type : En groupes ou en privé pour voyages de noces</li>
<li>Départs : Tous les jours de la Tunisie </li>
<li>Durée : 11 Jours extensibles </li>
<li>Résumé : Vols, Hôtels, Transferts et activités au choix</li>
<li>Prix : A partir de 3390 DT / voyageur </li>
 </ul>
<p>Découvrez Phuket, l'île la plus fameuse de la Thaïlande. Profitez d'un séjour au coeur d'une nature paisible et envoûtante, et libérez-vous du stress quotidien.

Phuket est la destination idéale pour un voyage de noces ou pour des vacances familiales ou entre amis ou en solo mémorables. 

A partir de Phuket, visitez les îles Phi Phi et James Bond, planifiez des activités d'aventure dans la nature topicale et passez des journées dans des beachs clubs de qualité.</p>
<Link to="/create-devis"class="btn btn-dark">Demander le Devis </Link>     
<h2>Programme conseillé d'un voyage à Phuket en Thaïlande :</h2> 
<ul><li>| 1er Jour : Tunis

Vols internationaux au départ de Tunis vers l'île de Phuket.</li>

<li>| 2ème Jour : Tunis - Phuket

Arrivée à l'aéroport international de Phuket. Accueil & transfert vers l'hôtel de votre choix ( voir la liste ci-dessous ) 

Soirée libre. (Nous vous communiquerons les bonnes adresses)

Nuit dans votre hôtel.</li>

<li>| 3ème Jour : Tour de Phuket</li></ul>     


<Col xs={8} md={6}>
<Image src="./18.PNG" thumbnail />
</Col>
<Col xs={8} md={6}>
<Image src="./19.PNG" thumbnail />
</Col>
<p>Après le petit déjeuner, en option : Tour de Phuket où vous pouvez voir quelques-unes des vues les plus magnifiques du cap de l'île Phromthep et du point d’observation de Phuket. Découvrez aussi le plus grand temple de l'île et sur le chemin du retour visitez Gems Gallery.

Soirée libre. (Nous vous communiquerons les bonnes adresses)

Nuit dans votre hôtel.</p>

<ul><li>| 4ème Jour: Phi Phi Islands by Speedboat</li></ul>
<Col xs={8} md={6}>
<Image src="./20.PNG" thumbnail />
</Col>
<Col xs={8} md={6}>
<Image src="./21.PNG" thumbnail />
</Col>
<p>Après le petit déjeuner, visitez en option les îles Phi Phi sur speedboat : Découvrez les spectaculaires formations rocheuses calcaires de Phi Phi Islande là où vous pouvez faire du Snorkeling et nager dans une eau cristalline de l'une des plus belles baies. Déjeuner à Phi Phi Don avec un peu de temps libre pour découvrir le village. Dernier arrêt sur une belle île avec une grande plage de sable blanc, l’endroit idéal pour s’allonger et se détendre à la plage ou encore nager ou faire du snorkeling dans un joli récif autour de l’île.


Soirée libre. (Nous vous communiquerons les bonnes adresses)

Nuit dans votre hôtel.</p>

<ul><li>| 5ème Jour: Eco-aventure : Rafting</li></ul>

<p>Après le petit déjeuner, en option partez en une journée de Rafting. Vous prendrez une route panoramique Phang Nga, un bel endroit recouvert d’une végétation magnifique. Ensuite, partez en Rafting avant de vous détendre dans une cascade d’eau. </p>
<Col  md={12}>
<Image src="./22.PNG" thumbnail /></Col>
<p>Soirée libre. (Nous vous communiquerons les bonnes adresses)

Nuit dans votre hôtel.</p>

<ul><li>| 6ème Jour: JAMES BOND ISLAND CANOE 2 en 1 </li></ul>
<Col xs={8} md={6}>
<Image src="./23.PNG" thumbnail />
</Col>
<Col xs={8} md={6}>
<Image src="./24.PNG" thumbnail />
</Col>
<p>Après le petit déjeuner, en option excursion James Bond Island & Canoe. Profitez d'une journée à Phang Nga Baie : Balade en canoë et découverte des paysages fabuleux du golf Phang Nga. Visitez aussi James Bond Island, là où le célèbre film "L'homme au pistolet d'or" a été partiellement filmé. Détente sur l'ile Lawa avant de retourner à l’hôtel.

Soirée libre. (Nous vous communiquerons les bonnes adresses)

Nuit dans votre hôtel.</p>

<ul><li>| 7ème Jour: Parc de tyrolienne Zipline</li> </ul>

<Col  md={12}>
<Image src="./26.PNG" thumbnail />
</Col>
<p>Après le petit déjeuner, en option  Tyrolienne Flying Hanuman : Flying Hanuman est une éco-aventure dans la jungle de Phuket. L’excursion propose la grimpe d’arbres, une activité palpitante qui a un impact minimal sur l'environnement. Vous allez voler d'arbre à un autre et reprendre la joie de l'enfance dans une partie rare de la région sauvage de Phuket.

Soirée libre. (Nous vous communiquerons les bonnes adresses)

Nuit dans votre hôtel.</p>

<ul><li>| 8ème Jour: ROUKA Chilling Experience</li></ul>
<Col  md={12}>
<Image src="./27.PNG" thumbnail />
</Col>

<p>Après le petit déjeuner, en option journée  ROUKA Chilling Experience avec chauffeur : Commencez la journée par une promenade à la vieille ville de Phuket réputée par son architecture sino-portugaise. Déjeunez dans un restaurant avec vue panoramique. Fin d’après-midi dans un Beach Club pour le coucher de soleil. Retour à 19H

Soirée libre (Nous vous communiquerons les bonnes adresses)

Nuit dans votre hôtel.</p>

<ul><li>| 9ème Jour : Beach Club privé.</li></ul>

<p>Après le petit déjeuner, en option, Journée VIP Day Pass dans un Beach Club : Profitez d’une journée de détente dans l'un des beach clubs de Phuket où on peut se baigner toute l'année même en basse saison. Votre pass vous donne accès à la zone VIP , parasole, chaise longue, équipement de snorkeling, kayak et un espace pour enfants si vous êtes en famille. 

Le soir, achetez des souvenirs ou des gadgets asiatiques. (Nous vous communiquerons les meilleures adresses).

Nuit dans votre hôtel.</p>

<ul><li>| 10ème Jour : Départ de Phuket </li></ul>

<p>Après le petit déjeuner, temps libre en attendant votre transfert pour les vols de retour ( le Check-out est toujours à midi )</p>

<ul><li>| 11ème Jour : Tunis</li></ul>

<p>Arrivée à l’aéroport de Tunis Carthage. 

Remarque : il est possible de personnaliser votre voyage en ajoutant des nuitées ou des extensions ( exemple à Kuala Lumpur ou Dubaï ) . Remplissez le formulaire ci-dessous pour demander un devis</p>

<ul><li>Consultez aussi : Voyage à Phuket & Phi Phi Island</li></ul>

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