import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Setting from "./pages/Setting";
import Login from "./pages/Login";
import Management from "./pages/Management";
import UserManagement from "./pages/UserManagement";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/manage" element={<Management></Management>} />
				<Route path="/setting" element={<Setting></Setting>} />
				<Route path="/login" element={<Login></Login>} />
				<Route path="/user" element={<UserManagement></UserManagement>}></Route>
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
