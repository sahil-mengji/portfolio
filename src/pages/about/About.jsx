import React from "react";
import "./about.css";
export default function About() {
	return (
		<div className="w-full pt-[100px] flex justify-center px-5">
			<div className="max-w-[1200px] w-full">
				<div className="w-full h-[100px] flex  items-center  text-[40px] font-semibold">
					✨About Me
				</div>
				<div className="bg-white h-[2px] w-full my-[20px]"></div>

				<div className="about-grid">
					<div>
						<h3>🔅 Bio</h3>
						<div className="bg-[#474747] h-[1px] w-full my-[15px]"></div>
						<p>
							I am Sahil , an Enthusiastic 🌐 Web Devloper and 🎨 Designer . I
							Design , 💻 Code and Create modern user interfaces 📱
						</p>
					</div>
					<div>
						<h3>👨‍💻 Skills</h3>
					</div>
					<div>
						<h3>⚙️ Services</h3>
					</div>
					<div>
						<h3>📃 Curriculum vitae</h3>
					</div>
					<div>
						<h3>⌛ Experience</h3>
					</div>
					<div>
						<h3>📕 Education</h3>
					</div>
				</div>
			</div>
		</div>
	);
}
