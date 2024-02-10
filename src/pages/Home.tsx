import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import GreetCard from '../components/GreetCard';
import SettingButton from '../components/SettingButton';
import { PersonGreet } from '../types/PersonGreet';

export default function Home({ persons }: { persons: PersonGreet[] }) {
	return (
		<div>
			<Container fluid={true} className="p-4">
				<Row className='text-center my-1'>
					<h1 className="home-title display-4">
						<u>
							Hello World!
						</u>
					</h1>
				</Row>
				<Row>
					<video controls>
						<source src="path/to/video.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</Row>
				<Row>
					<Container>
						{persons.map((person, index) =>
							<GreetCard person={person} key={index}></GreetCard>
						)}
					</Container>
				</Row>
			</Container>
			<SettingButton></SettingButton>
		</div>
	);
}
