// For Getting Env
export function getRequiredEnv(value: string | undefined, name: string) {
	if (!value) {
		throw new Error(`Missing required environment variable: ${name}`);
	}

	return value;
}

// Generate Document Number
export function genDocNo(documentType: string): string {
	const COMPANY = "OPC";
	const YEAR = new Date().getFullYear();

	// Random 6-digit serial (000001 - 999999)
	const serial = Math.floor(Math.random() * 999999 + 1)
		.toString()
		.padStart(6, "0");

	// Random verification code
	const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
	const securityCode = Array.from({ length: 4 }, () =>
		chars.charAt(Math.floor(Math.random() * chars.length)),
	).join("");

	return `${COMPANY}-${documentType.toUpperCase()}-${YEAR}-${serial}-${securityCode}`;
}
