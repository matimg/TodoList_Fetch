import React, { useState } from "react";
import { array } from "prop-types";

//create your first component
export function Home() {
	const [item, setItem] = useState("");
	const [itemList, setItemList] = useState([]);
	let addItem = e => {
		e.preventDefault();
		let itemsCopy = [...itemList];
		itemsCopy.push(item);
		setItemList(itemsCopy);
		setItem("");
	};

	let removeItem = element => {
		let itemsCopy = [...itemList];
		setItemList(itemsCopy.filter(item => item !== element));
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
						className="list-group-item text-secondary w-100"
						onChange={() => setItem(event.target.value)}
						value={item}
					/>
				</form>
				<ul className="list-group">
					{itemList.map((element, id) => (
						<li
							key={id}
							className="list-group-item text-left text-secondary item">
							{element}
							<i
								type="button"
								className="fa fa-times boton"
								onClick={() => removeItem(element)}></i>
						</li>
					))}
					<p
						className="list-group-item text-secondary d-flex float-left pl-3"
						style={{ fontSize: "12px" }}>
						{itemList.length} items left
					</p>
				</ul>
			</div>
		</div>
	);
}
