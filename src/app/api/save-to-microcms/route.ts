import { addBlogData } from "@/lib/microCMS/api";
import { getQiitaBlogs } from "@/lib/qiita/getBlog";
import type { BlogDataType } from "@/types/microcmsType";
import type { QiitaBlogType } from "@/types/qiitaType";

export const config = { runtime: "edge" };

// rendered_body: <h2 data-sourcepos="1:1-1:15">\n' +
// '<span id="はじめに" class="fragment"></span><a href="#%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB"><i class="fa fa-link"></i></a>はじめに</h2>\n' +
// '<p data-sourcepos="2:1-2:68">この度、「MBTI適職診断」をリリースいたします🎉</p>\n',
// coediting: false,
// comments_count: 0,
// created_at: '2024-12-07T22:36:23+09:00',
// group: null,
// id: '6b6915fa84857ae973d0',
// likes_count: 1,
// private: false,
// reactions_count: 0,
// stocks_count: 0,
// tags: [Array],
// title: ' 【個人開発】「MBTI適職診断」をリリースしました🎉',
// updated_at: '2024-12-07T22:37:17+09:00',
// url: 'https://qiita.com/mkw-tom/items/6b6915fa84857ae973d0',
// user: [Object],
// page_views_count: 286,
// team_membership: null,
// organization_url_name: null,
// slide: false

export async function POST() {
	try {
		// const posts = await fetchQiitaPosts();
		const posts = await getQiitaBlogs();

		// 必要に応じてデータを加工し、MicroCMSに保存
		for (let i = 0; i < posts.length; i++) {
			const post = posts[i];
			await saveToMicroCMS({
				id: post.id,
				createdAt: post.created_at,
				updatedAt: post.updated_at,
				publishedAt: post.created_at,
				revisedAt: post.created_at,
				title: post.title,
				content: post.rendered_body,
				eyecatch: {
					// url: extractFirstImageSrc(post.rendered_body),
					url: "ghiehheheh",
					width: "300",
					height: "100",
				},
				category: {
					id: post.id,
					createdAt: String(new Date()),
					updatedAt: String(new Date()),
					publishedAt: String(new Date()),
					revisedAt: String(new Date()),
					name: "",
				},
			});
		}

		return new Response(
			JSON.stringify({ message: "Data saved successfully" }),
			{
				status: 200,
				headers: { "Content-Type": "application/json" },
			},
		);
	} catch (error) {
		console.error("Error:", error);
		return new Response(JSON.stringify({ error: "faildfetch" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}

// const extractFirstImageSrc = (html: string) => {
//   // 正規表現で最初の <img> タグの src 属性を取得
//   const imgRegex = /<img[^>]*src=["'](https?:\/\/[^"']+)["']/;
//   const match = html.match(imgRegex);
//   return match ? match[1] : null; // 最初の画像URLを返す。なければ null
// };

// const fetchQiitaPosts = async () => {
//   const response = await fetch('', {
//     headers: {
//       Authorization: `Bearer ${process.env.QIITA_ACCESS_TOKEN}`,
//     },
//   });
//   if (!response.ok) {
//     throw new Error('Failed to fetch Qiita posts');
//   }
//   return await response.json();
// };

const saveToMicroCMS = async (post: BlogDataType) => {
	const serviceDomain = process.env.NEXT_PUBLIC_SERVICE_DOMAIN;
	const blogsEndPoint = process.env.NEXT_PUBLIC_BLOGS_ENDPOINT;
	const res = await fetch(
		`https://${serviceDomain}.microcms.io/api/v1/${blogsEndPoint}}`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_API_KEY as string,
			},
			body: JSON.stringify(post),
		},
	);
	// const res = await fetch('https://blog-original-tutorial.microcms.io/api/v1/blogs', {
	//   method: 'POST',
	//   headers: {
	//     'Content-Type': 'application/json',
	//     'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_API_KEY as string,
	//   },
	//   body: JSON.stringify(post),
	// });
	console.log(res);
	//  await addBlogData(post)
	// console.log(post)
	// if (!res.ok) {
	//   // console.log(res)
	//   throw new Error(`Failed to save post to MicroCMS: ${res.statusText}`);
	// }
};
