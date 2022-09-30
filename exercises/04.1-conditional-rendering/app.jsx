import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const colorClasses = {
	red: "alert-danger",
	orange: "alert-warning",
};

const Alert = (props) => {
	return (
		<div className={`alert ${colorClasses[props.color]}`} role="alert">
			{props.text}
		</div>
	);
};

Alert.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string,
};

ReactDOM.render(
	<div>
		<Alert text="OMG! Something really bad has happended!" color="red" />
		<Alert text="Well, it is not that bad after all!" color="orange" />
	</div>,
	document.querySelector("#myDiv")
);
