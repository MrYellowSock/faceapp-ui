import React from 'react'
import AdminManagementAdd from './AdminManagementAdd'
import { Container, Form, Button, Modal, Row, Col } from 'react-bootstrap';
import AdminDataBox from '../components/AdminDataBox';

export default function AdminManagementEdit() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Submit');
	}
	return (
		<Container>
			<h1 className='display-4'>Edit Admin</h1>
			<Form onSubmit={handleSubmit} className='position-relative'>
				<AdminDataBox action='Save'></AdminDataBox>
			</Form>

		</Container>
	)
}
