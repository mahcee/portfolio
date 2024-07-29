
export default function About() {
	return (
		<section
			id="about"
			className="px-10 w-full flex flex-col lg:flex-row py-20 
					align-center bg-[#F0F8FF] max-w-5xl mx-auto">
			<div className="flex-1">
				<img src=
""
					alt="About"
					className="w-full h-full bg-cover"/>
			</div>
			<div className="flex-1 flex flex-col justify-center
							items-center gap-5 px-6">
				<div>
					<h2 className="text-center text-[#602EFE]
								text-5xl font-bold">
						About Me :
					</h2>
				</div>
				<p>
					I am a full Stack
			 developer...
				</p>
				<p>
					I am a passionate  taught developer
					(which is quite a subjective thing as i learnt from
					teachers on youtube so does that really counts?
					idk). I am having an experience of about 6 months
					and had a deep understanding of creating web products.
				</p>
			</div>
		</section>
	);
}
