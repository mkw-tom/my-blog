import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProduceCard = ({
	title,
	content,
	link,
}: { title: string; content: string; link: string }) => {
	return (
		<div className="card bg-base-100  image-full w-full shadow-xl ">
			<figure>
				<Image src={link} width={600} height={300} alt="Shoes" />
			</figure>
			<div className="card-body">
				<h2 className="card-title text-md">{title}</h2>
				<p>{content}</p>
				<div className="card-actions justify-end">
					<Link href={title === "ブログ" ? "/page_blogs" : "/pages_products"}>
						<button
							type="button"
							className="btn btn-default hover:bg-green-500 "
						>
							<FaArrowUpRightFromSquare />
							<span className="">show now</span>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProduceCard;
