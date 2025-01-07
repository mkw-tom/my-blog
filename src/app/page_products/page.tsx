import { getProductsData } from "@/lib/microCMS/api";
import React from "react";
import ProductList from "./components/ProductList";
import Top from "./components/Top";

const page = async () => {
	const products = await getProductsData();
	console.dir(products);
	// const products = [
	// 	{
	// 		id: "111",
	// 		createdAt: "2202020",
	// 		updatedAt: "951375",
	// 		publishedAt: "34187634",
	// 		revisedAt: "3817498",
	// 		title: "ダミーデータ１",
	// 		content:
	// 			"これはダミーです。これはダミーです。これはダミーです。これはダミーです。これはダミーです。これはダミーです。",
	// 		eyecatch: {
	// 			url: "/341BA731-0DCD-469D-A8E0-5DD37125D170_1_105_c.jpeg",
	// 			width: "500",
	// 			height: "300",
	// 		},
	// 		category: {
	// 			id: "111",
	// 			createdAt: "111",
	// 			updatedAt: "111",
	// 			publishedAt: "111",
	// 			revisedAt: "111",
	// 			name: "111",
	// 		},
	// 	},
	// 	{
	// 		id: "222",
	// 		createdAt: "2202020",
	// 		updatedAt: "951375",
	// 		publishedAt: "34187634",
	// 		revisedAt: "3817498",
	// 		title: "ダミーデータ１",
	// 		content:
	// 			"これはダミーです。これはダミーです。これはダミーです。これはダミーです。これはダミーです。これはダミーです。",
	// 		eyecatch: {
	// 			url: "/341BA731-0DCD-469D-A8E0-5DD37125D170_1_105_c.jpeg",
	// 			width: "500",
	// 			height: "300",
	// 		},
	// 		category: {
	// 			id: "222",
	// 			createdAt: "111",
	// 			updatedAt: "111",
	// 			publishedAt: "111",
	// 			revisedAt: "111",
	// 			name: "111",
	// 		},
	// 	},
	// 	{
	// 		id: "333",
	// 		createdAt: "2202020",
	// 		updatedAt: "951375",
	// 		publishedAt: "34187634",
	// 		revisedAt: "3817498",
	// 		title: "ダミーデータ１",
	// 		content:
	// 			"これはダミーです。これはダミーです。これはダミーです。これはダミーです。これはダミーです。これはダミーです。",
	// 		eyecatch: {
	// 			url: "/341BA731-0DCD-469D-A8E0-5DD37125D170_1_105_c.jpeg",
	// 			width: "500",
	// 			height: "300",
	// 		},
	// 		category: {
	// 			id: "333",
	// 			createdAt: "111",
	// 			updatedAt: "111",
	// 			publishedAt: "111",
	// 			revisedAt: "111",
	// 			name: "111",
	// 		},
	// 	},
	// 	{
	// 		id: "444",
	// 		createdAt: "2202020",
	// 		updatedAt: "951375",
	// 		publishedAt: "34187634",
	// 		revisedAt: "3817498",
	// 		title: "ダミーデータ１",
	// 		content:
	// 			"これはダミーです。これはダミーです。これはダミーです。これはダミーです。これはダミーです。これはダミーです。",
	// 		eyecatch: {
	// 			url: "/341BA731-0DCD-469D-A8E0-5DD37125D170_1_105_c.jpeg",
	// 			width: "500",
	// 			height: "300",
	// 		},
	// 		category: {
	// 			id: "444",
	// 			createdAt: "111",
	// 			updatedAt: "111",
	// 			publishedAt: "111",
	// 			revisedAt: "111",
	// 			name: "111",
	// 		},
	// 	},
	// ];

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
