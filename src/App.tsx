import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Setting from "./pages/Setting";
import Login from "./pages/Login";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/setting" element={<Login></Login>} />
				<Route path="/" element={
					<Home persons={[
						{
							avatarImage: "./images/smurf.jpg",
							moodImage: "./images/moods/cool.png",
							speech: "We live we love we ****"
						},
					]}></Home>
				} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
