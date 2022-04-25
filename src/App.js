import Timeline from "./components/timeline/Timeline";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Widgets from "./components/widget/Widgets";

function App() {
	return (
		<div className="app">
			{/* サイドバー */}
			<Sidebar />

			{/* タイムライン */}
			<Timeline />

			{/* ウィジェット */}
			<Widgets />
		</div>
	);
}

export default App;
