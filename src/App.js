import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateThread from "./components/CreateThread";
import ViewThread from "./components/ViewThread";

function App() {
	return (
		<BrowserRouter>
    <Header />
			<Routes>
				<Route path="/" element={<Home />} />
    <Route path="/thread/new" element={<CreateThread />}/>
				<Route path="/thread/:id" element={<ViewThread />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
