import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar/Navbar";
import Work from "./pages/work/Work";
import About from "./pages/about/About";
function App() {
	return (
		<div className="w-full h-[100vh] bg-[#090c10] text-white overflow-y-scroll perspective-[10px]">
			<Navbar />
			<Routes>
				<Route index path="/portfolio" element={<Home />} />
				<Route path="/work" element={<Work />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
