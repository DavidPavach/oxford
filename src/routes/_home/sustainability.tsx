import { createFileRoute } from "@tanstack/react-router";
import Sustainability from "#/pages/Sustainability";
import { APP_NAME } from "../__root";

export const Route = createFileRoute("/_home/sustainability")({
	head: () => ({
		meta: [
			{
				title: `Company | ${APP_NAME}`,
			},
		],
	}),
	component: RouteComponent,
});

function RouteComponent() {
	return <Sustainability />;
}
