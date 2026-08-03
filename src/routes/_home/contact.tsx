import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/pages/Contact";
import { APP_NAME } from "../__root";

export const Route = createFileRoute("/_home/contact")({
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
	return <Contact />;
}
