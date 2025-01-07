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
					<button
						type="button"
						className="btn btn-ghost text-2xl font-mono h-full font-bold "
					>
						Tomu.dev
					</button>
				</Link>
				<ul className="hidden items-center gap-10 md:grid grid-cols-3">
					<Link href="/">
						<button type="button" className="btn btn-ghost">
							トップ
						</button>
					</Link>
					<Link href="/page_blogs">
						<button type="button" className="btn btn-ghost">
							ブログ
						</button>
					</Link>
					<Link href="/page_products">
						<button type="button" className="btn btn-ghost">
							個人開発
						</button>
					</Link>
				</ul>
				<DarkModeButton />
			</div>
		</header>
	);
};

export default Header;
