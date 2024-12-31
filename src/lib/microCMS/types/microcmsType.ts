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
