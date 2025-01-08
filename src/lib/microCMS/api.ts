import { createClient } from "microcms-js-sdk";
import type { BlogDataType, ProductDataType } from "../../types/microcmsType";

const serviceDomain = process.env.NEXT_PUBLIC_SERVICE_DOMAIN as string;
const apiKey = process.env.NEXT_PUBLIC_API_KEY as string;
const blogsEndPoint = process.env.NEXT_PUBLIC_BLOGS_ENDPOINT as string;
const productsEndPoint = process.env.NEXT_PUBLIC_PRODUCTS_ENDPOINT as string;

export const getBlogData = async (): Promise<BlogDataType[]> => {
	const client = createClient({
		serviceDomain: serviceDomain,
		apiKey: apiKey,
	});

	const response = await client.getList({
		endpoint: blogsEndPoint,
	});
	// console.log(response.contents)

	return response.contents;
};

export const getProductsData = async (): Promise<ProductDataType[]> => {
	const client = createClient({
		serviceDomain: serviceDomain,
		apiKey: apiKey,
	});

	const response = await client.getList({
		endpoint: productsEndPoint,
	});

	return response.contents;
};

export const addBlogData = async (blog: BlogDataType) => {
	const client = createClient({
		serviceDomain: serviceDomain,
		apiKey: apiKey,
	});

	const response = await client.create({
		endpoint: blogsEndPoint,
		content: blog,
	});
	console.log(response);

	return response;
};
