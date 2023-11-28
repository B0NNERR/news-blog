import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";

function App() {
	return (
		<>
			<div className="container">
				<Header />
			</div>
			<div className="container">
				<Main />
			</div>
		</>
	);
}

export default App;
