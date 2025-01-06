import type { BlogDataType } from "@/types/microcmsType";
import Link from "next/link";
import React from "react";

const RightContent = ({ blogs }: { blogs: BlogDataType[] }) => {
	function titleLength(title: string) {
		if (title.length > 18) {
			return `${title.slice(0, 18)} ...`;
		}
		return title;
	}
	const recentBlogs = [...blogs]
		.sort((a, b) =>
			new Date(a.publishedAt).getTime() > new Date(b.publishedAt).getTime()
				? -1
				: 1,
		)
		.slice(0, 3);

	return (
		<div className="w-full md:w-1/4 h-auto flex flex-col gap-20 mt-20 md:mt-10 mb-20">
			<div className="h-full">
				<h2 className="text-center font-bold text-lg">最近の記事</h2>
				<div className="flex md:flex-col gap-3 mt-2 overflow-scroll ">
					{recentBlogs.map((data) => (
						<Link href={`/page_blogs/${data.id}`} key={data.id}>
							<div className="card w-48 h-52 md:w-full md:h-full p-3 bg-base-300">
								<div className="card-title pb-1 h-12">
									<h3 className="text-sm border-l-2 border-l-green-500 pl-1 mb-auto">
										{titleLength(data.title)}
									</h3>
								</div>
								<img
									src={data.eyecatch?.url}
									alt="blog-image"
									className="mt-auto w-full h-24 object-cover md:h-auto rounded-sm"
								/>
								<p className="text-xs text-end pt-2 mt-auto ">
									投稿日：{new Date(data.publishedAt).toLocaleDateString()}
								</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default RightContent;
