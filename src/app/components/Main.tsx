"use client";
import React from "react";
import { useDarkMode } from "../state/useDarkModeContext";

const Main = () => {
	const { darkmode } = useDarkMode();
	return (
		<div data-theme={darkmode ? "luxury" : "light"}>
			<main className="h-lvh w-full pt-16 bg-base-300">main</main>
		</div>
	);
};

export default Main;
