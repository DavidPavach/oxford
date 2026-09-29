import { createFileRoute } from "@tanstack/react-router";
import { APP_NAME } from "../__root";

export const Route = createFileRoute("/_home/quality")({
	head: () => ({
		meta: [
			{
				title: `Quality and Compliance | ${APP_NAME}`,
			},
		],
	}),
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/_home/quality"!</div>;
}
