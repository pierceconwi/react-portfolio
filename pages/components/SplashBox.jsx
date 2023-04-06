import React from 'react';
import Image from 'next/image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import selfie  from '../public/hs_full.jpg';

export default function SplashBox() {
    return (
        <>
        <Container>
            <Row>
                <Col sm="12" md="8">
                    <h1>Pierce Conwi</h1>
                    <h2>Web Developer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus egestas sed sed. Malesuada fames ac turpis egestas maecenas. Scelerisque mauris pellentesque pulvinar pellentesque. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Mauris ultrices eros in cursus turpis massa tincidunt. Ornare arcu dui vivamus arcu felis bibendum ut.</p>
                    <p>Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Nibh ipsum consequat nisl vel pretium lectus quam id leo.</p>
                </Col>
                <Col sm="12" md="4">
                    <Container>
                    <Image className="border-radiusImportant img-center" src={selfie} alt="logo" width="250" height="250" />
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