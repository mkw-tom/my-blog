import type { BlogDataType, ProductDataType } from "@/types/microcmsType";
import React from "react";
import SlideIn from "../animations/SlideIn";
import { useDarkMode } from "../state/useDarkModeContext";
import Top from "./Top";
import ConntactCard from "./cards/ConntactCard";
import ProduceCard from "./cards/ProduceCard";
import SkillsCard from "./cards/SkillsCard";

const Main = ({
	blogData,
	products,
}: { blogData: BlogDataType[]; products: ProductDataType[] }) => {
	return (
		<main className="h-auto w-full mt-16">
			<Top />
			<div className="flex flex-col gap-10 mx-3 md:mx-10 pt-10 pb-56">
				<SkillsCard />
				<SlideIn direction="left">
					<div className="w-full h-full flex md:flex-col gap-5 md:gap-10">
						{/* <div className=" flex flex-col md:flex-row gap-10 justify-bettween w-3/5 md:w-full "> */}
						{/* <div className="w-full grid grid-flow-row grid-cols-2 md:grid-cols-3 bg-blue-500"> */}
						<div className="grid grid-cols-1  md:grid-cols-2 w-10/12 gap-10">
							<ProduceCard
								title={"ブログ"}
								content={"ブログ一覧"}
								link={blogData[0]?.eyecatch?.url as string}
							/>
							<ProduceCard
								title={"個人開発"}
								content={"これまで開発してきたプロダクトをご紹介"}
								link={products[0]?.images[0].url}
							/>
						</div>
						<ConntactCard />
					</div>
				</SlideIn>
				{/* <SkillsCard /> */}
				{/* </div> */}
			</div>
		</main>
	);
};

export default Main;
