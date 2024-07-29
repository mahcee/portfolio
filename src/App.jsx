
import Nav from "../src/assets/components/Nav";
import Skills from "../src/assets/components/Skills";
import Projects from "../src/assets/components/Projects";
import About from "../src/assets/components/About";
import Contact from "../src/assets/components/Contact";
import Footer from "../src/assets/components/Footer";
import Hero from "../src/assets/components/Hero";

export default function App() {
	return (
		<>
			<Nav />
			 <Hero />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer /> 
		</>
	);
}
