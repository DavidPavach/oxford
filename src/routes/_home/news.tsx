import { createFileRoute } from "@tanstack/react-router";
import { APP_NAME } from "../__root";

export const Route = createFileRoute("/_home/news")({
	head: () => ({
		meta: [
			{
				title: `News | ${APP_NAME}`,
			},
		],
	}),
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/_home/news"!</div>;
}
