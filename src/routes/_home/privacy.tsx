import { createFileRoute } from "@tanstack/react-router";
import Privacy from "#/pages/Privacy";
import { APP_NAME } from "../__root";

export const Route = createFileRoute("/_home/privacy")({
	head: () => ({
		meta: [
			{
				title: `Privacy Policy | ${APP_NAME}`,
			},
		],
	}),
	component: Privacy,
});
