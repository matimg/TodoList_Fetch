import React, { useState, useEffect } from "react";
import { array } from "prop-types";

//create your first component
export function Home() {
	const [item, setItem] = useState("");
	const [itemList, setItemList] = useState([]);
	const [placeholder, setPlaceholder] = useState("Add a task");
	const urlApi = "https://assets.breatheco.de/apis/fake/todos/user/matias";

	useEffect(() => {
		getItems();
	}, []);

	let addItem = e => {
		e.preventDefault();
		if (item != "") {
			let newItem = {
				label: item,
				done: false
			};
			let itemsCopy = [...itemList];
			itemsCopy.push(newItem);
			setItemList(itemsCopy);
			updateItems(itemsCopy);
			setItem("");
		}
	};

	let removeItem = element => {
		let itemsCopy = [...itemList];
		setItemList(itemsCopy.filter(item => item !== element));
		updateItems(itemsCopy.filter(item => item !== element));
		if (itemList.length == 1) setPlaceholder("No tasks, add a task");
	};

	const getItems = async () => {
		try {
			const res = await fetch(urlApi);
			const data = await res.json();
			setItemList(data);
			if (data.length == 0) setPlaceholder("No tasks, add a task");
		} catch (error) {
			console.log(error);
		}
	};

	const updateItems = async updatedList => {
		let updatedListToSend = JSON.stringify(updatedList);
		let options = {
			method: "PUT",
			body: updatedListToSend,
			headers: {
				"Content-Type": "application/json"
			}
		};

		try {
			const res = await fetch(urlApi, options);
			const data = await res.json();
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	const removeItems = () => {
		let newItem = {
			label: "sample task",
			done: false
		};
		let itemsCopy = [];
		itemsCopy.push(newItem);
		setItemList(itemsCopy);
		updateItems(itemsCopy);
		setItem("");
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
							{element.label}
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
				<button
					className="btn btn-secondary"
					onClick={() => removeItems()}>
					Clean
				</button>
			</div>
		</div>
	);
}
