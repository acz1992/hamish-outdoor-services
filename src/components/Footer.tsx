import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer: React.FC = () => {
	return (
		<>
			<footer>
				<div className="footer max-w-full px-4 sm:px-6 bg-primaryGreen border-t border-b py-30 text-white">
					{/* Top Area */}
					<div className="flex justify-around py-2 md:py-4 border-t border-gray-200 ">
						{/* Website Links */}
						<div className="px-4">
							<h6 className="text-white text-xl font-bold mb-2">
								LINKS
							</h6>
							<div className="flex justify-center">
								<div className="w-9 border-b-2 border-white mb-4"></div>
							</div>
							<ul className="text-md ">
								<li className="mb-2">
									<HashLink
										to="#"
										className=" hover:text-gray-900  transition duration-250 ease-in-out"
									>
										About
									</HashLink>
								</li>
								<li className="mb-2">
									<HashLink
										to="#"
										className="text-white hover:text-gray-900  transition duration-250 ease-in-out"
									>
										Services
									</HashLink>
								</li>
								<li className="mb-2">
									<HashLink
										to="#"
										className="text-white hover:text-gray-900 transition duration-250 ease-in-out"
									>
										Contact
									</HashLink>
								</li>
							</ul>
						</div>

						{/* Social Media */}
						<div className="text-center  font-bold uppercase text-white">
							<div className="text-xl mb-2">
								Social Media Links
							</div>
							<div className="flex justify-center">
								<div className="w-24 border-b-2 border-white mb-4"></div>
							</div>

							<div className="text-md font-medium mb-4">
								Follow me on Facebook
							</div>
							<div className="mx-auto text-center mt-2">
								<ul className="flex justify-center mb-4 md:mb-0">
									{/* 	<li>
										<Link
											to="#"
											className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
											aria-label="Twitter"
										>
											<svg
												className="w-8 h-8 fill-current"
												viewBox="0 0 32 32"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
											</svg>
										</Link>
									</li> */}
									<li className="ml-4">
										<Link
											to="https://www.facebook.com/HamishsOutdoorServices"
											className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
											aria-label="Facebook"
										>
											<svg
												className="w-8 h-8 fill-primaryGreen hover:bg-gray-900 hover:rounded-full"
												viewBox="0 0 32 32"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
											</svg>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="px-4">
						<div className=" px-4 mx-auto text-center py-2">
							<div className="w-full text-sm text-gray-200 font-semibold py-1 flex gap-5 justify-center">
								All rights reserved &copy;{" "}
								{new Date().getFullYear()}
								<HashLink
									to="https://github.com/acz1992"
									className=" hover:text-gray-900"
								>
									Adam Zdan-Michajlowicz
								</HashLink>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
export default Footer;
