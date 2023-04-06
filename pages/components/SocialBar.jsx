import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function SocialBar() {
    return (
        <>
        <Container>
            <Row>
                <Col xs="2" md="1">github</Col>
                <Col xs="2" md="1">linkedin</Col>
                <Col xs="6" md="8"> </Col>
                <Col xs="2">
                    <Button variant="success">Let's Talk</Button>
                </Col>
            </Row>
            <br />
        </Container>
        </>
    );
}