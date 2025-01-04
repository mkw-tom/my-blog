import type { BlogDataType } from "@/types/microcmsType";
import Link from "next/link";
import React from "react";
import { BiLinkAlt } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const ProductCard = ({ data }: { data: BlogDataType }) => {
	return (
		<>
			<div className="card bg-gradient-to-tr from-base-300 to-green-500  shadow-xl p-3 ">
				<div className="card-body ">
					<h2 className="card-title">{data.title}</h2>
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
				<figure>
					<img src={data.eyecatch?.url} alt="Shoes " className="" />
				</figure>
				<div className="card-end py-3 flex justify-end gap-2">
					<Link href="https://tekishoku-sinndann.vercel.app/" target="blank">
						<button type="button" className="btn btn-sm btn-success">
							<BiLinkAlt />
							<span>App</span>
						</button>
					</Link>
					<Link
						href="$https://github.com/mkw-tom/tekishoku-sinndann"
						target="blank"
					>
						<button type="button" className="btn btn-sm btn-default">
							<BsGithub />
							<span>Github</span>
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
