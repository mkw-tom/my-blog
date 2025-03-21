import Fadein from "@/app/animations/Fadein";
import InfinityScroll from "@/app/animations/InfinityScroll";
import SlideIn from "@/app/animations/SlideIn";
import type { ProductDataType } from "@/types/microcmsType";
import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";
import {
	SiAuth0,
	SiDaisyui,
	SiDocker,
	SiFirebase,
	SiMongodb,
	SiMongoose,
	SiNextdotjs,
	SiNodedotjs,
	SiReact,
	SiRedux,
	SiSupabase,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
} from "react-icons/si";

const Top = ({ products }: { products: ProductDataType[] }) => {
	const items = [
		{ id: 1, tag: <SiTypescript className="text-2xl md:text-3xl" /> },
		{ id: 2, tag: <SiReact className="text-2xl md:text-3xl" /> },
		{ id: 3, tag: <SiNextdotjs className="text-2xl md:text-3xl" /> },
		{ id: 4, tag: <SiNodedotjs className="text-2xl md:text-3xl" /> },
		{ id: 5, tag: <SiRedux className="text-2xl md:text-3xl" /> },
		{ id: 6, tag: <SiMongodb className="text-2xl md:text-3xl" /> },
		{ id: 7, tag: <SiVercel className="text-2xl md:text-3xl" /> },
		{ id: 8, tag: <SiFirebase className="text-2xl md:text-3xl" /> },
		{ id: 9, tag: <SiSupabase className="text-2xl md:text-3xl" /> },
		{ id: 10, tag: <SiMongoose className="text-2xl md:text-3xl" /> },
		{ id: 12, tag: <SiTailwindcss className="text-2xl md:text-3xl" /> },
		{ id: 13, tag: <SiDaisyui className="text-2xl md:text-3xl" /> },
		{ id: 14, tag: <SiMongoose className="text-2xl md:text-3xl" /> },
		{ id: 15, tag: <SiAuth0 className="text-2xl md:text-3xl" /> },
		{ id: 16, tag: <SiDocker className="text-2xl md:text-3xl" /> },
	];

	return (
		<Fadein>
			<div>
				<SlideIn direction="right">
					<div className="h-72 md:h-96 flex mb-20 bg-gradient-to-t from-base-100 to-green-500">
						<div className="object-cover h-full sm:w-2/5 " />
						<img
							src={products[0].mainImage?.url}
							alt="Shoes"
							className="object-cover h-full flex-1 sm:clip-left-skew"
						/>
					</div>
				</SlideIn>

				<div className="absolute top-16 right-0 left-0 bg-opacity-70 w-full h-72 md:h-96 shadow-xl z-20 bg-black">
					<div className="relative flex justify-between p-10 md:p-20 h-full w-full">
						<div className="flex flex-col font-mono prose  text-gray-100 overflow-hidden">
							<h2 className="text-gray-100 ">個人開発</h2>
							<h4 className="text-gray-100">アプリ開発で身近な課題から解決</h4>
							<div className="w-1/2 md:w-3/5 overflow-hidden">
								<InfinityScroll direction="right">
									<ul className=" flex list-none gap-5">
										{items.map((data) => (
											<li className="w-6 h-6 md:w-9 md:h-9" key={data.id}>
												{data.tag}
											</li>
										))}
									</ul>
								</InfinityScroll>
								<InfinityScroll direction="left">
									<ul className=" flex list-none gap-5">
										{items.map((data) => (
											<li className="w-6 h-6 md:w-9 md:h-9" key={data.id}>
												{data.tag}
											</li>
										))}
									</ul>
								</InfinityScroll>
							</div>
						</div>

						<div className="absolute  bottom-10 right-10 md:bottom-12 md:right-20 flex flex-col items-center mt-auto gap-5 text-white">
							<p className="text-xs sm:text-sm text-center">GitHubを見る</p>
							<Link href="https://github.com/mkw-tom" target="blank">
								<button
									type="button"
									className="btn btn-sm md:btn-md btn-ghost bg-white bg-opacity-40"
								>
									<BsGithub className="text-2xl md:text-4xl " />
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Fadein>
	);
};

export default Top;
