import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Scripts,
} from "@tanstack/react-router";
import { ToastContainer } from "react-fox-toast";
import { ThemeSync } from "#/hooks/ThemeSync";
import appCss from "../styles.css?url";

interface MyRouterContext {
	queryClient: QueryClient;
}

export const APP_NAME = "OXFORD PETROLEUM CORPORATION";
export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: APP_NAME,
			},
			{
				name: "description",
				content:
					"Oxford Petroleum Corporation is a global energy company specializing in petroleum trading, storage, logistics, energy investments, and sustainable oil & gas solutions with secure document verification",
			},
			{
				name: "keywords",
				content:
					"Oxford Petroleum Corporation, Oxford Petroleum, Petroleum Corporation, Oil and Gas, Energy Company, Petroleum Trading, Crude Oil Trading, Fuel Supply, Tank Storage, Oil Storage, Energy Logistics, Petroleum Logistics, Document Verification, Certificate Verification, Oxford Petroleum Canada",
			},
			{
				name: "robots",
				content: "index, follow",
			},
			{
				name: "author",
				content: "Oxford Petroleum Corporation",
			},
			{
				name: "theme-color",
				content: "#001e58",
			},

			// Open Graph
			{
				property: "og:type",
				content: "website",
			},
			{
				property: "og:site_name",
				content: "Oxford Petroleum Corporation",
			},
			{
				property: "og:title",
				content: APP_NAME,
			},
			{
				property: "og:description",
				content:
					"Oxford Petroleum Corporation delivers trusted petroleum trading, storage, logistics, and energy solutions worldwide.",
			},
			{
				property: "og:url",
				content: "https://oxfordpetroleumcorp.ca",
			},
			{
				property: "og:image",
				content: "https://oxfordpetroleumcorp.ca/logo.png",
			},
			{
				property: "og:locale",
				content: "en_CA",
			},

			// Twitter
			{
				name: "twitter:card",
				content: "summary_large_image",
			},
			{
				name: "twitter:title",
				content: APP_NAME,
			},
			{
				name: "twitter:description",
				content:
					"Oxford Petroleum Corporation delivers trusted petroleum trading, storage, logistics, and energy solutions worldwide.",
			},
			{
				name: "twitter:image",
				content: "https://oxfordpetroleumcorp.ca/logo.png",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
			{
				rel: "canonical",
				href: "https://www.oxfordpetroleumcorp.ca",
			},
			{
				rel: "icon",
				href: "/favicon.ico",
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<HeadContent />
				<script suppressHydrationWarning>{`(function() {
                            const saved = localStorage.getItem('theme');
                            const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                            const theme = saved || (systemDark ? 'dark' : 'light');
                            document.documentElement.classList.toggle(
                                'dark',
                                theme === 'dark'
                            );
                        })();`}</script>
			</head>
			<body suppressHydrationWarning>
				{children}
				<ToastContainer
					position="top-center"
					isPausedOnHover={true}
					duration={5000}
				/>
				<ThemeSync />
				<Scripts />
			</body>
		</html>
	);
}
