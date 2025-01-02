import { getBlogData } from "@/lib/microCMS/blogs";
import React from "react";
import BlogCard from "./components/BlogCard";
import BlogList from "./components/BlogList";
import Top from "./components/Top";

const page = async () => {
	const blogs = await getBlogData();
	return (
		<main className="h-auto sm:h-auto w-full mt-16 mb-32">
			<Top blogs={blogs} />
			<BlogList blogs={blogs} />
		</main>
	);
};

export default page;
