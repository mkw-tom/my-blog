import FadeUp from "@/app/animations/FadeUp";
import type { BlogDataType } from "@/types/microcmsType";
import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }: { products: BlogDataType[] }) => {
	return (
		<FadeUp>
			<ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
				{products.map((data) => (
					<li key={data.id}>
						<ProductCard data={data} />
					</li>
				))}
			</ul>
		</FadeUp>
	);
};

export default ProductList;
