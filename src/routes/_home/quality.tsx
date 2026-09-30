import { createFileRoute } from "@tanstack/react-router";
import QualityCompliance from "#/pages/Quality";
import { APP_NAME } from "../__root";

export const Route = createFileRoute("/_home/quality")({
	head: () => ({
		meta: [
			{
				title: `Quality and Compliance | ${APP_NAME}`,
			},
		],
	}),
	component: QualityCompliance,
});
