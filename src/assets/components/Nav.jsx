
export default function Nav() {
	return (
		<nav className="w-full px-5 sm:px-10 py-5 shadow-xl 
						backdrop-blur-lg fixed top-0 z-10">
			<div className="container flex flex-col lg:flex-row
							gap-5 justify-between w-full 
							items-center max-w-5xl mx-auto">
				<h3 className="text-3xl text-[#602EFE] font-bold">
			Mercy Mwende
				</h3>
				<ul className="flex gap-3 align-center p-1 flex-wrap">
					<li>
						<a className="text-sm sm:text-base px-2 lg:px-5 
									py-2 transition rounded hover:text-white 
									hover:bg-[#602EFE]"
						href="#about">
						About
						</a>
					</li>
					<li>
						<a className="text-sm sm:text-base px-2 lg:px-5 py-2 
									transition rounded hover:text-white 
									hover:bg-[#602EFE]"
							href="#skills">
							Skills
						</a>
					</li>
					<li>
						<a className="text-sm sm:text-base px-2 lg:px-5 py-2 
									transition rounded hover:text-white 
									hover:bg-[#602EFE]"
							href="#projects">
							Projects
						</a>
					</li>
					<li>
						<a className="text-sm sm:text-base px-2 lg:px-5 py-2 
									transition rounded hover:text-white 
									hover:bg-[#602EFE]"
							href="#contact">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

