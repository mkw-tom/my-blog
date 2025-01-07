"use client";
import type { ProductDataType } from "@/types/microcmsType";
import Link from "next/link";
import React, { useState } from "react";
import { BiLinkAlt } from "react-icons/bi";
import { BsArrowRight, BsGithub } from "react-icons/bs";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

const ProductCard = ({ data }: { data: ProductDataType }) => {
	const imagesLength = data.images.length;
	const [count, setCount] = useState<number>(0);

	function slideNext() {
		if (count === data.images.length - 1) {
			return;
		}
		return setCount(count + 1);
	}

	function slidePrev() {
		if (count === 0) {
			return;
		}
		return setCount(count - 1);
	}
	return (
		<>
			<div className="bg-gradient-to-br from-base-300 to-green-500  shadow-xl ">
				<div className="card-body">
					<div className="flex justify-between">
						<h2 className="card-title">{data.name}</h2>
						<div className="flex md:hidden items-center gap-1">
							<Link
								href="https://tekishoku-sinndann.vercel.app/"
								target="blank"
							>
								<button type="button" className="btn btn-sm btn-success">
									<BiLinkAlt />
								</button>
							</Link>
							<Link
								href="$https://github.com/mkw-tom/tekishoku-sinndann"
								target="blank"
							>
								<button type="button" className="btn btn-sm btn-default">
									<BsGithub />
								</button>
							</Link>
						</div>
					</div>
					<p>{data.content}</p>

					<div className="w-full overflow-scroll pb-2">
						<div className="flex gap-2 mt-5">
							{data.technologies.map((tech) => (
								<div
									className="badge badge-sm lg:badge-md badge-outline"
									key={tech}
								>
									{tech}
								</div>
							))}
						</div>
					</div>
				</div>
				<figure className="relative pb-3 mx-3 overflow-hidden">
					<button
						type="button"
						className={`absolute top-1/3 -left-4 btn btn-ghost btn-circle z-40 duration-300 ${count === 0 ? "hidden" : ""}`}
						onClick={slidePrev}
					>
						<GrCaretPrevious className="text-2xl" />
					</button>
					<button
						type="button"
						className={`absolute top-1/3 -right-4 btn btn-ghost btn-circle z-40 ${count === imagesLength - 1 ? "hidden" : ""}`}
						onClick={slideNext}
					>
						<GrCaretNext className="text-2xl" />
					</button>
					<ul
						className="flex items-center  transition-all duration-200"
						style={{
							width: `calc(100%*${imagesLength})`,
							translate: `calc(-100%/6*${count})`,
						}}
					>
						{data.images.map((image) => (
							<li key={image.url}>
								<img src={image.url} alt="イメージ" className="" />
							</li>
						))}
					</ul>
				</figure>
				<div className="hidden md:flex card-end p-3 justify-end gap-2">
					<Link href={data.appLink} target="blank">
						<button type="button" className="btn btn-sm btn-success">
							<span>App</span>
							<BiLinkAlt />
						</button>
					</Link>
					<Link href={data.GitHubLink} target="blank">
						<button type="button" className="btn btn-sm btn-default">
							<span>Github</span>
							<BsGithub />
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
