import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


import TrafficLight from "./TrafficLight";
//create your first component


const Home = () => {
	return (
		<div className=" container-fluid bg-secondary min-vh-100 d-flex justify-content-center">
			<TrafficLight></TrafficLight>
		</div>
	);
};

export default Home;
