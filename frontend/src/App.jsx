import { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [message, setMessage] = useState("");

	useEffect(() => {
		fetch("/api")
			.then((response) => response.text())
			.then((data) => setMessage(data));
	}, []);

	return <div>{message}</div>;
}

export default App;
