import type { BlogDataType } from "@/types/microcmsType";
import Link from "next/link";
import React from "react";

const BlogTable = ({ data }: { data: BlogDataType }) => {
	return (
		<Link href={`/page_blogs/${data.id}`} key={data.id}>
			<tr>
				<td className="flex flex-col justify-start">
					<span>{data.title}</span>
					<div className="flex items-center justify-between mt-2">
						<span className="badge badge-sm badge-outline">
							{data.category?.name}
						</span>
						<span className="text-xs">
							投稿日：{new Date(data.publishedAt).toLocaleDateString()}
						</span>
					</div>
				</td>
				<th>
					<img
						src={data.eyecatch?.url}
						alt="イメージ"
						className="w-20 h-10 object-cover"
					/>
				</th>
			</tr>
		</Link>
	);
};

export default BlogTable;
