import React from 'react'
import { Card, Col, Row, Button } from 'react-bootstrap'

interface MessageCardProps {
	mood: string;
	message: string;
	onEdit?: () => void;
	onDelete?: () => void
}

export default function MessageCard({ mood, message, onEdit, onDelete }: MessageCardProps) {
	return (
		<Card>
			<Card.Header>
				<Row>
					<Col className='d-flex align-items-center p-0'>
						<Card.Title className="text-start mt-auto mt-0">{mood}</Card.Title>
					</Col>
					<Col className='text-end'>
						<Button onClick={onEdit} variant="primary">Edit</Button>
						<Button onClick={onDelete} variant="danger">Delete</Button>
					</Col>
				</Row>
			</Card.Header>
			<Card.Body>
				<Card.Text>
					{message}
				</Card.Text>
			</Card.Body>
		</Card>
	)
}
