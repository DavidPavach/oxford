import { createFileRoute } from "@tanstack/react-router";
import Verify from "@/pages/Verify";
import { APP_NAME } from "../__root";

export const Route = createFileRoute("/_home/verify")({
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
