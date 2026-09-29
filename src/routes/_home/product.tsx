import { createFileRoute } from "@tanstack/react-router";
import { APP_NAME } from "../__root";

export const Route = createFileRoute("/_home/product")({
	head: () => ({
		meta: [
			{
				title: `Products | ${APP_NAME}`,
			},
		],
	}),
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/_home/product"!</div>;
}
