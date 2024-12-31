"use client";
import type { BlogDataType } from "@/lib/microCMS/types/microcmsType";
import React from "react";
import { useDarkMode } from "../state/useDarkModeContext";
import BlogCard from "./BlogCard";
import ConntactCard from "./ConntactCard";
import ProduceCard from "./ProduceCard";

const Main = ({ blogData }: { blogData: BlogDataType[] }) => {
	const { darkmode } = useDarkMode();
	return (
		<main
			className="h-auto w-full py-32 bg-base-300"
			data-theme={darkmode ? "luxury" : "light"}
		>
			<div className="mx-3 md:mx-10 mt-10">
				<div className="w-full h-full flex md:flex-col gap-5 md:gap-20">
					<div className=" flex flex-col md:flex-row gap-10 justify-bettween w-3/5 md:w-full ">
						<ProduceCard
							title={"ブログ"}
							content={"ブログ一覧"}
							link={blogData[0]?.eyecatch?.url as string}
						/>
						<ProduceCard
							title={"個人開発"}
							content={"これまで開発してきたプロダクトをご紹介"}
							link={"/341BA731-0DCD-469D-A8E0-5DD37125D170_1_105_c.jpeg"}
						/>
					</div>
					<ConntactCard />
				</div>
			</div>
		</main>
	);
};

export default Main;
