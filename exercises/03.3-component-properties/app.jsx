import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

export const BootstrapCard = (props) => {
	// 1) replace the hard-coded image, description, link, etc. With their property variable.
	return (
		<>
		<div className="card m-5">
			<img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.buttonUrl} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
		</>
	);
};
BootstrapCard.propTypes = {
	title: PropType.string,
	imageUrl: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string
};

ReactDOM.render(
	<>
		<BootstrapCard
			title="Paul Mccartney"
			imageUrl="https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true"
			description="Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter and musician who gained worldwide fame with the Beatles."
			buttonUrl="https://en.wikipedia.org/wiki/Paul_McCartney"
			buttonLabel="Go to wikipedia"
		/>
		<BootstrapCard
			title="Bob Dylan"
			imageUrl="https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true"
			description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
			buttonUrl="https://en.wikipedia.org/wiki/Bob_Dylan"
			buttonLabel="Go to wikipedia"
		/>
	</>,
	document.querySelector("#myDiv")
);
