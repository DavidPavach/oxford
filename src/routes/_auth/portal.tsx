import { createFileRoute } from "@tanstack/react-router";
import Portal from "@/pages/Auth/Portal";
import { APP_NAME } from "../__root";

export const Route = createFileRoute("/_auth/portal")({
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
	return <Portal />;
}
