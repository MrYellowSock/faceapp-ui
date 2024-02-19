import React from 'react'
import { Container, Form, Button, Modal, Row, Col } from 'react-bootstrap';
export default function AdminDataBox({ action }: { action: string }) {
	return (
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
			<Row className='mt-3'>
				<Form.Group controlId="role">
					<Form.Label>Role</Form.Label>
					<Form.Control type="text" placeholder="role" value={"admin"} />
				</Form.Group>
			</Row>
			<Row className='mt-5 text-center'>
				<Col className='text-center'>
					<Button variant="primary" type="submit">
						{action}
					</Button>
				</Col>
			</Row>

		</Container>
	)
}
