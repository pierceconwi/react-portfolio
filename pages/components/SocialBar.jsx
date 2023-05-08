import React from 'react';
import Image from 'next/image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import github from './public/images/github-logo.png';
import linkedin from './public/images/linkedin-logo.png';

export default function SocialBar() {
    return (
        <>
        <Container>
            <Row>
                <Col xs="2" md="1">                    
                    <a href="https://github.com/pierceconwi"  target="_blank" rel="noopener noreferrer"><Image className="border-radiusImportant img-center img-fluid social" src={github} alt="GitHub logo" /></a>
                </Col>
                <Col xs="2" md="1">
                    <a href="https://www.linkedin.com/in/pierceconwi/"  target="_blank" rel="noopener noreferrer"><Image className="border-radiusImportant img-center img-fluid social" src={linkedin} alt="LinkedIn logo" /></a>
                </Col>
                <Col xs="5" md="8"> </Col>
                <Col xs="3" md="2">
                    <a href="mailto:pierceconwi@gmail.com"><Button variant="success">Let's Talk</Button></a>
                </Col>
            </Row>
            <br />
        </Container>
        </>
    );
}