import { createFileRoute } from "@tanstack/react-router";
import { APP_NAME } from "#/routes/__root";
import Verify from "@/pages/Verify";

export const Route = createFileRoute("/_home/verify/")({
	head: () => ({
		meta: [
			{
				title: `Verification | ${APP_NAME}`,
			},
		],
	}),
	component: RouteComponent,
});

function RouteComponent() {
	return <Verify />;
}
