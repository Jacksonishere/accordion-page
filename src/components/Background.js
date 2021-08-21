import React from "react";
import mobilepatternbg from "../images/bg-pattern-mobile.svg"
import mobileherobg from "../images/illustration-woman-online-mobile.svg"

const Background = () => {
	return (
		<div className="bg">
			<img className="bg-hero" src={mobileherobg} alt="background hero" />
			<img className="bg-blur" src={mobilepatternbg} alt="background blur" />
		</div>
	);
};

export default Background;
