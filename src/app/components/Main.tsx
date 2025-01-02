"use client";
import type { BlogDataType } from "@/types/microcmsType";
import React from "react";
import SlideIn from "../animations/SlideIn";
import { useDarkMode } from "../state/useDarkModeContext";
import Top from "./Top";
import ConntactCard from "./cards/ConntactCard";
import ProduceCard from "./cards/ProduceCard";
import SkillsCard from "./cards/SkillsCard";

const Main = ({ blogData }: { blogData: BlogDataType[] }) => {
	const { darkmode } = useDarkMode();

	return (
		<main
			className="h-auto w-full mt-16"
			data-theme={darkmode ? "black" : "lifo"}
		>
			<Top />
			<div className="flex flex-col gap-10 mx-3 md:mx-10 pt-10 pb-56">
				<SkillsCard />
				<div className="w-full h-full flex md:flex-col gap-5 md:gap-10">
					{/* <div className=" flex flex-col md:flex-row gap-10 justify-bettween w-3/5 md:w-full "> */}
					{/* <div className="w-full grid grid-flow-row grid-cols-2 md:grid-cols-3 bg-blue-500"> */}
					<SlideIn direction="left">
						<div className="grid grid-cols-1  md:grid-cols-2 w-10/12 gap-10">
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
					</SlideIn>
					<ConntactCard />
				</div>
				{/* <SkillsCard /> */}
				{/* </div> */}
			</div>
		</main>
	);
};

export default Main;
