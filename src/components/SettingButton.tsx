import React from 'react'
import { Image, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Setting() {
	let navigate = useNavigate();
	return (
		<Image fluid
			className="position-fixed bottom-0 right-0 setting m-1"
			src="./images/setting.png"
			onClick={()=>navigate("/setting")}
		/>
	)
}
