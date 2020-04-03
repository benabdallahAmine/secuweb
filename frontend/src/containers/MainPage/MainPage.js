import React, { Component } from 'react';

import Card from '../MainPage/Card/Card';
import { Row, Col} from 'reactstrap';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import Nav from '../../components/Navbar/Nav'; 

class Page1 extends Component {

    render() {
    return (
        <div>          
            <Nav />
            <div className="container-fluid d-flex justify-content-center">
                <Row>
                    <Col>
                        <Card imgsrc={img1} title="Appartement" paragraph="Loft en Duplex et patio intimiste. Idéalement situé à deux pas du centre-ville d'Anglet, 
                        ce magnifique loft en duplex de 71 m² offre un lieu de vie calme et inattendu au sein d'une petit copropriété.
                        Composé d'un espace de vie de 40 m² au ton industriel où prend place une cuisine équipée avec îlot central, 
                        ouverte sur un vaste séjour longé de baies vitrées donnant sur le patio de 14 m² inondant de lumière cet espace décloisonné." />
                    </Col>                    
                    <Col>
                        <Card imgsrc={img2} title="Maison" paragraph="Magnifique demeure sur le Cap d'Antibes.
                        Cette villa est entièrement rénovée offre des prestations de qualités.
                        Le terrain de 1795m2 est arboré d'essences méditerranéennes centenaires, témoins d'une véritable histoire pour cette demeure
                        La Villa est composée de 4 suites ayant chacune leur pièce d'eau privative, un vaste séjour rotonde avec cheminée, un grand espace de vie 
                        avec cuisine US équipée donnant sur la terrasse & sa piscine.   
                        Pour profiter de vos soirées, 85m2 de Toit terrasse, équipé d'une cuisine d'été, d'un salon extérieur." />
                    </Col>                   
                     <Col>
                        <Card imgsrc={img3} title="Studio" paragraph="20 m² - ASNIÈRES SUR SEINE. Appartement 1 pièce à Asnières sur Seine, entièrement meublé 
                        et équipé en résidence service. Bon emplacement, à mi-chemin entre Saint Denis et le centre d'affaires de le Défense. 
                        Surface : 19.34 m². Prix est de 250 302€ HT." />
                    </Col>
                </Row>
            </div>    
        </div>

    )};
}

export default Page1;