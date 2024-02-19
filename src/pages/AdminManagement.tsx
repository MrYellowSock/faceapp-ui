import React from 'react';
import { Container, Row, Tab, Tabs, Col, Form, Button, Table } from 'react-bootstrap';
import UserManagementAdd from './UserManagementAdd';
import UserManagementSearch from './UserManagementSearch';
import BackButton from '../components/BackButton';
import { useNavigate } from 'react-router-dom';

export default function AdminManagement() {
	const users = [
		{ id: 1, username: 'user1', password: 'password1', role: 'admin' },
		{ id: 2, username: 'user2', password: 'password2', role: 'user' },
		{ id: 3, username: 'user3', password: 'password3', role: 'user' },
	];

    let navigate = useNavigate();
	const handleEdit = (id: number) => {
		// Handle edit logic here
        console.log(id)
        navigate("/admin/edit/"+id)
	};

	const handleDelete = (id: number) => {
		// Handle delete logic here
	};

	return (
		<Container>
			<Row>
				<h1 className='display-6'>Admin management</h1>
			</Row>
			<Row className='bg-light'>
				<Row className='justify-content-end'>
					<Col className='d-flex align-items-center'>
						<Form.Control type='text' />
						<Button className='ms-2'>Search</Button>
						<Button className='ms-2' onClick={()=>navigate("/admin/add")}>Add</Button>
					</Col>
				</Row>
			</Row>
			<Row>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>ID</th>
							<th>Username</th>
							<th>Password</th>
							<th>Role</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user.id}>
								<td>{user.id}</td>
								<td>{user.username}</td>
								<td>{user.password}</td>
								<td>{user.role}</td>
								<td>
									<Button variant='primary' onClick={() => handleEdit(user.id)}>
										Edit
									</Button>
									<Button variant='danger' onClick={() => handleDelete(user.id)}>
										Delete
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Row>
			<BackButton></BackButton>
		</Container>
	);
};
