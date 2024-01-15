import React from "react";
import "./navigation.css";
import { NavLink } from "react-router-dom";
export default function Navbar() {
	return (
		<div className="fixed top-[40px] w-full left-0 flex justify-center z-20">
			<nav className=" navigator flex gap-1  bg-[#090c10] border-solid-2px px-1 py-1 border-[#30363d] rounded-full  ">
				<NavLink to="/portfolio" path="/portfolio">
					<div>Home</div>
				</NavLink>
				<NavLink to="/work" path="/work">
					<div>Projects</div>
				</NavLink>
				<NavLink to="/about" path="/about">
					<div>About</div>
				</NavLink>
				<NavLink to="/contact" path="/contact">
					<div>Contact</div>
				</NavLink>
			</nav>
		</div>
	);
}
