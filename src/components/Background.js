import React from "react";
import mobilepatternbg from "../images/bg-pattern-mobile.svg"
import mobileherobg from "../images/illustration-woman-online-mobile.svg"

const Background = () => {
	return (
		<div className="bg">
            <div className="bg-top">
                <img className="bg-hero" src={mobileherobg} alt="background hero" />
            </div>
			
			<img className="bg-blur" src={mobilepatternbg} alt="background blur" />
		</div>
	);
};

export default Background;
