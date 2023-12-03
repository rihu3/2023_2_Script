import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import Problem from "./components/Problem";
import Ranking from "./components/Ranking";
import Search from "./components/Search";
import Profile from "./components/Profile";
import Login from "./components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';

const AppRouter = () => {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Title />} />
				<Route path="/problem" element={<Problem />} />
				<Route path="/ranking" element={<Ranking />} />
				<Route path="/search" element={<Search />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</>

	)
}

function App() {
	return (
		<Router>
			<AppRouter />
		</Router>
	);
}

export default App;
