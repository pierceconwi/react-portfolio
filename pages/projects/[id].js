import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import NavBar from '/pages/components/NavBar.jsx';
import SocialBar from '/pages/components/SocialBar.jsx';
import Footer from '/pages/components/Footer.jsx';
import { getProjects, getAllProjectIds, getData } from '../../lib/data.js';


// Create an instance of the getStaticProps() to return data for one project
export async function getStaticProps({ params }) {
    const data = getProjects();
    const itemData = await getData(params.id);
    return {
        props: {
            itemData
        }
    };
}

// Create an instance of getStaticPaths() to report to Next.js all possible dynamic URLs
export async function getStaticPaths() {
    const paths = getAllProjectIds();
    return {
        paths,
        fallback: false
    };
}

// React component which displays all details about one project when a dynamic route matches:
export default function Entry( { itemData } ) {
    return (
      <>
      <Container>
      <Container>
        <Row>
            <Col>
                <Card>
                <Card.Body>
                    <Image className="img-center, img-fluid" src={itemData.screenshot} alt={itemData.name}  width={500} height={300} />
                    <Card.Title>{itemData.name}</Card.Title>
                    <Card.Text>{itemData.description}</Card.Text>
                    <Link href={itemData.livelink}>Try it Live!</Link>
                    <br />
                    <Link href="/">Back to Home</Link>
                </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
      <SocialBar />
      <Footer />
      </Container>
      </>
    );
}