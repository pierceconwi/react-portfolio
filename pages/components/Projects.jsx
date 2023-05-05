import React from 'react';
import Image from 'next/image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import placeholder from '../public/placeholder_md.jpg';
import firechakra from '../public/fc_ss.png';
import aprilscloset from '../public/ac_ss.png';

export default function Projects() {
    return (
        <>
        <Container>
            <h2>Projects</h2>
            <Row>
                <Col xs="12" md="6">
                <Card
                    style={{
                        textAlign: "center"
                    }}
                >
                    <Card.Body>
                    <Card.Title>FireChakra</Card.Title>
                    <Image className="img-center, img-fluid" src={firechakra} alt="screenshot of a web app called FireChakra" />
                    <Card.Text>
                        Personal assistant web app with React.js, Chakra UI, and Firebase Firestore
                    </Card.Text>
                    <Card.Text>
                        <a href="https://firechakra.vercel.app/" target="_blank" rel="noopener noreferrer">Try it live!</a>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col xs="12" md="6">
                <Card
                    style={{
                        textAlign: "center"
                    }}
                >
                    <Card.Body>
                    <Card.Title>April's Closet</Card.Title>
                    <Image className="img-center, img-fluid" src={aprilscloset} alt="screenshot of a website called April's Closet" />
                    <Card.Text>
                        Concept eCommerce website + custom WordPress classic theme
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            <br />
        </Container>
        </>
    );
}