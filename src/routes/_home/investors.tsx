import { createFileRoute } from "@tanstack/react-router";
import Investors from "@/pages/Investors";
import { APP_NAME } from "../__root";

export const Route = createFileRoute("/_home/investors")({
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
	return <Investors />;
}
