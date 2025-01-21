import React, { useState } from "react";

//create your first component
const semaforo = () => {
	const [luzVerde, setLuzVerde] = useState("green-light");
	const [luzAmarilla, setLuzAmarilla] = useState("yellow-light");
	const [luzRoja, setLuzRoja] = useState("red-light");
	const [stylesDefaults, setStylesDefaults] = useState(["green-light", "yellow-light", "red-light"]);

	const handleClick = (e) => {
		if (e.target.classList == stylesDefaults[0]) {
			setLuzVerde("green-light on");
			setLuzAmarilla(stylesDefaults[1]);
			setLuzRoja(stylesDefaults[2]);
		} else {
			setLuzVerde(stylesDefaults[0]);
		}
		if (e.target.classList == stylesDefaults[1]) {
			setLuzVerde(stylesDefaults[0]);
			setLuzAmarilla("yellow-light on");
			setLuzRoja(stylesDefaults[2]);
		} else {
			setLuzAmarilla(stylesDefaults[1]);
		}
		if (e.target.classList == stylesDefaults[2]) {
			setLuzVerde(stylesDefaults[0]);
			setLuzAmarilla(stylesDefaults[1]);
			setLuzRoja("red-light on");
		} else {
			setLuzRoja(stylesDefaults[2]);
		}
	};
	return (
		<>
			<div className="container-fluid top"></div>
			<div className="container d-flex justify-content-center">
				<div className="box d-flex flex-column align-items-center justify-content-center gap-1">
					<div className={luzVerde} onClick={handleClick}></div>
					<div className={luzAmarilla} onClick={handleClick}></div>
					<div className={luzRoja} onClick={handleClick}></div>
				</div>
			</div>
		</>
	);
};

export default semaforo;
