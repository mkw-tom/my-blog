import Fadein from "@/app/animations/Fadein";
import SlideIn from "@/app/animations/SlideIn";
import type { BlogDataType } from "@/types/microcmsType";
import Link from "next/link";
import React from "react";
import { SiQiita, SiZenn } from "react-icons/si";

const Top = ({ blogs }: { blogs: BlogDataType[] }) => {
	return (
		<Fadein>
			<div>
				<SlideIn direction="right">
					<div className="h-72 md:h-96 flex mb-20 bg-gradient-to-t from-base-100 to-green-500">
						<div className="object-cover h-full sm:w-2/5 " />
						<img
							src={blogs[0].eyecatch?.url}
							alt="Shoes"
							className="object-cover h-full flex-1 sm:clip-left-skew"
						/>
					</div>
				</SlideIn>

				<div className="absolute top-16 right-0 left-0 bg-opacity-70 w-full h-72 md:h-96 shadow-xl z-20 bg-black">
					<div className="flex justify-between p-10 md:p-10 lg:p-20 h-full w-full ">
						<div className="flex flex-col font-mono prose  text-gray-100">
							<h2 className="text-gray-100 ">ブログ一覧</h2>
							<ul className=" flex flex-col">
								<li className="badge md:badge-lg badge-outline sm:w-40">
									テック系
								</li>
								<li className="badge md:badge-lg badge-outline sm:w-36">
									個人開発
								</li>
								<li className="badge md:badge-lg badge-outline sm:w-32">
									資格勉強
								</li>
								<li className="badge md:badge-lg badge-outline sm:w-28">
									リリース
								</li>
								<li className="badge md:badge-lg badge-outline sm:w-24">
									時事ネタ
								</li>
							</ul>
						</div>
						<div className="flex flex-col mt-auto gap-5 items-end text-white">
							<h2 className="text-sm md:text-md">Qiita・Zennで更新中</h2>
							<div className="flex items-center gap-5">
								<Link href={"https://qiita.com/mkw-tom"}>
									<button
										type="button"
										className="btn btn-ghost btn-sm md:btn-md bg-white bg-opacity-40"
									>
										<SiQiita className="text-2xl md:text-4xl" />
									</button>
								</Link>
								<Link href={"https://zenn.dev/mkwtom"}>
									<button
										type="button"
										className="btn btn-ghost btn-sm md:btn-md bg-white bg-opacity-40"
									>
										<SiZenn className="text-2xl md:text-4xl" />
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fadein>
	);
};

export default Top;
