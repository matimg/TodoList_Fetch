import React, { useState } from "react";

//create your first component
export function Home() {
	const [item, setItem] = useState("");
	const [itemList, setItemList] = useState([]);
	let addItem = e => {
		e.preventDefault();
		console.log("hola");
	};
	const items = itemList.map((element, id) => (
		<li key={id} className="list-group-item it">
			{element}
		</li>
	));
	return (
		<div className="text-center mt-5">
			<p className="text-secondary display-1">todos</p>
			<div className="container w-50">
				<form onSubmit={addItem}>
					<ul className="list-group">
						<input
							type="text"
							className="list-group-item"
							onChange={() => setItem(event.target.value)}
						/>
						{itemList}
						<p
							className="list-group-item text-secondary d-flex float-left pl-3"
							style={{ fontSize: "12px" }}>
							{itemList.length} items left
						</p>
					</ul>
				</form>
			</div>
		</div>
	);
}
