import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Laptop, Phone, Brush } from 'react-bootstrap-icons';

export default function Services() {
    return (
        <>
        <Container id="services">
            <h2>Services</h2>
            <Row>
                <Col xs="12" md="4">
                <Card
                    style={{
                        textAlign: "center"
                    }}
                >
                    <Card.Body>
                    <Card.Title>Website Development</Card.Title>
                    <Laptop  className="icon" />
                    <Card.Text>
                        Custom-built solutions available with eCommerce and SEO integration.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col xs="12" md="4">
                <Card
                    style={{
                        textAlign: "center"
                    }}
                >
                <Card.Body>
                    <Card.Title>Mobile App Development</Card.Title>
                    <Phone  className="icon" />
                    <Card.Text>
                        Data-driven solutions delivered in a speciaized, mobile-responsive package.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col xs="12" md="4">
                <Card
                    style={{
                        textAlign: "center"
                    }}
                >
                <Card.Body>
                    <Card.Title>Website & App Design</Card.Title>
                    <Brush  className="icon" />
                    <Card.Text>
                        Eye-catching designs which hinge on simplicity to maximize conversions.
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