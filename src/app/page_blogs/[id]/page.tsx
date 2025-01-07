import { getBlogData } from "@/lib/microCMS/api";
import type { BlogDataType } from "@/types/microcmsType";
import React from "react";
import Blog from "./components/Blog";
import LeftContent from "./components/LeftContent";
import RightContent from "./components/RightContent";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
	const blogs = await getBlogData();
	const { id } = await params;
	const decodeId = decodeURIComponent(id as string);

	const selectBlog = blogs.find((data) => data.id === decodeId) as BlogDataType;
	return (
		<main className="pt-16 pb-32 bg-gradient-to-tr to-base-100 from-green-500">
			<div className="w-11/12 mx-auto mt-10 flex flex-col md:flex-row justify-around gap-5">
				<LeftContent />
				<Blog blog={selectBlog} />
				<RightContent blogs={blogs} />
			</div>
		</main>
	);
};

export default page;
