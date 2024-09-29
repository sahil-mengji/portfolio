import { Routes, Route } from "react-router-dom";
import "./App.css";
import Card from "./components/Main";
import Detail from "./components/Detail";
function App() {
	return (
		<div className="w-full  bg-black  h-[100vh] flex justify-center items-center flex-col">
			<Routes>
				<Route path="/" element={<Card />} />
				<Route path="/detail/:id" element={<Detail />} />
			</Routes>
		</div>
	);
}

export default App;
