import React from 'react';
import Image from 'next/image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function RecentProject() {
    return (
        <>
        <Container id="projects">
            <h2>Recent Project</h2>
            <Row>
                <Col xs="12">
                <Card
                    style={{
                        textAlign: "center"
                    }}
                >
                    <Card.Body>
                    <Card.Title>Bikeable Santa Rosa</Card.Title>
                    <Image className="img-center, img-fluid" src='/bsr-hp-ss.png' alt="screenshot of a website made for Bikeable Santa Rosa" width={500} height={300} />
                    <Card.Text>
                    A WordPress-powered news and events website for a local community activist group promoting safer city streets.
                    </Card.Text>
                    <Card.Text>
                        <a href="https://bikeablesantarosa.org" target="_blank" rel="noopener noreferrer">View</a>
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