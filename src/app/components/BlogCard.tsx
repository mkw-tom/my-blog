import type { BlogDataType } from "@/lib/microCMS/types/microcmsType";
import React from "react";

const BlogCard = ({ data }: { data: BlogDataType }) => {
	return (
		<div className="card bg-base-100 w-96 shadow-xl">
			<figure>
				<img src={data.eyecatch?.url} alt="Shoes" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{data.title}
					<div className="badge badge-secondary">NEW</div>
				</h2>
				<p>{data.title}</p>
				<div className="card-actions justify-end">
					<div className="badge badge-outline">{data.category?.name}</div>
					<div className="badge badge-outline">Products</div>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
