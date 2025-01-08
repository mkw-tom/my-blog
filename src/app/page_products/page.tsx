import { getProductsData } from "@/lib/microCMS/api";
import React from "react";
import ProductList from "./components/ProductList";
import Top from "./components/Top";

const page = async () => {
	const products = await getProductsData();

	return (
		<div className="h-auto sm:h-auto w-full mt-16 mb-32">
			<Top products={products} />
			<div className="w-11/12 mx-auto">
				<ProductList products={products} />
			</div>
		</div>
	);
};

export default page;
