"use client";
import type React from "react";
import { useState } from "react";
import { BiFilter, BiSearch } from "react-icons/bi";

const SearchArea = ({
	setSearch,
	setFilter,
	filter,
}: {
	setSearch: React.Dispatch<React.SetStateAction<string>>;
	setFilter: React.Dispatch<React.SetStateAction<"old" | "new">>;
	filter: "old" | "new";
}) => {
	const [searchOpen, setSearchOpen] = useState(false);

	function searchBlogs(word: string) {
		setSearch(word);
	}
	function openSearchBar() {
		setSearchOpen(!searchOpen);
	}
	function chooseFilter(choose: "old" | "new") {
		setFilter(choose);
	}
	return (
		<>
			<button
				type="button"
				className="btn fixed bottom-20 md:top-0 right-7 md:right-20 w-16 h-16 md:w-auto shadow-2xl border-4 bg-opacity-60 border-green-500 z-50 md:btn-ghost rounded-full md:rounded-sm"
				onClick={openSearchBar}
			>
				<span className="hidden md:block font-bold">記事を検索</span>
				<BiSearch />
			</button>
			<div
				className={` ${
					searchOpen ? "fixed" : "hidden"
				} top-16 right-0 left-0 z-50 bg-base-200  h-36 shadow-xl p-5`}
			>
				<div className="flex items-center ">
					<label
						htmlFor="auto-focus-input"
						className="input input-sm sm:input-md input-success  flex items-center flex-1"
					>
						<input
							id="auto-focus-input"
							type="text"
							className="grow "
							placeholder="記事を検索"
							onChange={(e) => searchBlogs(e.target.value)}
							// biome-ignore lint/a11y/noAutofocus: <explanation>
							autoFocus={true}
						/>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="h-4 w-4 opacity-70"
						>
							<title>記事を検索</title>
							<path
								fillRule="evenodd"
								d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
								clipRule="evenodd"
							/>
						</svg>
					</label>
					<details className="dropdown">
						<summary className="btn btn-sm sm:btn-md m-1 btn-success">
							<span className="text-xs">並べ替え</span>
							<BiFilter />
						</summary>
						<ul className="absolute top-16 right-10 menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
							<li>
								<button
									type="button"
									className={`btn btn-sm btn-ghost ${
										filter === "new" ? "btn-active" : ""
									}`}
									onClick={() => chooseFilter("new")}
								>
									新着順
								</button>
							</li>
							<li>
								<button
									type="button"
									className={`btn btn-sm btn-ghost ${
										filter === "old" ? "btn-active" : ""
									}`}
									onClick={() => chooseFilter("old")}
								>
									古い順
								</button>
							</li>
						</ul>
					</details>
				</div>
				<div className="flex justify-between mt-5 px-10">
					<div />
					<button
						type="button"
						className="btn btn-success btn-sm"
						onClick={openSearchBar}
					>
						閉じる
					</button>
				</div>
			</div>
		</>
	);
};

export default SearchArea;
