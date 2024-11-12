import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Breadcrumb = () => {
	return (
		<div className="container py-4 flex items-center gap-3">
			<Link href="/" title="Home" className="text-primary text-base">
				<FontAwesomeIcon icon={faHome} size="xs" />
			</Link>
			<span className="text-sm text-gray-400">
				<FontAwesomeIcon icon={faChevronRight} />
			</span>
			<p className="text-gray-600 font-medium">Shop</p>
		</div>
	);
};

export default Breadcrumb;
