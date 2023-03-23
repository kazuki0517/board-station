import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateThread from "./components/CreateThread";

function App() {
	return (
		<BrowserRouter>
    <Header />
			<Routes>
				<Route path="/" element={<Home />} />
    <Route path="/thread/new" element={<CreateThread />}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
