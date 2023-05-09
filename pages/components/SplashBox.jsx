import React from 'react';
import Image from 'next/image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SplashBox() {
    return (
        <>
        <Container id="home"
                style={{
                    paddingTop: "10px"
                }}>
            <br />
            <Row>
                <Col sm="12" md="8">
                    <h1>Pierce Conwi</h1>
                    <h2>Web Developer</h2>
                    <p>Hi, I'm Pierce, a web developer located in the San Francisco Bay Area. I am a resilient team player with a strong analytical mind who welcomes every new challenge with enthusiasm.</p>
                    <p>Let my web expertise go to work for you!</p>
                </Col>
                <Col sm="12" md="4">
                    <Container>
                    <Image className="border-radiusImportant img-center" src='/hs_full.jpg' alt="logo" width="175" height="175" />
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col xs="12"></Col>
            </Row>
        </Container>
        </>
    );
}