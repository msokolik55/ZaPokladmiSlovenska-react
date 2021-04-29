import "./App.css";
import React, { useMemo } from "react";
import { useState, useEffect } from "react";

function App() {
	const [selectedID, setSelectedID] = useState(0);
	const [item, setItem] = useState([]);
	const [drawerShow, setDrawerShow] = useState(false);

	const titles = useMemo(() => {
		return [
			{
				id: 0,
				value: "1st title",
				ytLink: "https://www.youtube.com/embed/I_Xv360Ihl0",
				description: "Some data"
			},
			{
				id: 1,
				value: "2nd title",
				ytLink: "https://www.youtube.com/embed/m8R6LM4evDw",
				description: "Some data about 2nd"
			},
			{
				id: 2,
				value: "3rd title",
				ytLink: "https://www.youtube.com/embed/fyX82Nqg56I",
				description: "Some data from somewhere"
			},
			{
				id: 3,
				value: "Promo",
				ytLink: "https://www.youtube.com/embed/KnDQOdk_gIE",
				description: "Finally promo video"
			}
		];
	}, []);

	useEffect(() => {
		let selected = titles.filter((obj) => obj.id === selectedID);
		setItem(selected);
	}, [selectedID, titles]);

	const changeTitle = (idTarget) => {
		setSelectedID(idTarget);
	};

	return (
		<div className={"wrapper"}>
			<div className={"Drawer"} style={{ left: drawerShow ? 0 : -120 }}>
				<p className={"closebtn"} onClick={() => setDrawerShow(false)}>
					&times;
				</p>
				{titles.map((obj) => (
					<p
						className={"Drawer-item"}
						key={obj.id}
						onClick={() => changeTitle(obj.id)}>
						{obj.id + 1}. option
					</p>
				))}
			</div>
			<p
				className={"closebtn"}
				onClick={() => setDrawerShow(true)}
				style={{ fontSize: 30 }}>
				☰
			</p>
			<div className={"Content"}>
				{item.map((obj, i) => (
					<div key={i}>
						<h1>{obj.value}</h1>

						<iframe
							title={obj.value}
							width="80%"
							height="315"
							src={obj.ytLink}
							frameBorder="0"
							style={{ margin: "auto", display: "block" }}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen></iframe>

						<p>{obj.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
