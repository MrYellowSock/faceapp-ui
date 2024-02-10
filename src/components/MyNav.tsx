import React from 'react'
import { Navbar, Nav, Form, Button, Col } from 'react-bootstrap'

export default function MyNav() {
	return (
		<Navbar bg="light" expand="lg" className='px-3'>
			<Navbar.Brand href="/" >Hello World!</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/setting">Setting</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}
