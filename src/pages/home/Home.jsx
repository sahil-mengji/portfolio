import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import "./home.css";
export default function Home() {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};

	return (
		<>
			<div className="w-full min-h-[100vh] bg-[#090c10] ">
				<div className="  p-4 px-10 w-full flex justify-between items-center h-[120px] gap-[40px] ">
					<div className="text-2xl font-bold flex-1 flex gap-[10px] items-center">
						<div className=" nlogo h-[40px] w-[40px]"></div>
						<div>
							<p className="text-lg font-semibold ">Sahil Mengji</p>
							<p className="text-sm font-semibold  text-slate-500 ">
								Web Devloper • Designer
							</p>
						</div>
					</div>

					<div className="social-links flex-1 ">
						<Link>
							<FiGithub />
						</Link>
						<Link to="https://www.linkedin.com/in/sahil-mengji-432944276/">
							<FiLinkedin />
						</Link>
						<Link>
							<FiInstagram />
						</Link>
					</div>
				</div>
				<div className="grid-container flex justify-center mt-[20px]">
					<div className="bento-grid">
						<div className="hero">
							<div className="pimage h-[140px] w-[140px] rounded-full bg-red-400 mb-[20px]"></div>
							<div className="iam">
								<p className="mb-[10px]">Hello 👋 I'm Sahil</p>
								<div class="container ">
									<section class="animation">
										<div class="first">
											<div>UI/UX Designer </div>
										</div>
										<div class="second">
											<div>Web Developer</div>
										</div>
										<div class="third">
											<div>Graphic Designer</div>
										</div>
									</section>
								</div>
							</div>

							<p className="mt-[20px] text-[20px] text-[#ffffffae]">
								I am Sahil , an Enthusiastic 🌐 Web Devloper
								<br /> and 🎨 Designer . I Design , 💻 Code and Create modern
								user interfaces 📱
							</p>
						</div>

						<div class="map p-0">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121872.44426317657!2d76.75753822759164!3d17.33898834313616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc8c7455b824e57%3A0x44cbe3366957ed9f!2sKalaburagi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1705205253155!5m2!1sen!2sin"
								className="w-full h-full"
								title="map"
								allowfullscreen=""
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"
							></iframe>
						</div>

						<div className="quote">
							<Carousel
								responsive={responsive}
								swipeable={true}
								draggable={true}
								showDots={false}
								infinite={true}
								autoPlay={true}
								arrows={false}
								autoPlaySpeed={4000}
								keyBoardControl={true}
								customTransition="all 1"
								transitionDuration={1000}
								className="w-full h-full"
								dotListClass={"react-multi-carousel-dot-list"}
							>
								<div className="flex justify-center items-center h-full">
									<blockquote>
										<div>
											<div>" Be yourself; everyone else is already taken "</div>
											<p>- sahil mengji</p>
										</div>
									</blockquote>
								</div>
								<div className="flex justify-center items-center h-full">
									<blockquote>
										<div>
											<div>
												" You only live once, but if you do it right, once is
												enough ""
											</div>
											<p>- sahil mengji</p>
										</div>
									</blockquote>
								</div>
								<div className="flex justify-center items-center h-full">
									<blockquote>
										<div>
											<div>
												" You've gotta dance like there's nobody watching, Love
												like you'll never be hurt, Sing like there's nobody
												listening, And live like it's heaven on earth "
											</div>
											<p>- sahil mengji</p>
										</div>
									</blockquote>
								</div>
							</Carousel>
						</div>

						<div className="skills">
							<h1 className="div-heading">Skills</h1>
						</div>

						<div className="warning"></div>
						<div className="spotify"></div>
						<div className="work">
							<h1 className="div-heading">Skills</h1>
							<div className="scroll " style={{ "--t": "20s" }}>
								<div>
									<span>Responsive Web Design</span>
									<span>Prototyping</span>
									<span>Logo Designing</span>
									<span>Frontend Devlopment</span>
									<span>Backend Devlopment</span>
									<span>Prodduct Design</span>
									<span>Brand Design</span>
								</div>
								<div className="something">
									<span>Responsive Web Design</span>
									<span>Prototyping</span>
									<span>Logo Designing</span>
									<span>Frontend Devlopment</span>
									<span>Backend Devlopment</span>
									<span>Prodduct Design</span>
									<span>Brand Design</span>
								</div>
							</div>
						</div>
						<div className="social">
							{" "}
							<svg
								className="div4"
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="100"
								height="100"
								viewBox="0 0 30 30"
							>
								<path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
							</svg>{" "}
							<svg
								className="div3"
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="100"
								height="100"
								viewBox="0 0 50 50"
							>
								<path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
							</svg>
							<svg
								className="div2"
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="100"
								height="100"
								viewBox="0 0 24 24"
							>
								<path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
							</svg>
							<svg
								className="div1"
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="100"
								height="100"
								viewBox="0 0 50 50"
							>
								<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
							</svg>
						</div>
						<div className="contact"></div>
					</div>
				</div>
			</div>
		</>
	);
}
