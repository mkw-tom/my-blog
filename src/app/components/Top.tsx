import React from "react";
import Fadein from "../animations/Fadein";

const Top = () => {
	return (
		<Fadein>
			<div className="h-[450px] md:h-96  text-center flex flex-col md:flex-row justify-around items-center bg-gradient-to-tr from-base-100 to-green-500">
				{/* <div className='h-72 w-1/3 bg-yellow-500 bg-opacity-50 absolute left-0 top-16 z-30' /> */}
				{/* <Image src={'/5B83C74C-53CB-450E-A1DC-45FDE62B03B9_1_105_c.jpeg'} width={100} height={100}  alt="profile"  className='h-72 w-1/3 object-cover'/> */}

				<h1 className="text-xl md:text-3xl font-mono tracking-widest bg-base-100 bg-opacity-50 py-2 px-5 rounded-sm font-bold border-2 border-green-500 mt-auto md:mt-0">
					Tomu.dev
				</h1>

				<div className=" mt-auto text-xs md:text-lg mockup-code w-[350px] h-[250px] md:w-[500px] md:h-[350px] flex flex-col items-start bg-black bg-opacity-60 ">
					{/* <pre data-prefix="1">
            <code><span className='text-red-500'>import</span> <span className='text-orange-400'>tomu</span> <span className='text-red-500'>from</span>  <span className='text-green-400'>'./tomu.dev'</span>;</code>
          </pre> */}
					<pre data-prefix="1">
						<code>
							<span className="text-red-500">##</span>{" "}
							<span className="text-blue-500">Profile</span>
						</code>
					</pre>
					<pre data-prefix="2">
						<code>- From: Okinawa in Japan 🏝️</code>
					</pre>
					<pre data-prefix="4">
						<code>- Job: Student Engineer 🧑‍💻</code>
					</pre>
					<pre data-prefix="3">
						<code>- Age: 21</code>
					</pre>
					<pre data-prefix="5">
						<code>- Learn: TypeScript,React,Next.js etc.</code>
					</pre>
					<pre data-prefix="6">
						<code>
							<br />
						</code>
					</pre>
					<pre data-prefix="7">
						<code>
							<span className="text-red-500">##</span>{" "}
							<span className="text-blue-500">Hobbies</span>
						</code>
					</pre>
					<pre data-prefix="8">
						<code>- coffee ☕️</code>
					</pre>
					<pre data-prefix="9">
						<code>- music 🎧</code>
					</pre>
					<pre data-prefix="10">
						<code>- fashion 🧥</code>
					</pre>
					<pre data-prefix="11">
						<code>- handball 🤾</code>
					</pre>
				</div>
			</div>
		</Fadein>
	);
};

export default Top;
