import React from 'react'
import { Container, Navbar, Row, Nav, Image, Form, Button, Col } from 'react-bootstrap'
import MyNav from '../components/MyNav'

export default function Login() {
	return (
		<Container>
			<Row>
				<MyNav />
			</Row>
			<Row>
				<Container>
					<Row className="d-flex justify-content-center align-items-center">
						<Image src="./images/wojak.webp" className='account rounded-circle border border-dark' fluid />
					</Row>
					<Row>
						<Form action='/manage'>
							<Container>
								<Row>
									<Form.Group controlId="username">
										<Form.Label>Username</Form.Label>
										<Form.Control type="text" placeholder="Enter username" />
									</Form.Group>
								</Row>
								<Row>
									<Form.Group controlId="password">
										<Form.Label>Password</Form.Label>
										<Form.Control type="password" placeholder="Password" />
									</Form.Group>
								</Row>
								<Row className='mt-5 text-center'>
									<Col className='text-center'>
										<Button variant="danger" type="submit">
											เข้าสู่ระบบ
										</Button>
									</Col>
								</Row>
							</Container>
						</Form>
					</Row>
				</Container>
			</Row>
		</Container>
	)
}
