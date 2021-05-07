import React, { useState } from "react";
import { array } from "prop-types";

//create your first component
export function Home() {
	const [item, setItem] = useState("");
	const [itemList, setItemList] = useState([]);
	const [placeholder, setPlaceholder] = useState("No tasks, add a task");
	let addItem = e => {
		e.preventDefault();
		if (item != "") {
			let itemsCopy = [...itemList];
			itemsCopy.push(item);
			setItemList(itemsCopy);
			setItem("");
			setPlaceholder("");
		}
	};

	let removeItem = element => {
		let itemsCopy = [...itemList];
		setItemList(itemsCopy.filter(item => item !== element));
		if (itemList.length == 1) setPlaceholder("No tasks, add a task");
		else setPlaceholder("");
	};

	return (
		<div className="text-center mt-5">
			<p className="display-1" style={{ color: "#e4dfe0" }}>
				todos
			</p>
			<div className="container w-50">
				<form onSubmit={addItem}>
					<input
						type="text"
						className="list-group-item text-secondary pl-5 w-100"
						onChange={() => setItem(event.target.value)}
						placeholder={placeholder}
						value={item}
					/>
				</form>
				<ul className="list-group">
					{itemList.map((element, id) => (
						<li
							key={id}
							className="list-group-item text-left text-secondary pl-5 h-100 item">
							{element}
							<i
								type="button"
								className="fa fa-times boton"
								onClick={() => removeItem(element)}></i>
						</li>
					))}
					<p
						className="list-group-item text-secondary d-flex float-left pl-3 h-100"
						style={{ fontSize: "12px" }}>
						{itemList.length} item left
					</p>
				</ul>
			</div>
		</div>
	);
}
