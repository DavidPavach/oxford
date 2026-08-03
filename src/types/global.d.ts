// Upload Response
declare type UploadResponse = {
	fileId: string;
	fileUrl: string;
};

// Media Row
declare type MediaRow = {
	id: string;
	fileId: string;
	fileName: string;
	mediaType: string;
	mimeType: string;
	extension: string;
	size: number;
	createdAt: string;
	updatedAt: string;
}

// Media Record
declare type MediaRecord = {
	id: string;
	fileId: string;
	fileName: string;
	mediaType: string;
	mimeType: string;
	extension: string;
	size: number;
	url: string;
	createdAt: string;
	updatedAt: string;
}

// Contact
declare type Contact = {
	id: string;
	fullName: string;
	organisation: string;
	email: string;
	message: string;
	createdAt: string;
	updatedAt: string;
};

// Verification Documents
declare type Documents = {
	id: string;
	documentNumber: string;
	files: string[];
	status: string;
	createdAt: string;
	updatedAt: string;
};