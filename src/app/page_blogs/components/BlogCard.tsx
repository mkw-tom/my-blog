import type { BlogDataType } from "@/types/microcmsType";
import Link from "next/link";
import React from "react";

const BlogCard = ({ data }: { data: BlogDataType }) => {
	function titleLength(title: string) {
		if (title.length >= 17) {
			const str = title.substring(0, 17);
			return `${str}...`;
		}
		return title;
	}

	function contentLength(DOMContent: string) {
		const parser = new DOMParser();
		const content =
			parser.parseFromString(DOMContent, "text/html").body.textContent || "";
		if (content.length >= 30) {
			const str = content.substring(0, 30);
			return `${str}...`;
		}
		return content;
	}
	return (
		<Link href={`/page_blogs/${data.title}`}>
			<div className="card bg-base-300 bg-gradient-to-br to-base-300 from-green-500  h-auto shadow-xl">
				<figure className="relative block h-40 lg:h-[150px] w-full bg-gray-900">
					<div className="absolute top-3 right-2 badge badge-sm bg-red-500">
						New
					</div>
					<img
						src={data.eyecatch?.url}
						alt="Shoes"
						className="block object-cover"
					/>
				</figure>
				<div className="card-body h-56">
					<h2 className="card-title text-md">{titleLength(data.title)}</h2>
					<p className="">{contentLength(data.content)}</p>
					<div className="card-actions justify-end">
						<div className="badge badge-outline">{data.category?.name}</div>
						<div className="badge badge-outline">Products</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default BlogCard;
