import FadeUp from "@/app/animations/FadeUp";
import type { ProductDataType } from "@/types/microcmsType";
import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }: { products: ProductDataType[] }) => {
	return (
		<FadeUp>
			<ul className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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
