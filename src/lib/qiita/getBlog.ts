import type { QiitaBlogType } from "@/types/qiitaType";

export async function getQiitaBlogs(): Promise<QiitaBlogType[]> {
	const res = await fetch("https://qiita.com/api/v2/authenticated_user/items", {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.QIITA_ACCESS_TOKEN}`,
		},
		next: { revalidate: 3600 },
	});

	const data = await res.json();
	console.log(data);
	return data;
}
