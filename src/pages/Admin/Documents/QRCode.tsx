import { ImportCurve } from "iconsax-reactjs";
import QRCode from "qrcode";
import { useEffect, useState } from "react";

const VerificationQRCode = ({ documentNumber }: { documentNumber: string }) => {
	const [qr, setQr] = useState<string>("");

	const verificationUrl = `${window.location.origin}/verify/${documentNumber}`;

	useEffect(() => {
		QRCode.toDataURL(verificationUrl).then(setQr);
	}, [verificationUrl]);

	return (
		<div className="space-y-4 mt-2 text-[11px] md:text-xs xl:text-sm">
			{qr && <img src={qr} alt="QR Code" className="size-48" />}

			<a
				href={verificationUrl}
				target="_blank"
				rel="noopener noreferrer"
				className="text-primary underline"
			>
				{verificationUrl}
			</a>

			<div className="my-2">
				<a
					href={qr}
					download={`${documentNumber}.png`}
					className="inline-flex items-center bg-primary px-4 py-2 rounded-lg text-primary-foreground cursor-pointer"
				>
					<span>
						<ImportCurve className="mr-0.5 size-4 md:size-4.5 xl:size-5" />
					</span>
					Download QR Code
				</a>
			</div>
		</div>
	);
};

export default VerificationQRCode;
