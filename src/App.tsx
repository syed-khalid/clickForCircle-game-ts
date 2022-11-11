import { MouseEvent, useState } from "react";
import "./App.css";

type TPoint = {
	x: number;
	y: number;
};

function App() {
	const [points, setPoints] = useState<TPoint[]>([]);

	function handlePlaceCircle({ clientX, clientY }: MouseEvent<HTMLDivElement>) {
		setPoints([
			...points,
			{
				x: clientX,
				y: clientY,
			},
		]);
		console.log(points);
	}

	function handleUndo() {
		const newPoints = [...points];
		newPoints.pop();
		setPoints(newPoints);
	}

	return (
		<div className='App'>
			<button onClick={handleUndo}>Undo last click</button>
			<div className='points-container' onClick={handlePlaceCircle}>
				{points.map((point, index) => (
					<div
						className='point'
						key={index}
						style={{ left: point.x - 5 + "px", top: point.y - 5 + "px" }}></div>
				))}
			</div>
		</div>
	);
}

export default App;

