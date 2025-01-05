import { getBlogData } from "@/lib/microCMS/blogs";
import type { BlogDataType } from "@/types/microcmsType";
import React from "react";
import Blog from "./components/Blog";
import RightBar from "./components/RightBar";

const page = async ({ params }: { params: Promise<{ title: string }> }) => {
	const blogs = await getBlogData();
	const { title } = await params;
	const decodeTitle = decodeURIComponent(title as string);

	const selectBlog = blogs.find(
		(data) => data.title === decodeTitle,
	) as BlogDataType;
	return (
		<main className="pt-16 bg-gradient-to-tr to-base-100 from-green-500">
			<div className="w-11/12 mx-auto mt-10 flex flex-col md:flex-row justify-between">
				<Blog blog={selectBlog} />
				<RightBar />
			</div>
		</main>
	);
};

export default page;
