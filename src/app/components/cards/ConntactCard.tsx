import React from "react";
import { BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs";
import { SiGmail, SiQiita, SiWantedly, SiZenn } from "react-icons/si";

const ConntactCard = () => {
	return (
		<div className="card bg-gradient-to-b from-green-500 to-base-200 bg-opacity-30  w-1/5 md:w-[600px] shadow-xl">
			{/* <figure>
				<img
					src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
					alt="Shoes"
				/>
			</figure> */}
			<div className="card-body w-full hidden md:block ">
				<h2 className="card-title">繋がる</h2>
				<p className="hidden md:block">
					フォロー&お問い合わせお待ちしています😻
				</p>
				{/* <div className="card-actions justify-end"> */}

				{/* <button type="button" className="btn btn-primary">
            Buy Now
          </button> */}
				{/* </div> */}
			</div>
			<div className="flex flex-col items-center md:flex-row px-5 py-5 md:pb-10 gap-3 ">
				<div className=" btn btn-squea btn-md md:btn-lg text-center">
					<BsTwitterX />
				</div>
				<div className=" btn btn-squea btn-md md:btn-lg text-center">
					<BsInstagram />
				</div>
				<div className=" btn btn-squea btn-md md:btn-lg text-center">
					<BsGithub />
				</div>
				<div className=" btn btn-squea btn-md md:btn-lg text-center">
					<SiQiita fontSize={20} />
				</div>
				<div className=" btn btn-squea btn-md md:btn-lg text-center">
					<SiZenn />
				</div>
				<div className=" btn btn-squea btn-md md:btn-lg text-center">
					<SiWantedly />
				</div>
				<div className=" btn btn-squea btn-md md:btn-lg text-center">
					<SiGmail />
				</div>
			</div>
		</div>
	);
};

export default ConntactCard;
