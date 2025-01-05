// import SlideIn from "@/app/animations/SlideIn";
import React from "react";
import { BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs";
import { SiGmail, SiQiita, SiWantedly, SiZenn } from "react-icons/si";

const infos = [
	{ id: 1, tag: <BsTwitterX /> },
	{ id: 2, tag: <BsInstagram /> },
	{ id: 3, tag: <BsGithub /> },
	{ id: 4, tag: <SiQiita fontSize={20} /> },
	{ id: 5, tag: <SiZenn /> },
	{ id: 6, tag: <SiWantedly /> },
	{ id: 7, tag: <SiGmail /> },
];

const ConntactCard = () => {
	return (
		<div className="card bg-gradient-to-b from-green-500 to-base-200 bg-opacity-30  w-1/5 md:w-[600px] shadow-xl">
			{/* <SlideIn direction="right"> */}
			<div className="card-body w-full hidden md:block ">
				<h2 className="card-title">繋がる</h2>
				<p className="hidden md:block">
					フォロー&お問い合わせお待ちしています😻
				</p>
			</div>
			<div className="flex flex-col items-center md:flex-row px-5 py-5 md:pb-10 gap-3 ">
				{infos.map((e) => (
					<div
						className=" btn btn-squea btn-md md:btn-lg text-center"
						key={e.id}
					>
						{e.tag}
					</div>
				))}
			</div>
			{/* </SlideIn> */}
		</div>
	);
};

export default ConntactCard;
