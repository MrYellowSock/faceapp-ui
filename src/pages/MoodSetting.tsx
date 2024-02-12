import React, { useState } from 'react';
import { Container, Form, Button, Modal, Row, Col } from 'react-bootstrap';

export default function MoodSetting() {
	const [type, setType] = useState('');
	const [typeToDelete, setTypeToDelete] = useState('');
	const [image, setImage] = useState('');

	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImage(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};
	const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setType(event.target.value);
	};
	const handleTypeAdd = () => {
		console.log(type, image);
	}

	const handleTypeToDeleteChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setTypeToDelete(event.target.value);
	}
	const handleTypeDelete = () => {
		console.log(typeToDelete);
	}
	return (
		<Container>
			<Row>
				<h1 className='display-4'>kantang ka prapet message</h1>
			</Row>
			<Row>
				<p className='text-center'>Add the type</p>
				<Form.Group className="mb-3">
					<Form.Label>Type</Form.Label>
					<Form.Control type="text" value={type} onChange={handleTypeChange} />
				</Form.Group>
			</Row>
			<Row >
				<Col >
					<Form.Group className="mb-3" controlId="image">
						<Form.Label>Image:</Form.Label>
						<Form.Control type="file" accept="image/*" onChange={handleImageChange} />
					</Form.Group>
				</Col>
			</Row>
			<Row>
				{image && <img src={image}></img>}
			</Row>
			<Row>
				<Col className='text-center mt-3'>
					<Button variant="primary" onClick={handleTypeAdd}>
						Add type
					</Button>
				</Col>
			</Row>

			<Row className='mt-5'>
				<p className='text-center'>Delete teh type</p>
				<Form.Group className="mb-3" controlId="surname">
					<Form.Label>Types</Form.Label>
					<Form.Select value={typeToDelete} onChange={handleTypeToDeleteChange}>
						<option value="Happy">Happy</option>
						<option value="Angry">Angry</option>
						<option value="Sad">Sad</option>
						<option value="All">All</option>
					</Form.Select>
				</Form.Group>
			</Row>
			<Row>
				<Col className='text-center mt-3'>
					<Button variant="danger" onClick={handleTypeDelete}>
						Delete type
					</Button>
				</Col>
			</Row>
		</Container>
	)
}
