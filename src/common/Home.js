import React from 'react';
import { Container, Row, Col, Image,Button,section,Card} from 'react-bootstrap';
import { ArrowRightShort, StarFill} from 'react-bootstrap-icons';

const Home=()=>{
	return(
		<>
			<section>
				<Container fluid className="container1">
					<Row>
						<Col>
							<Image src="MainDog.jpg"></Image>
						</Col>
						<Col className="text">
							<p className="color1 p1">SAVE 10-20 % OFF </p>
							<h1 className="h11"> Best <br/>Destination For <br/><span className="color1"> Your Pets </span></h1>
							<Button variant="outline-secondary" className="button1 button2">SHOP NOW<ArrowRightShort/></Button>
						</Col>
					</Row>
				</Container>
			</section>
			<section>
				<Container fluid>
					<br/><br/><br/><br/>
					<Row className="service1">
						<Col className="service">
							<Image src="img1.jpg"></Image>
						</Col>
						<Col className="service">
							<Image src="img2.jpg"></Image>
						</Col>
						<Col className="service">
							<Image src="img3.jpg"></Image>
						</Col>
						<Col className="service">
							<Image src="img4.jpg"></Image>
						</Col>
						<Col className="service">
							<Image src="img5.jpg"></Image>
						</Col>
					</Row>
				</Container>
			</section>
			<section>
				<Container fluid className="custom-class">
					<br/><br/><br/><br/>
					<Row>
						<Col className="clothing">
							<h2 className="h22">Pet Clothing</h2>
						</Col>
						<Col className="shop">
							<Button variant="outline-secondary" className="button1 button2">SHOP NOW<ArrowRightShort/></Button>
						</Col>
					</Row>
					<br/>
					<Row>
						<Card style={{ width: '16rem' }} className="cards card1">
							<Card.Body className="custom-card-body">
								<Card.Img variant="top" src="dog1.jpg" />
        						<Card.Title className="title">Gray Hoodie</Card.Title>
        						<Card.Text>
        							<StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/>5.0<br/>
          							$18.00
          						</Card.Text>
       						 	<Button variant="outline-secondary" className="button1">ADD TO CART</Button>
							</Card.Body>
						</Card>
						<Card style={{ width: '16rem' }} className="cards">
							<Card.Body className="custom-card-body">
								<Card.Img variant="top" src="dog2.jpg" />
        						<Card.Title className="title">Gray Hoodie</Card.Title>
        						<Card.Text>
        							<StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/>5.0<br/>
          							$18.00
          						</Card.Text>
       						 	<Button variant="outline-secondary" className="button1">ADD TO CART</Button>
							</Card.Body>
						</Card>
						<Card style={{ width: '16rem' }} className="cards">
							<Card.Body className="custom-card-body">
								<Card.Img variant="top" src="dog3.jpg" />
        						<Card.Title className="title">Gray Hoodie</Card.Title>
        						<Card.Text>
        							<StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/>5.0<br/>
          							$18.00
          						</Card.Text>
       						 	<Button variant="outline-secondary" className="button1">ADD TO CART</Button>
							</Card.Body>
						</Card>
						<Card style={{ width: '16rem' }} className="cards">
							<Card.Body className="custom-card-body">
								<Card.Img variant="top" src="dog4.jpg" />
        						<Card.Title className="title">Gray Hoodie</Card.Title>
        						<Card.Text>
        							<StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/>5.0<br/>
          							$18.00
          						</Card.Text>
       						 	<Button variant="outline-secondary" className="button1">ADD TO CART</Button>
							</Card.Body>
						</Card>
					</Row>
				</Container>
			</section>

		</>
	);
};
export default Home;