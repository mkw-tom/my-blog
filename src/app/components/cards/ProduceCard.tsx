import Image from "next/image";
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
					<button type="button" className="btn bg-base-100 ">
						<FaArrowUpRightFromSquare />
						<span className="">show now</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProduceCard;
