import { z } from "zod";

// Shared
export const DeleteEntitySchema = z.object({
	id: z.string(),
});

export const GetEntitySchema = z.object({
	id: z.string(),
});

// Document Upload
export const CreateDocumentPayloadSchema = z.object({
	documentNumber: z.string().min(1, { error: "Document number is required" }),
	files: z.array(z.url()).min(1, "At least one file is required"),
	status: z.string({ error: "Status of the Document is required" }),
});

// Update Document Status
export const UpdateDocumentPayloadSchema = z.object({
	id: z.string({ error: "Document Id is required" }),
	status: z.string({ error: "Status of the Document is required" }),
});

// New Contact
export const CreateContactSchema = z.object({
	fullName: z.string(),
	organisation: z.string(),
	email: z.email(),
	message: z.string(),
});

export type CreateDocumentPayload = z.infer<typeof CreateDocumentPayloadSchema>;
export type UpdateDocumentPayload = z.infer<typeof UpdateDocumentPayloadSchema>;
export type CreateContactPayload = z.infer<typeof CreateContactSchema>;
