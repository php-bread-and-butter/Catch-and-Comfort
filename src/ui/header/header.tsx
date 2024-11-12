import React from "react";
import Logo from "./logo";
import SearchInput from "./search-input";
import TopBarNav from "./top-bar-nav";

const Header = () => {
	return (
		<header className="py-4 shadow-sm bg-white">
			<div className="container flex items-center justify-between">
				<Logo />
				<SearchInput />
				<TopBarNav />
			</div>
		</header>
	);
};

export default Header;
