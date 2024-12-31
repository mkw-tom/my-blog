import Link from "next/link";
import React from "react";
import { MdMenu } from "react-icons/md";

const SideBar = () => {
	return (
		<div className="drawer fixed left-0 md:hidden">
			<input id="my-drawer" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content">
				{/* Page content here */}
				<label
					htmlFor="my-drawer"
					aria-label="A-label"
					className="btn btn-ghost drawer-button"
				>
					<MdMenu className="text-xl" />
				</label>
			</div>
			<div className="drawer-side">
				<label
					htmlFor="my-drawer"
					aria-label="close sidebar"
					className="drawer-overlay"
				/>
				<ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
					{/* Sidebar content here */}
					<Link href={"/"}>Blogs</Link>
					<Link href={"/"}>Products</Link>
					<Link href={"/"}>Conntact</Link>
				</ul>
			</div>
		</div>
	);
};

export default SideBar;
