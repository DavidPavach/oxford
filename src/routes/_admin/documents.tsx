import { createFileRoute } from "@tanstack/react-router";
import Documents from "@/pages/Admin/Documents";
import { APP_NAME } from "../__root";

export const Route = createFileRoute("/_admin/documents")({
	head: () => ({
		meta: [
			{
				title: `Documents | ${APP_NAME}`,
			},
		],
	}),
	component: RouteComponent,
});

function RouteComponent() {
	return <Documents />;
}
