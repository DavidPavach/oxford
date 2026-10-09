import { createFileRoute } from "@tanstack/react-router";
import Terms from "#/pages/Terms";
import { APP_NAME } from "../__root";

export const Route = createFileRoute("/_home/terms")({
	head: () => ({
		meta: [
			{
				title: `Terms of Use | ${APP_NAME}`,
			},
		],
	}),
	component: Terms,
});
