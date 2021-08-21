import AccordionList from "./components/AccordionList";
import Background from "./components/Background";

function App() {
	return (
		<main className="accordion">
			<Background />
			<section className="accordion-content">
				<h1>faq</h1>
				<AccordionList />
			</section>
		</main>
	);
}

export default App;
