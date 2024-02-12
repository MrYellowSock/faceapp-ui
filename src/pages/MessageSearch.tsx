import React, { useState } from 'react';
import { Container, Form, Button, Modal, Row, Col, Card } from 'react-bootstrap';
import MessageCard from '../components/MessageCard';

interface MessageSearchProps{
	onEdit?:()=>void
}

export default function MessageSearch({onEdit}:MessageSearchProps) {
	const [msg, setMsg] = useState('');

	const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setMsg(event.target.value);
	};

	const handleSearch = () => {
		console.log(msg);
	}

	return (
		<Container>
			<Row>
				<h1 className='display-4'>kan search message</h1>
			</Row>
			<Row>
				<Form.Group className="mb-3">
					<Form.Label>Message</Form.Label>
					<Form.Control type="text" value={msg} onChange={handleTypeChange} />
				</Form.Group>
			</Row>
			<Row>
				<Col className='text-center mt-3'>
					<Button variant="primary" onClick={handleSearch}>
						search
					</Button>
				</Col>
			</Row>
			<Row className='mt-4'>
				<MessageCard mood='Angry' message='IAJf isdof msdofm s;fios fmsdi ;sdifms;aifjs ;dfjsd;fj' onEdit={onEdit}></MessageCard>
			</Row>
		</Container>
	)
}
