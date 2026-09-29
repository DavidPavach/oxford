import { Moon, Sun } from "iconsax-reactjs";
import { useThemeStore } from "@/stores/theme.store.ts";

export const ThemeToggle = () => {
	const { theme, setTheme } = useThemeStore();

	const toggle = () => setTheme(theme === "dark" ? "light" : "dark");

	return (
		<button
			type="button"
			onClick={toggle}
			className="group inline-flex relative justify-center items-center bg-background hover:bg-accent border border-border hover:border-ring rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 size-6 md:size-7 xl:size-8 transition-all duration-200 cursor-pointer"
			aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
			title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
		>
			<Sun className="absolute size-3 md:size-3.5 xl:size-4 rotate-0 dark:-rotate-90 scale-100 dark:scale-0 group-hover:scale-110 transition-all duration-300" />
			<Moon
				className="absolute size-3 md:size-3.5 xl:size-4 rotate-90 dark:rotate-0 scale-0 dark:scale-100 group-hover:scale-110 transition-all duration-300"
				strokeWidth={1.5}
			/>
		</button>
	);
};
