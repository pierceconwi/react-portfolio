import React from 'react';
import Image from 'next/image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
    return (
        <>
        <Container id="contact" >
            <Row>
                <Col xs="12" md="6">
                <h5>Pierce Conwi</h5>
                <h6>Web Developer</h6>
                <p>San Francisco Bay Area, California</p>
                </Col>
                <Col xs="12" md="6"
                >
                <h6>Contact Me</h6>
                <p>pierceconwi@gmail.com</p>
                </Col>
            </Row>
            <br />
            <Row>
                <Col                      
                    style={{
                        textAlign: "center"
                    }}
                >
                    <p>Copyright &#169; 2023 Pierce Conwi. All rights reserved.</p>
                </Col>
            </Row>
        </Container>
        </>
    );
}