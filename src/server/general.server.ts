import { Client, ID, TablesDB } from "node-appwrite";
import { mapAppwriteRow, parsePayload } from "#/utils/format";
import { getRequiredEnv } from "#/utils/generate";
import type {
	CreateContactPayload,
	CreateDocumentPayload,
	UpdateDocumentPayload,
} from "./schema";

// Environment Variables
const ENDPOINT = getRequiredEnv(process.env.APPWRITE_ENDPOINT, "ENDPOINT");
const PROJECT_ID = getRequiredEnv(
	process.env.APPWRITE_PROJECT_ID,
	"PROJECT_ID",
);
const API_KEY = getRequiredEnv(
	process.env.APPWRITE_API_KEY,
	"APPWRITE_API_KEY",
);

const DATABASE_ID = getRequiredEnv(
	process.env.APPWRITE_DATABASE_ID,
	"APPWRITE_DATABASE_ID",
);

const CONTACT_ID = getRequiredEnv(
	process.env.APPWRITE_CONTACT_ID,
	"APPWRITE_CONTACT_ID",
);

const DOCUMENT_ID = getRequiredEnv(
	process.env.APPWRITE_DOCUMENT_ID,
	"APPWRITE_DOCUMENT_ID",
);

// Initialize Server Client
const client = new Client()
	.setEndpoint(ENDPOINT)
	.setProject(PROJECT_ID)
	.setKey(API_KEY);

// Singleton pattern for TablesDB
let tablesDB: TablesDB | null = null;

export const getAppwriteDb = () => {
	if (tablesDB) return tablesDB;
	tablesDB = new TablesDB(client);
	return tablesDB;
};

// Create Contact
export async function createContact(data: CreateContactPayload) {
	const db = getAppwriteDb();
	const response = await db.createRow({
		databaseId: DATABASE_ID,
		tableId: CONTACT_ID,
		rowId: ID.unique(),
		data: data,
	});
	return mapAppwriteRow(response);
}

// Get All Contacts
export async function getAllContacts() {
	const db = getAppwriteDb();
	const response = await db.listRows({
		databaseId: DATABASE_ID,
		tableId: CONTACT_ID,
	});
	const records: Contact[] = response.rows.map((row) => mapAppwriteRow(row));

	return {
		total: response.total,
		rows: records,
	};
}

// Delete Contact
export async function deleteContact(id: string) {
	const db = getAppwriteDb();
	await db.deleteRow({
		databaseId: DATABASE_ID,
		tableId: CONTACT_ID,
		rowId: id,
	});
	return { success: true };
}

// Create Document
export async function createDocumentRecord(data: CreateDocumentPayload) {
	const db = getAppwriteDb();
	const response = await db.createRow({
		databaseId: DATABASE_ID,
		tableId: DOCUMENT_ID,
		rowId: data.documentNumber,
		data: {
			documentNumber: data.documentNumber,
			files: JSON.stringify(data.files),
			status: data.status,
		},
	});
	return mapAppwriteRow(response);
}

// Get Document
export async function getDocumentRecord(documentNumber: string) {
	const db = getAppwriteDb();
	const row = await db.getRow({
		databaseId: DATABASE_ID,
		tableId: DOCUMENT_ID,
		rowId: documentNumber,
	});

	const parsedRow = mapAppwriteRow(row);

	// Parse strings back to objects for the frontend
	const result = parsePayload(parsedRow, ["files"]);
	return result;
}

// Get All Document
export async function getAllDocument() {
	const db = getAppwriteDb();
	const response = await db.listRows({
		databaseId: DATABASE_ID,
		tableId: DOCUMENT_ID,
	});
	const results: Documents[] = response.rows.map((row) => mapAppwriteRow(row));
	const records = results.map((result) => parsePayload(result, ["files"]));

	return {
		total: response.total,
		rows: records,
	};
}

// Update Document
export async function updateDocument(data: UpdateDocumentPayload) {
	const db = getAppwriteDb();

	return await db.updateRow({
		databaseId: DATABASE_ID,
		tableId: DOCUMENT_ID,
		rowId: data.id,
		data: { status: data.status },
	});
}

// Delete Document
export async function deleteDocumentRecord(id: string) {
	const db = getAppwriteDb();
	await db.deleteRow({
		databaseId: DATABASE_ID,
		tableId: DOCUMENT_ID,
		rowId: id,
	});
	return { success: true };
}
