import React from 'react';
import Image from 'next/image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useState } from 'react'

export default function Projects({ data }) {
    const [id, setId] = useState(" ");
    const [name, setName] = useState(" ");
    const [description, setDescription] = useState(" ");
    const [screenshot, setScreenshot] = useState(" ");
    const [livelink, setLivelink] = useState(" ");
    const imgPathBase = "..public/";
    return (
        <>
        <Container>
            <h2>Projects</h2>
            <Row>
                    {data && data.map(({ id, name, description, screenshot, livelink }) => (
                        <Col key={id}  xs="12" md="6">
                        <Card
                            style={{
                                textAlign: "center"
                            }}
                        >
                            <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Image className="img-center, img-fluid" src={screenshot} width="500" height="300" alt="screenshot of a web app called FireChakra" />
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Card.Text>
                                <a href={livelink} target="_blank" rel="noopener noreferrer">Try it live!</a>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    ))}
            </Row>
            <br />
        </Container>
        </>
    );
}