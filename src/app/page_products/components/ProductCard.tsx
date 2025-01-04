import type { BlogDataType } from "@/types/microcmsType";
import Link from "next/link";
import React from "react";
import { BiLinkAlt } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const ProductCard = ({ data }: { data: BlogDataType }) => {
	return (
		<>
			<div className="card bg-gradient-to-br from-base-300 to-green-500  shadow-xl ">
				<div className="card-body ">
					<div className="flex justify-between">
						<h2 className="card-title">{data.title}</h2>
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
					<p>If a dog chews shoes whose shoes does he choose?</p>

					<div className="card-actions flex justify-end">
						<div className="badge badge-sm lg:badge-md badge-outline">
							Fashion
						</div>
						<div className="badge badge-sm lg:badge-md badge-outline">
							Products
						</div>
					</div>
				</div>
				<figure className="pb-3 px-3">
					<img src={data.eyecatch?.url} alt="Shoes " className="" />
				</figure>
				<div className="hidden md:flex card-end p-3 justify-end gap-2">
					<Link href="https://tekishoku-sinndann.vercel.app/" target="blank">
						<button type="button" className="btn btn-sm btn-success">
							<span>App</span>
							<BiLinkAlt />
						</button>
					</Link>
					<Link
						href="$https://github.com/mkw-tom/tekishoku-sinndann"
						target="blank"
					>
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
