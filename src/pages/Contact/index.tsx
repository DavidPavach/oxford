import { Building, Call, Location, Sms } from "iconsax-reactjs";
import { type SubmitEvent, useState } from "react";
import { toast } from "react-fox-toast";
import { useCreateContact } from "#/services/mutations";
import PageHero from "@/components/PageHero";

export default function Contact() {
	const [sent, setSent] = useState<boolean>(false);
	const [form, setForm] = useState<{
		fullName: string;
		email: string;
		organisation: string;
		message: string;
	}>({
		fullName: "",
		email: "",
		organisation: "",
		message: "",
	});

	const createContact = useCreateContact();
	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();

		if (
			!form.fullName.trim() ||
			!form.email.trim() ||
			!form.organisation.trim() ||
			!form.message.trim()
		)
			return toast.error(
				"Kindly fill all the required field before submitting",
			);
		createContact.mutate(
			{ data: form },
			{
				onSuccess: () => {
					toast.success(
						"Your contact request was submitted successfully, kindly wait for 24 Hours before submitting another one.",
					);
					setSent(true);
				},
				onError: (error) => {
					toast.error(error.message ?? "Failed to send contact request.");
				},
			},
		);
	}

	return (
		<main>
			<PageHero
				eyebrow="Contact"
				title="Start a conversation."
				subtitle="Oxford Petroleum Corporation welcomes enquiries from partners, investors, stakeholders and media. All communications are handled with discretion and precision."
			/>

			<section className="bg-white dark:bg-[#05070C] section-shell">
				<div className="gap-16 grid lg:grid-cols-2 mx-auto max-w-screen-2xl">
					{/* Office info */}
					<div>
						<p className="eyebrow">
							<Building className="size-3 md:size-3.5 xl:size-4" /> Registered
							office
						</p>
						<div className="space-y-8 mt-8">
							<div className="flex gap-5">
								<Location className="mt-1 size-4 md:size-4.5 xl:size-5 text-destructive shrink-0" />
								<div>
									<strong className="font-semibold text-[11px] md:text-xs xl:text-sm uppercase tracking-[.12em]">
										Registered Address
									</strong>
									<p className="mt-2 text-muted-foreground leading-relaxed">
										4519 16A Street S.W.
										<br />
										Calgary, Alberta T2T 4L8
										<br />
										Canada
									</p>
								</div>
							</div>
							<div className="flex gap-5">
								<Call className="mt-1 size-4 md:size-4.5 xl:size-5 text-destructive shrink-0" />
								<div>
									<strong className="font-semibold text-[11px] md:text-xs xl:text-sm uppercase tracking-[.12em]">
										Corporate Office
									</strong>
									<p className="mt-2 text-muted-foreground">+1 403-861-7385</p>
								</div>
							</div>
							<div className="flex gap-5">
								<Sms className="mt-1 size-4 md:size-4.5 xl:size-5 text-destructive shrink-0" />
								<div>
									<strong className="font-semibold text-[11px] md:text-xs xl:text-sm uppercase tracking-[.12em]">
										General Enquiries
									</strong>
									<p className="mt-2 text-muted-foreground">
										corporate@oxfordpetroleumcorp.ca
									</p>
								</div>
							</div>
						</div>

						<div className="mt-10 border border-border rounded-xl overflow-hidden">
							{[
								["Corporation Number", "184564-1"],
								["Business Number", "120176995RC0001"],
								["Governing Act", "Canada Business Corporations Act"],
								["Jurisdiction", "Alberta, Canada"],
							].map(([k, v], i) => (
								<div
									key={k}
									className={`grid grid-cols-2 gap-4 px-5 py-3 text-[11px] md:text-xs xl:text-sm ${i % 2 === 0 ? "bg-[#F5F7FA] dark:bg-[#0E1628]" : "bg-white dark:bg-[#05070C]"}`}
								>
									<span className="font-semibold text-[10px] text-muted-foreground md:text-[11px] xl:text-xs uppercase tracking-[.12em]">
										{k}
									</span>
									<span className="font-mono font-medium text-[10px] md:text-[11px] xl:text-xs">
										{v}
									</span>
								</div>
							))}
						</div>
					</div>

					{/* Contact form */}
					<div>
						{sent ? (
							<div className="flex flex-col justify-center items-center bg-green-500/5 p-12 border border-green-500/30 rounded-xl h-full min-h-100 text-center">
								<div className="flex justify-center items-center bg-green-500/15 mb-6 rounded-full size-12 md:size-14 xl:size-16">
									<Sms className="size-6 md:size-7 xl:size-8 text-green-500" />
								</div>
								<strong className="font-medium text-lg md:text-xl xl:text-2xl">
									Message received.
								</strong>
								<p className="mt-3 text-muted-foreground">
									A member of the Oxford Petroleum team will respond to your
									enquiry in due course.
								</p>
							</div>
						) : (
							<form onSubmit={handleSubmit} className="space-y-5">
								<p className="mb-6 eyebrow">Send an enquiry</p>
								{(
									[
										["Full name", "fullName", "text", "Your name"] as [
											string,
											keyof typeof form,
											string,
											string,
										],
										["Email address", "email", "email", "your@email.com"] as [
											string,
											keyof typeof form,
											string,
											string,
										],
										[
											"Organisation",
											"organisation",
											"text",
											"Company or institution",
										] as [string, keyof typeof form, string, string],
									] as Array<[string, keyof typeof form, string, string]>
								).map(([label, field, type, placeholder]) => (
									<div key={field}>
										<label
											htmlFor={field}
											className="block mb-1.5 font-semibold text-muted-foreground text-xs uppercase tracking-[.12em]"
										>
											{label}
										</label>
										<input
											id={field}
											type={type}
											required={field !== "organisation"}
											placeholder={placeholder}
											value={form[field]}
											onChange={(e) =>
												setForm((v) => ({ ...v, [field]: e.target.value }))
											}
											className="bg-[#F5F7FA] dark:bg-[#0E1628] px-4 py-3 border border-border focus:border-primary dark:border-white/10 dark:focus:border-white/40 rounded-lg outline-none w-full text-[11px] md:text-xs xl:text-sm transition"
										/>
									</div>
								))}
								<div>
									<label
										htmlFor=""
										className="block mb-1.5 font-semibold text-[10px] text-muted-foreground md:text-[11px] xl:text-xs uppercase tracking-[.12em]"
									>
										Message
									</label>
									<textarea
										required
										rows={5}
										placeholder="Describe your enquiry…"
										value={form.message}
										onChange={(e) =>
											setForm((v) => ({ ...v, message: e.target.value }))
										}
										className="bg-[#F5F7FA] dark:bg-[#0E1628] px-4 py-3 border border-border focus:border-primary dark:border-white/10 dark:focus:border-white/40 rounded-lg outline-none w-full text-[11px] md:text-xs xl:text-sm transition resize-none"
									/>
								</div>
								<button
									type="submit"
									className="justify-center bg-[#081F4D] w-full text-white cursor-pointer premium-button"
								>
									Submit enquiry
								</button>
							</form>
						)}
					</div>
				</div>
			</section>
		</main>
	);
}
