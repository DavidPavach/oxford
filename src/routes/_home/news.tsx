import { createFileRoute } from "@tanstack/react-router";
import News from "#/pages/News";
import { APP_NAME } from "../__root";

export const Route = createFileRoute("/_home/news")({
	head: () => ({
		meta: [
			{
				title: `News | ${APP_NAME}`,
			},
		],
	}),
	component: News,
});
