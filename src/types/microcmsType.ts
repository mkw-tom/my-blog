export interface BlogDataType {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	title: string;
	content: string;
	eyecatch: eyecatch | null;
	category: category | null;
}

interface eyecatch {
	url: string;
	height: string;
	width: string;
}

interface category {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	name: string;
}

export interface ProductDataType {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	name: string;
	mainImage: mainImage;
	GitHubLink: "https://github.com/mkw-tom/tekishoku-sinndann";
	appLink: "https://tekishoku-sinndann.vercel.app/";
	content: "「MBTI」と「スキル・志向性」に基づいて、AIがあなたの適職を診断してくれます。";
	technologies: [string];
	images: [mainImage];
}

interface mainImage {
	url: string;
	height: number;
	width: number;
}
