import Link from "next/link";
import React from "react";
import DarkModeButton from "./DarkModeButton";
import SideBar from "./SideBar";

const Header = () => {
	return (
		<header
			className="w-full h-16 fixed top-0 z-50 border-t-2 bg-base-100  border-t-green-500"
			// data-theme='black'
		>
			<div className="w-full h-full px-5 flex justify-between items-center">
				<SideBar />
				<div className="block md:hidden" />
				<Link href={"/"}>
					<h1 className="text-2xl font-mono h-full font-bold -sm ">Tomu.dev</h1>
				</Link>
				<ul className="hidden items-center gap-10 md:flex">
					<Link href="/blogs">ブログ</Link>
					<Link href="/blogs">個人開発</Link>
					<Link href="/blogs">繋がる</Link>
				</ul>
				<DarkModeButton />
			</div>
		</header>
	);
};

export default Header;
