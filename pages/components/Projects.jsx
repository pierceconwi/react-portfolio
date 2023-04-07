import React from 'react';
import Image from 'next/image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Laptop, Phone, Brush } from 'react-bootstrap-icons';

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
                    <Phone  className="icon" /> <Brush  className="icon" />
                    <Card.Text>
                        Personal assistant web app with React.js, Chakra UI, and Firebase Firestore
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
                    <Laptop className="icon" /> <Brush  className="icon" />
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