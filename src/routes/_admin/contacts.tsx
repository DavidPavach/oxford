import { createFileRoute } from "@tanstack/react-router";
import Contacts from "#/pages/Admin/Contacts";
import { APP_NAME } from "../__root";

export const Route = createFileRoute("/_admin/contacts")({
	head: () => ({
		meta: [
			{
				title: `Contacts | ${APP_NAME}`,
			},
		],
	}),
	component: RouteComponent,
});

function RouteComponent() {
	return <Contacts />;
}
