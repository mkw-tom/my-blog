import Link from "next/link";
import React from "react";
import DarkModeButton from "./DarkModeButton";
import SideBar from "./SideBar";

const Header = () => {
	return (
		<header className="w-full h-16 fixed top-0 bg-opacity-85 bg-base-300">
			<div className="w-full h-full px-5 flex justify-between items-center">
				<SideBar />
				<div className="block md:hidden" />
				<Link href={"/"}>
					<h1 className="text-2xl font-mono h-full font-bold">TOM CODE</h1>
				</Link>
				<ul className="hidden items-center gap-10 md:flex">
					<Link href="/blogs">Blog</Link>
					<Link href="/blogs">Products</Link>
					<Link href="/blogs">Conntact</Link>
				</ul>
				<DarkModeButton />
			</div>
		</header>
	);
};

export default Header;
