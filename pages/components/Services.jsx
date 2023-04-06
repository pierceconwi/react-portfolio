import React from 'react';
import Image from 'next/image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Services() {
    return (
        <>
        <Container>
            <h2>Services</h2>
            <Row>
                <Col xs="12" md="3">
                <Card>
                    <Card.Body>
                    <Card.Title>Website Development</Card.Title>
                    <Card.Text>
                        Custom solutions available with eCommerce and SEO integration.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col xs="12" md="3">
                <Card>
                <Card.Body>
                    <Card.Title>Mobile App Development</Card.Title>
                    <Card.Text>
                        Custom data-driven solutions delivered in a mobile-responsive package.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col xs="12" md="3">
                <Card>
                <Card.Body>
                    <Card.Title>Website & Landing Page Design</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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