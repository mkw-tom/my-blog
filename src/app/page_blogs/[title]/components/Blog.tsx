import type { BlogDataType } from "@/types/microcmsType";

const Blog = ({ blog }: { blog: BlogDataType }) => {
	return (
		<div className="w-full md:w-3/4 prose bg-base-200 shadow-xl p-5 md:p-10 rounded-sm">
			<h2 className="">{blog?.title}</h2>
			<img src={blog?.eyecatch?.url as string} alt="eycatch" />
			<ul className="flex list-none justify-start gap-3">
				<li className="badge">{blog.category?.name}</li>
			</ul>
			<p className="flex gap-3  -mt-5 justify-end px-3 text-sm">
				<span>最終更新日: {new Date(blog.updatedAt).toLocaleDateString()}</span>
				<span>投稿日: {new Date(blog.publishedAt).toLocaleDateString()}</span>
			</p>
			<div
				className="mt-20"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{ __html: blog.content }}
			/>
		</div>
	);
};

export default Blog;
