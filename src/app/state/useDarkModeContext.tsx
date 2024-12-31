"use client";
import {
	type ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

interface darkmodeType {
	changeDarkmode: () => void;
	darkmode: boolean;
}

const darkmodeContext = createContext<darkmodeType | undefined>(undefined);

export const useDarkMode = () => {
	const context = useContext(darkmodeContext);
	if (!context) {
		throw new Error("context is undefined");
	}
	return context;
};

export const DarkmodeProvider = ({ children }: { children: ReactNode }) => {
	const localStorge = window.localStorage.getItem("darkmode");
	const [darkmode, setDarkMode] = useState(false);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (localStorge === "true") {
			return setDarkMode(true);
		}
		return setDarkMode(false);
	}, []);

	function changeDarkmode() {
		if (darkmode === true) {
			window.localStorage.setItem("darkmode", "false");
			setDarkMode(false);
		} else {
			window.localStorage.setItem("darkmode", "true");
			setDarkMode(true);
		}
	}

	return (
		<darkmodeContext.Provider value={{ changeDarkmode, darkmode }}>
			{children}
		</darkmodeContext.Provider>
	);
};
