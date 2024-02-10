import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Modal } from 'react-bootstrap';
import { UserInfo } from '../types/UserInfo';
import ModalSuccess from '../components/ModalSuccess';

export default function UserManagementSearch({ searchFunction }: { searchFunction: (name: string) => UserInfo }) {
	const [searchInput, setSearchInput] = useState('');
	const [user, setUser] = useState<UserInfo | null>(null);
	const [showModal, setShowModal] = useState(false);
	const [showSuccessDialog, setShowSuccessDialog] = useState(false);

	const handleSearch = (event: React.FormEvent) => {
		event.preventDefault();
		setUser(searchFunction(searchInput));
	};

	const handleDelete = () => {
		// Perform user deletion logic here
		// ...
		setUser(null);
		setShowModal(false);
		setShowSuccessDialog(true);
	};

	const handleConfirm = () => {
		setShowSuccessDialog(false);
	};

	return (
		<Container>
			<Row>
				<h1 className='display-4'>Search user</h1>
			</Row>
			<Row>
				<Form onSubmit={handleSearch}>
					<Form.Group controlId="searchInput">
						<Form.Control
							type="text"
							placeholder="Enter name and surname"
							value={searchInput}
							onChange={(event) => setSearchInput(event.target.value)}
						/>
					</Form.Group>
					<Col className='text-end'>
						<Button variant="primary" type="submit">
							Search
						</Button>
					</Col>

				</Form>
			</Row>
			<Row>
				{user && (
					<Container>
						<Row>
							<Card className='text-center'>
								<Card.Header className='p-2'>
									<Card.Img
										src={user.avatarImage}
										variant='top'
										className='management-icon'
									/>
								</Card.Header>
								<Card.Body>
									<Card.Title>
										{user.name} {user.surname}
									</Card.Title>
									<Card.Text>
										{user.spawnAt.toDateString()}
									</Card.Text>
								</Card.Body>
							</Card>
						</Row>
						<Row className='my-3 text-center'>
							<Col>
								<Button variant="primary" type="submit">
									Edit
								</Button>
							</Col>
							<Col>
								<Button variant="danger" onClick={() => setShowModal(true)}>
									Delete
								</Button>
							</Col>
						</Row>
					</Container>
				)}
			</Row>
			<Modal show={showModal} onHide={() => setShowModal(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Confirm Deletion</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Are you sure you want to delete this user?
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => setShowModal(false)}>
						Cancel
					</Button>
					<Button variant="danger" onClick={handleDelete}>
						Delete
					</Button>
				</Modal.Footer>
			</Modal>
			<ModalSuccess onClose={()=>setShowSuccessDialog(false)} show={showSuccessDialog} title='Delete Success'></ModalSuccess>
		</Container>
	);
}