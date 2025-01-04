import type { BlogDataType } from "@/types/microcmsType";
import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }: { products: BlogDataType[] }) => {
	return (
		<ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
			{products.map((data) => (
				<li key={data.id}>
					<ProductCard data={data} />
				</li>
			))}
		</ul>
	);
};

export default ProductList;
