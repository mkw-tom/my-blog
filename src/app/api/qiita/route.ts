export const dynamic = "force-static";

export async function GET() {
	const res = await fetch("https://qiita.com/api/v2/authenticated_user/items", {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.QIITA_ACCESS_TOKEN}`,
		},
	});
	const data = await res.json();

	return Response.json({ data });
}
