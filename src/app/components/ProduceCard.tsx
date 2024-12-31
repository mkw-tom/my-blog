import Image from "next/image";
import React from "react";

const ProduceCard = ({
	title,
	content,
	link,
}: { title: string; content: string; link: string }) => {
	return (
		<div className="card bg-base-100  image-full w-full min-w-56 md:w-[600px] shadow-xl">
			<figure>
				<Image src={link} width={600} height={300} alt="Shoes" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p>{content}</p>
				<div className="card-actions justify-end">
					<button type="button" className="btn">
						show now
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProduceCard;
