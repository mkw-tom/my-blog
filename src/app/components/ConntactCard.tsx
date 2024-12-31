import React from "react";
import { BsInstagram, BsTwitterX } from "react-icons/bs";

const ConntactCard = () => {
	return (
		<div className="card bg-base-100 image-full h-[450px] w-[10px] md:w-full md:h-56 shadow-xl">
			<figure>
				<img
					src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
					alt="Shoes"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title hidden md:block">Conntact</h2>
				<p className="hidden md:block">ぜひ、私と繋がってください！</p>
				<div className="card-actions justify-end">
					<div className=" btn btn-circle btn-neutral text-center">
						<BsTwitterX />
					</div>
					<div className=" btn btn-circle btn-neutral text-center">
						<BsInstagram />
					</div>

					{/* <button type="button" className="btn btn-primary">
            Buy Now
          </button> */}
				</div>
			</div>
		</div>
	);
};

export default ConntactCard;
