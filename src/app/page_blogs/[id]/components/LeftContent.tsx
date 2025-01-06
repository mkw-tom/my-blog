import Link from "next/link";
import React from "react";
import { SiQiita, SiZenn } from "react-icons/si";

const LeftContent = () => {
	return (
		<div className="hidden md:flex w-2/12 h-56 flex-col items-center">
			<div className="fixed top-56">
				<h4 className="text-center pb-3">Qiita・Zennで発信中</h4>
				<ul className=" w-full flex flex-col lg:flex-row items-center justify-center gap-5">
					<Link href={"https://qiita.com/mkw-tom"} target="blank">
						<button
							type="button"
							className="btn btn-lg bg-white bg-opacity-40 border-none"
						>
							<SiQiita className="text-4xl" />
						</button>
					</Link>
					<Link href={"https://zenn.dev/mkwtom"} target="blank">
						<button
							type="button"
							className="btn btn-lg bg-white bg-opacity-40 border-none"
						>
							<SiZenn className="text-4xl" />
						</button>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default LeftContent;
