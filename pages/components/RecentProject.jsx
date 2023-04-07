import React from 'react';
import Image from 'next/image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Laptop, Brush } from 'react-bootstrap-icons';

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
                    <Laptop  className="icon" /> <Brush  className="icon" />
                    <Card.Text>
                    WordPress-powered news and events website for a local community activist coalition.
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