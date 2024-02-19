import React from 'react'
import { Container, Form, Button, Modal, Row, Col } from 'react-bootstrap';
import AdminDataBox from '../components/AdminDataBox';

export default function AdminManagementAdd() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Submit');
	}
	return (
		<Container>
			<h1 className='display-4'>Add Admin</h1>
			<Form onSubmit={handleSubmit} className='position-relative'>
				<AdminDataBox action='Add'></AdminDataBox>
			</Form>

		</Container>
	)
}
