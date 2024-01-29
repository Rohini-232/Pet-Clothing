import React from 'react';
import { Navbar,Nav, Container, Row, Col, Image,Form } from 'react-bootstrap';
import { Search, PersonFill, HeartFill, CartFill} from 'react-bootstrap-icons';
import { Outlet } from 'react-bootstrap-icons';

const MyNav = () => {
  return (
	<>
    <Navbar>
      	<Container fluid className="my-custom-container">
        	<Row className="align-items-center">
          	<Col xs="auto" className="image">
            	<Image src="Logo.jpg" />
          	</Col>
          	<Col xs={5}>
            	<div className="input-group">
              		<input type="text" className="form-control" placeholder="Search For More Than 10,000 Products.." />
            	</div>
          	</Col>
          	<Col xs="auto">
            	<Search />
          	</Col>
          	<Col xs="auto">
            	<p>Phone<br /><b>+980-<br />34984089</b></p>
          	</Col>
          	<Col xs="auto">
            	<p>Email<br /><b>Waggy@Gmail.Com</b></p>
          	</Col> 
          	<hr/>
			<Col xs={2} className="category">
				<Form.Group as={Row} className="mb-3" controlId="role">
        			<Col sm={{ span: 12 }}>
          				<Form.Select><option>Shop by Category</option>
          				<option>Cloth</option>
          				<option>Food</option>
          				<option>Toy</option>
          				</Form.Select>
        			</Col>
      			</Form.Group>
      		</Col>
			<Col xs="auto" className="menu"><Nav.Link href="home">Home</Nav.Link></Col>
			<Col xs="auto" className="menu"><Nav.Link href="pages">Pages</Nav.Link></Col>
			<Col xs="auto" className="menu"><Nav.Link href="shop">Shop</Nav.Link></Col>
			<Col xs="auto" className="menu"><Nav.Link href="blog">Blog</Nav.Link></Col>
			<Col xs="auto" className="menu"><Nav.Link href="contact">Contact</Nav.Link></Col>
			<Col xs="auto" className="menu"><Nav.Link href="other">Others</Nav.Link></Col>
			<Col xs="auto" className="menu"><Nav.Link href="getpro">Get Pro</Nav.Link></Col>
			<Col xs="auto" className="icon"><Nav.Link href="#"><PersonFill/></Nav.Link></Col>
			<Col xs="auto" className="icon1"><Nav.Link href="#"><HeartFill/></Nav.Link></Col>
			<Col xs="auto" className="icon1"><Nav.Link href="#"><CartFill/></Nav.Link></Col>	
        	</Row>
      	</Container>
    </Navbar>

	<Outlet/>
	</>
  );
};

export default MyNav;
