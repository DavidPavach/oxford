import { createFileRoute } from "@tanstack/react-router";

// UIs
import Landing from "#/pages/Landing";

export const Route = createFileRoute("/_home/")({
	component: Landing,
});
