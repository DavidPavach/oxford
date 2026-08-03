// Reusable Appwrite Mapper
export function mapAppwriteRow<T>(row: any): T & {
	id: string;
	createdAt: string;
	updatedAt: string;
} {
	const {
		$id,
		$createdAt,
		$updatedAt,
		$databaseId,
		$tableId,
		$permissions,
		$sequence,
		...data
	} = row;

	return {
		id: $id,
		createdAt: $createdAt,
		updatedAt: $updatedAt,
		...(data as T),
	};
}

// Parse Strings Back to Objects
export function parsePayload(updates: any, jsonFields: any) {
	const u: any = { ...updates };
	for (const key of jsonFields) {
		if (u[key] !== undefined) u[key] = JSON.parse(u[key]);
	}
	return u;
}

// Format Media Size
export function formatBytes(bytes: number) {
	if (!bytes) return "—";
	const units = ["B", "KB", "MB", "GB"];
	let i = 0;
	let n = bytes;
	while (n >= 1024 && i < units.length - 1) {
		n /= 1024;
		i++;
	}
	return `${n.toFixed(n < 10 && i > 0 ? 1 : 0)} ${units[i]}`;
}

// Format Date and Time
export const formatDate = (
	dateInput: Date | string | number,
	variant: "long" | "short" = "long",
) => {
	const date = new Date(dateInput);

	if (variant === "short") {
		const datePart = date.toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric",
		});

		const timePart = date.toLocaleTimeString("en-US", {
			hour: "numeric",
			minute: "2-digit",
			hour12: true,
		});

		return `${datePart}, ${timePart}`;
	}

	return date.toLocaleString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	});
};
