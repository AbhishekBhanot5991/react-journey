import React from "react";
import {Container, Row, Col, Tabs, Tab} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Desktop1 from  '../../assets/desktop1.jpg';
import Desktop2 from  '../../assets/desktop2.jpg';
import Desktop3 from  '../../assets/desktop3.jpg';
import Design1 from  '../../assets/firstDesign.jpg';
import Design2 from  '../../assets/design-3.png';
import Design3 from  '../../assets/design-4.jpg';
import other1 from  '../../assets/cartoon.png';
import other2 from  '../../assets/other2.jpg';
import other3 from  '../../assets/visiting-card.png';
import './Designs.css';

export const Designs = () => {
    return (
        <section id='services'>
      <h5>My Recent Designs</h5>
      <h2>Designs</h2>
       <Container className="   ">
        <Row className="">
            <Tabs variant="pills" defaultActiveKey="tab-1" className=" p-0">
                <Tab eventKey="tab-1" title="Desktop">
                <Row className="py-5 tab-content-body mt-2">
                    <Col sm={4}><img src={Desktop1} alt="" /></Col>
                    <Col sm={4}><img src={Desktop2} alt="" /></Col>
                    <Col sm={4}><img src={Desktop3} alt="" /></Col>
                </Row>
                </Tab>
                <Tab eventKey="tab-2" title="Mobile">
                <Row className="py-5 tab-content-body mt-2">
                    <Col sm={4}><img src={Design1} alt="" /></Col>
                    <Col sm={4}><img src={Design2} alt="" /></Col>
                    <Col sm={4}><img src={Design3} alt="" /></Col>
                </Row>
                </Tab>
                <Tab eventKey="tab-3" title="Others">
                <Row className="py-5 tab-content-body mt-2">
                    <Col sm={4}><img src={other1} alt="" /></Col>
                    <Col sm={4}><img src={other2} alt="" /></Col>
                    <Col sm={4}><img src={other3} alt="" /></Col>
                </Row>
                </Tab>
            </Tabs>
        </Row>

       </Container>
    </section>    
    )
}
export default Designs;
