import { getBlogData } from "@/lib/microCMS/blogs";
import Header from "./components/Header";
import Main from "./components/Main";

// import Image from "next/image";

export default async function Home() {
	await getBlogData();
	return (
		<div className="h-auto">
			<Main />
		</div>
	);
}
