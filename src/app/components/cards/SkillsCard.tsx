"use client";
import { motion } from "motion/react";
import type React from "react";
import { useState } from "react";
import {
	SiAmazondynamodb,
	SiAuth0,
	SiDaisyui,
	SiDocker,
	SiExpress,
	SiFirebase,
	SiFramer,
	SiJsonwebtokens,
	SiMongodb,
	SiMongoose,
	SiMui,
	SiNextdotjs,
	SiNodedotjs,
	SiOpenai,
	SiReact,
	SiReacthookform,
	SiSemanticui,
	SiShadcnui,
	SiSupabase,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
	SiVuedotjs,
	SiZod,
} from "react-icons/si";

const front = [
	{ id: 1, tag: <SiTypescript className="text-4xl" /> },
	{ id: 2, tag: <SiReact className="text-4xl" /> },
	{ id: 3, tag: <SiNextdotjs className="text-4xl" /> },
	{ id: 4, tag: <SiVuedotjs className="text-4xl" /> },
];
const back = [
	{ id: 1, tag: <SiTypescript className="text-4xl" /> },
	{ id: 2, tag: <SiNextdotjs className="text-4xl" /> },
	{ id: 3, tag: <SiNodedotjs className="text-4xl" /> },
	{ id: 4, tag: <SiExpress className="text-4xl" /> },
];

const db = [
	{ id: 4, tag: <SiMongodb className="text-4xl" /> },
	{ id: 5, tag: <SiMongoose className="text-4xl" /> },
	{ id: 1, tag: <SiSupabase className="text-4xl" /> },
	{ id: 2, tag: <SiFirebase className="text-4xl" /> },
	{ id: 3, tag: <SiAmazondynamodb className="text-4xl" /> },
];
const infra = [
	{ id: 1, tag: <SiVercel className="text-4xl" /> },
	{ id: 2, tag: <SiDocker className="text-4xl" /> },
];

const uiux = [
	{ id: 1, tag: <SiTailwindcss className="text-4xl" /> },
	{ id: 2, tag: <SiDaisyui className="text-4xl" /> },
	{ id: 3, tag: <SiMui className="text-4xl" /> },
	{ id: 4, tag: <SiShadcnui className="text-4xl" /> },
	{ id: 5, tag: <SiSemanticui className="text-4xl" /> },
	{ id: 6, tag: <SiFramer className="text-4xl" /> },
];

const other = [
	{ id: 1, tag: <SiReacthookform className="text-4xl" /> },
	{ id: 2, tag: <SiZod className="text-4xl" /> },
	{ id: 3, tag: <SiAuth0 className="text-4xl" /> },
	{ id: 5, tag: <SiJsonwebtokens className="text-4xl" /> },
	{ id: 6, tag: <SiOpenai className="text-4xl" /> },
];

interface optionType {
	id: number;
	tag: React.JSX.Element;
}
const SkillsCard = () => {
	const [option, setoption] = useState<optionType[]>(front || []);

	function changeOption(arr: optionType[]): void {
		setoption(arr);
	}

	return (
		<div className="card bg-gradient-to-tl from-green-500 to-base-200 bg-opacity-30  w-full md:w-[600px] shadow-xl">
			{/* <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure> */}
			<div className="card-body w-full">
				<h2 className="card-title ">触った技術</h2>
				<div
					role="tablist"
					className="tabs tabs-bordered tabs-xs sm:tabs-sm lg:tabs-md "
				>
					<button
						type="button"
						className="tab tab-active font-bold"
						onClick={() => changeOption(front)}
					>
						Front
					</button>
					<button
						type="button"
						className="tab font-bold"
						onClick={() => changeOption(back)}
					>
						Back
					</button>
					<button
						type="button"
						className="tab font-bold"
						onClick={() => changeOption(db)}
					>
						DB
					</button>
					<button
						type="button"
						className="tab font-bold"
						onClick={() => changeOption(infra)}
					>
						Infra
					</button>
					<button
						type="button"
						className="tab font-bold"
						onClick={() => changeOption(uiux)}
					>
						UIUX
					</button>
					<button
						type="button"
						className="tab font-bold"
						onClick={() => changeOption(other)}
					>
						Other
					</button>
				</div>

				{/* <p className="hidden md:block text-base-100">
            まだまだ学習中d
          </p> */}
				{/* <div className="card-actions justify-end"> */}

				{/* <button type="button" className="btn btn-primary">
              Buy Now
            </button> */}
				{/* </div> */}
			</div>
			<div className="w-full px-10 pb-10  overflow-scroll">
				<div className="flex w-auto justify-start gap-5 md:gap-10 ">
					{option.map((e) => (
						<div className="w-10 h-10" key={e.id}>
							{e.tag}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SkillsCard;
