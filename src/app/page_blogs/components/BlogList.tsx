"use client";
import FadeUp from "@/app/animations/FadeUp";
import type { BlogDataType } from "@/types/microcmsType";
import React, { useEffect, useState } from "react";
import { CgSearchFound } from "react-icons/cg";
import BlogCard from "./BlogCard";
import SearchArea from "./SearchArea";

const BlogList = ({ blogs }: { blogs: BlogDataType[] }) => {
	const [search, setSearch] = useState<string>("");
	const [blogData, setBlogData] = useState<BlogDataType[]>([]);
	const [filter, setFilter] = useState<"old" | "new">("new");

	useEffect(() => {
		const BlogsCopy = [...blogs];

		if (filter === "new") {
			const older = BlogsCopy.sort((a, b) =>
				new Date(a.publishedAt).getTime() > new Date(b.publishedAt).getTime()
					? -1
					: 1,
			);
			setBlogData([...older]);
			window.localStorage.setItem("filter", "new");
		} else if (filter === "old") {
			const filted = BlogsCopy.sort((a, b) =>
				new Date(a.publishedAt).getTime() < new Date(b.publishedAt).getTime()
					? -1
					: 1,
			);
			setBlogData(filted);
			window.localStorage.setItem("filter", "old");
		}

		if (search === "") {
			setBlogData(BlogsCopy);
		} else {
			const filterBlogs = BlogsCopy.filter((data) =>
				data.title.toLowerCase().includes(search.toLowerCase()),
			);
			setBlogData(filterBlogs);
		}
	}, [search, blogs, filter]);

	return (
		<FadeUp>
			<SearchArea setSearch={setSearch} setFilter={setFilter} filter={filter} />
			<div className="mx-3 md:mx-10">
				<ul className="hidden md:grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-evenly md:gap-9 lg:gap-12">
					{blogData.map((data) => (
						<div key={data.id} className="">
							<BlogCard data={data} />
						</div>
					))}
				</ul>
				<div className="block md:hidden overflow-x-auto">
					<table className="table bg-gradient-to-r to-green-500 from-base-300">
						{/* head */}
						<thead>
							<tr>
								{/* <th /> */}
								<th>タイトル</th>
								<th>更新日</th>
							</tr>
						</thead>
						<tbody>
							{blogData.map((e) => (
								<tr key={e.id}>
									{/* <th></th> */}
									<td className="flex flex-col justify-start">
										<span>{e.title}</span>
										<span className="badge badge-sm badge-outline">React</span>
									</td>
									<td>{new Date(e.publishedAt).toLocaleDateString()}</td>
								</tr>
							))}
							{/* row 1 */}
						</tbody>
					</table>
				</div>
				{blogData.length === 0 ? (
					<div className="h-72 flex items-center justify-center">
						Not found <CgSearchFound className="ml-1" />
					</div>
				) : (
					""
				)}
			</div>
		</FadeUp>
	);
};

export default BlogList;
