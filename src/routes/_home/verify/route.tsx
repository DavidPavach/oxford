import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_home/verify")({
	component: RouteComponent,
});

function RouteComponent() {
	return <Outlet />;
}
