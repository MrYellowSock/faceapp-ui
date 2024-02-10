import React from 'react'
import { Container, Row } from 'react-bootstrap'
import MessageSetting from '../components/MessageSetting'

export default function Setting() {
	return (
		<Container className='p-4'>
			<Row>
				<h1 className='display-6'>การตั้งค่า</h1>
			</Row>
			<Row>
				<MessageSetting></MessageSetting>
			</Row>
		</Container>
	)
}
