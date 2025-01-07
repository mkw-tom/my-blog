import { getBlogData, getProductsData } from "@/lib/microCMS/api";
import Header from "./components/Header";
import Main from "./components/Main";

// import Image from "next/image";

export default async function Home() {
	const blogdata = await getBlogData();
	const products = await getProductsData();
	return (
		<div className="h-auto ">
			<Main blogData={blogdata} products={products} />
		</div>
	);
}
