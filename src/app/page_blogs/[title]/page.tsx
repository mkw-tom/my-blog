import { getBlogData } from "@/lib/microCMS/blogs";
import React from "react";

const page = async ({ params }: { params: Promise<{ title: string }> }) => {
	const blogs = await getBlogData();
	// const blogs = [
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
	// 		title: "ダミーデータ2",
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
	// 		title: "ダミーデータ3",
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
	// 		title: "ダミーデータ4",
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
	// 	}
	// ]

	const selectBlog = blogs.find(
		async (data) => data.title === (await params).title,
	);
	console.log("title");
	return (
		<div className="mt-32">
			<h1 className="text-white">{selectBlog?.title}</h1>
			<h1 className="text-white">{selectBlog?.content}</h1>
		</div>
	);
};

export default page;
