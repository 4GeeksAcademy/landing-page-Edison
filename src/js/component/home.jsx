import React from "react";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
import Jumbotron from "./jumbotron.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	let menu = [
		{ label: "Home"},
		{ label: "Contact Us"},
		{ label: "About Us"},
		{label : "Portafolio"}
	  ];

	return (
		<div>
			<Navbar items={menu} logo={"Start Boostrap"}/>
			<Jumbotron  title="My first card" 
						description="Etiam posuere quam ac quam. Maecenas aliquet accumsan leo. Nullam dapibus fermentum ipsum. Etiam quis quam. Integer lacinia. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Integer vulputate sem a nibh rutrum consequat. Maecenas lorem. Pellentesque pretium" 
						btnTitle="Click Here"/>
			<div className=" d-flex justify-content-center align-items-center mt-5">
				<div className="row col-11">
					<div className="col-12 col-md-3 mb-3">
						<Card imgUrl={"https://picsum.photos/id/231/850/850"} 
							title="My first card" 
							description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" 
							btnTitle="Click Here"  />
					</div>
					<div className="col-12 col-md-3 mb-3">
						<Card imgUrl={"https://picsum.photos/id/238/850/850"} 
							title="My first card" 
							description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" 
							btnTitle="Click Here"  />
					</div>
					<div className="col-12 col-md-3 mb-3">
						<Card imgUrl={"https://picsum.photos/id/239/850/850"} 
							title="My first card" 
							description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" 
							btnTitle="Click Here"  />
					</div>
					<div className="col-12 col-md-3 mb-3">
						<Card imgUrl={"https://picsum.photos/id/233/850/850"} 
							title="My first card" 
							description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" 
							btnTitle="Click Here"  />
					</div>
				</div>
			</div>
			<Footer description="Copyrigth 2020 Edi Javier"/>
		</div>
	);
};

export default Home;
