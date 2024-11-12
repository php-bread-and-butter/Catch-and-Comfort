import Link from "next/link";
import React from "react";

const Logo = () => {
	return (
		<Link href="/">
			<img src="images/logo.svg" alt="Logo" className="w-32" />
		</Link>
	);
};

export default Logo;
