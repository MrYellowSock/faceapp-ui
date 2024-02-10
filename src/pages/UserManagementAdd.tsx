import React, { useState } from 'react';
import { Container, Form, Button, Modal } from 'react-bootstrap';
import ReactCrop from 'react-easy-crop';
import { Area, Point } from 'react-easy-crop/types';
import getCroppedImg from '../utils/cropper';
import ModalSuccess from '../components/ModalSuccess';

export default function UserManagementAdd() {
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [image, setImage] = useState('');
	const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
	const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>({ ...crop, width: 0, height: 0 })
	const [zoom, setZoom] = useState(1)
	const [cropped, setCropped] = useState(false);
	const [croppedImage, setCroppedImage] = useState('');
	const [showModal, setShowModal] = useState(false); // State variable for showing the success modal

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};

	const handleSurnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSurname(event.target.value);
	};

	const handleCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
		// Perform any necessary logic with the cropped area
		setCroppedAreaPixels(croppedAreaPixels)
	};

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

	const handleFinishCropping = async () => {
		console.log(croppedAreaPixels)
		const croppedImageStr = await getCroppedImg(
			image,
			{ x: croppedAreaPixels.x, y: croppedAreaPixels.y, width: croppedAreaPixels.width, height: croppedAreaPixels.height },
			zoom
		)
		setCroppedImage(croppedImageStr ?? "")
		setCropped(true)
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Perform save logic here
		// Show the success modal
		setShowModal(true);
	};

	const handleCloseModal = () => {
		// Close the success modal
		setShowModal(false);
	};

	return (
		<Container>
			<h1 className='display-4'>Add User</h1>
			<Form onSubmit={handleSubmit} className='position-relative'>
				<Form.Group className="mb-3" controlId="name">
					<Form.Label>Name:</Form.Label>
					<Form.Control type="text" value={name} onChange={handleNameChange} />
				</Form.Group>
				<Form.Group className="mb-3" controlId="surname">
					<Form.Label>Surname:</Form.Label>
					<Form.Control type="text" value={surname} onChange={handleSurnameChange} />
				</Form.Group>
				<Form.Group className="mb-3" controlId="image">
					<Form.Label>Image:</Form.Label>
					<Form.Control type="file" accept="image/*" onChange={handleImageChange} />
				</Form.Group>
				{croppedImage && (
					<>
						<img src={croppedImage} alt="Cropped" />
						<br></br>
					</>
				)}
				<Button type="submit" variant="primary">
					Save
				</Button>

				{image && !cropped && (
					<ReactCrop
						image={image}
						crop={crop}
						zoom={zoom}
						onZoomChange={setZoom}
						onCropChange={setCrop}
						onCropComplete={handleCropComplete}

					/>
				)}
			</Form>
			{image && !cropped &&
				<Button onClick={handleFinishCropping} >FINISH {cropped}</Button>
			}

			{/* Success Modal */}
			<ModalSuccess show={showModal} onClose={handleCloseModal} title='Save success'></ModalSuccess>
		</Container>
	);
}
