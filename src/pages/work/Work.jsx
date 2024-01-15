import React from "react";
import postgrad from "./postgrad.jpg";
import svpm from "./svpm.gif";
import svpm2 from "./svpm2.gif";
import vijaylaxmi from "./vijaylaxmi.gif";
import free from "./free.gif";
import notes from "./notes.png";
import "./work.css";
import ace from "./ace.png";
import algorythm from "./algorythm.png";
import ims from "./ims.png";
import imsui from "./imsui.png";
import postgradlogo from "./postgrad.png";
import postgradui from "./postgradui.png";
export default function Work() {
	return (
		<div className="w-full pt-[100px] flex justify-center px-5">
			<div className="max-w-[1200px] w-full">
				<div className="w-full h-[100px] flex  items-center  text-[40px] font-semibold">
					Projects
				</div>
				<div className="bg-white h-[2px] w-full my-[20px]"></div>
				<div className="w-full h-[100px] flex items-center  text-[30px] font-semibold">
					🌐 Websites
				</div>
				<div className="bg-[#474747] h-[1px] w-full my-[10px]"></div>

				<div className="work-grid web">
					<div>
						<img src={postgrad} alt="postgrad" />
						<h2>Postgrad Pinnacle</h2>

						<p>
							Postgrad pinnacle is a resource and information managment system
							of PostGraduation Students{" "}
						</p>
						<h3>
							<p>HTML </p>
							<p>CSS </p>
							<p>JavaScript </p>
						</h3>
					</div>
					<div>
						<img src={vijaylaxmi} /> <h2>Vijay Laxmi Industries</h2>
						<p>A Sass Website for a metal Hardchrome plating industry </p>
						<h3>
							<p>HTML </p>
							<p>CSS </p>
							<p>JavaScript </p>
						</h3>
					</div>
					<div>
						<img src={notes} />
						<h2>Notes App</h2>

						<p>
							A Simple and Beautiful localised Note Taking App built with react
						</p>
						<h3>
							<p>HTML </p>
							<p>CSS </p>
							<p>JavaScript </p>
							<p>React </p>
						</h3>
					</div>
					<div>
						<img src={free} />
						<h2>Freelance Town</h2>

						<p>Freelance town is a freelancing Platform for the students</p>
						<h3>
							<p>HTML </p>
							<p>CSS </p>
							<p>JavaScript </p>
						</h3>
					</div>
					<div>
						<img src={svpm2} />
						<h2>SVPM 2.0</h2>

						<p>
							It is a Saas website for a School ,consisting of multiple pages
							and content
						</p>
						<h3>
							<p>HTML </p>
							<p>CSS </p>
							<p>JavaScript </p>
						</h3>
					</div>
					<div>
						<img src={svpm} />
						<h2>SVPM</h2>

						<p>
							It is a Saas website for a School ,consisting of multiple pages
							and content
						</p>
						<h3>
							<p>HTML </p>
							<p>CSS </p>
							<p>JavaScript </p>
						</h3>
					</div>

					<div className="flex items-center justify-center">
						<h2>
							<b className="text-[50px]">✈️ </b>
							<br />
							More Projects <br />
							On the way -{">"}
						</h2>
					</div>
				</div>

				<div className="w-full h-[100px] flex  items-center  text-[30px] font-semibold">
					📱 UI/UX - Designs
				</div>
				<div className="bg-[#474747] h-[1px] w-full my-[10px]"></div>

				<div className="work-grid ui">
					<div>
						<img src={postgradui} />
						<h2>Postgrad Pinnacle</h2>

						<p>
							Postgrad pinnacle is a resource and information managment system
							of PostGraduation Students{" "}
						</p>
					</div>
					<div>
						<img src={imsui} />
						<h2>Student IMS</h2>

						<p>
							Student IMS is a resource and information managment system for all
							types of Schools and Colleges
						</p>
					</div>
					<div className="flex items-center justify-center">
						<h2>
							<b className="text-[50px]">✈️ </b>
							<br />
							More Projects <br />
							On the way -{">"}
						</h2>
					</div>
				</div>

				<div className="w-full h-[100px] flex  items-center  text-[30px] font-semibold">
					❇️ Graphic Designs / Logo Designs
				</div>
				<div className="bg-[#474747] h-[1px] w-full my-[10px]"></div>
				<div className="work-grid ]">
					<div>
						<img src={ace} />
						<h2>ACE -Logo</h2>
						<p>
							ACE(Association of Computer Engineers) is a student body of
							Computer Science Students
						</p>
					</div>
					<div>
						<img src={algorythm} />
						<h2>Algorythm-Logo</h2>

						<p>Algorythm is a name for Tech Company</p>
					</div>
					<div>
						<img src={postgradlogo} />
						<h2>PostGrad - Logo</h2>

						<p>
							Postgrad pinnacle is a resource and information managment system
							of PostGraduation Students{" "}
						</p>
					</div>
					<div>
						<img src={ims} />
						<h2>Student IMS</h2>

						<p>
							Student IMS is a resource and information managment system for all
							types of Schools and Colleges
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
