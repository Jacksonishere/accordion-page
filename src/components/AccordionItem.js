import React from "react";
import { useState, useRef, useEffect } from "react";

import { FaChevronDown } from "react-icons/fa";

const AccordionItem = ({ title, content, hidden}) => {
	const contentRef = useRef();
	const [toggle, setToggle] = useState(false);

	useEffect( () => {
		if(hidden !== undefined){
			setToggle(true);
		}
	}, [hidden])

	return (
		<div
			onClick={(e) => {
				setToggle((toggle) => !toggle);
			}}
			className={toggle ? "accordion-item toggle" : "accordion-item"}>
			<button>
				{title}
				<FaChevronDown className="dropdown-icon" />
			</button>

			{/* <p ref={contentRef} style={{height: toggle ? contentRef.current.scrollHeight : "0px" }}>{content}</p> */}

			<div className="content" ref={contentRef} style={{ maxHeight: toggle ? contentRef.current.scrollHeight : "0px" }}>
				<p>{content}</p>
			</div>
		</div>
	);
};

export default AccordionItem;
