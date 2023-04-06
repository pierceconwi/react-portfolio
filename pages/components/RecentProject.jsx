import React from 'react';
import Image from 'next/image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function RecentProject() {
    return (
        <>
        <Container>
            <h2>Recent Project</h2>
            <Row>
                <Col xs="12" md="3">
                <Card>
                    <Card.Body>
                    <Card.Title>SAMPLE SAMPLE</Card.Title>
                    <Card.Text>
                        SAMPLE DESCRIPTION of recent project
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