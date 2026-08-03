import { Client, ID, Storage } from "appwrite";
import { mapAppwriteRow } from "#/utils/format";
import { getRequiredEnv } from "#/utils/generate";
import { getAppwriteDb } from "./general.server";

const ENDPOINT = getRequiredEnv(process.env.APPWRITE_ENDPOINT, "ENDPOINT");
const PROJECT_ID = getRequiredEnv(
	process.env.APPWRITE_PROJECT_ID,
	"PROJECT_ID",
);

const BUCKET_ID = getRequiredEnv(process.env.APPWRITE_BUCKET_ID, "BUCKET_ID");

const DATABASE_ID = getRequiredEnv(
	process.env.APPWRITE_DATABASE_ID,
	"DATABASE_ID",
);

const REGISTRY_ID = getRequiredEnv(
	process.env.APPWRITE_REGISTRY_ID,
	"REGISTRY_ID",
);

const client = new Client().setEndpoint(ENDPOINT).setProject(PROJECT_ID);

const storage = new Storage(client);

function getMediaType(mime: string): string {
	if (mime.startsWith("image/")) return "image";
	if (mime.startsWith("video/")) return "video";
	if (mime.startsWith("audio/")) return "audio";

	switch (mime) {
		case "application/pdf":
			return "pdf";

		case "application/msword":
		case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
			return "document";

		case "application/vnd.ms-excel":
		case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
			return "spreadsheet";

		default:
			return "other";
	}
}

export interface UploadOptions {
	website: string;
	category: string;
}

// Upload Media
export async function uploadMedia(file: File): Promise<MediaRecord> {
	const db = getAppwriteDb();

	const uploaded = await storage.createFile({
		bucketId: BUCKET_ID,
		fileId: ID.unique(),
		file,
	});

	const row = await db.createRow({
		databaseId: DATABASE_ID,
		tableId: REGISTRY_ID,
		rowId: ID.unique(),
		data: {
			fileId: uploaded.$id,
			fileName: file.name,
			mediaType: getMediaType(file.type),
			mimeType: file.type,
			extension: file.name.split(".").pop()?.toLowerCase() ?? "",
			size: file.size,
		},
	});

	const record: MediaRow = mapAppwriteRow(row);

	return {
		...record,
		url: storage.getFileView({
			bucketId: BUCKET_ID,
			fileId: uploaded.$id,
		}),
	};
}

// Get one media record
export async function getMedia(rowId: string): Promise<MediaRecord> {
	const db = getAppwriteDb();

	const row = await db.getRow({
		databaseId: DATABASE_ID,
		tableId: REGISTRY_ID,
		rowId,
	});

	const record: MediaRow = mapAppwriteRow(row);

	return {
		...record,
		url: storage.getFileView({
			bucketId: BUCKET_ID,
			fileId: row.fileId,
		}),
	};
}

// Get all media
export async function getAllMedia() {
	const db = getAppwriteDb();

	const rows = await db.listRows({
		databaseId: DATABASE_ID,
		tableId: REGISTRY_ID,
	});

	const records: MediaRow[] = rows.rows.map((row) => mapAppwriteRow(row));
	const urlRecords = records.map((record) => ({
		...record,
		url: storage.getFileView({
			bucketId: BUCKET_ID,
			fileId: record.fileId,
		}),
	}));

	return {
		total: rows.total,
		rows: urlRecords,
	};
}

// Delete media
export async function deleteMedia(rowId: string) {
	const db = getAppwriteDb();

	const row = await db.getRow({
		databaseId: DATABASE_ID,
		tableId: REGISTRY_ID,
		rowId,
	});

	await storage.deleteFile({
		bucketId: BUCKET_ID,
		fileId: row.fileId,
	});

	await db.deleteRow({
		databaseId: DATABASE_ID,
		tableId: REGISTRY_ID,
		rowId,
	});
}
