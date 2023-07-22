"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Twitter size={20} />,
		href: "https://twitter.com/0x16e8bea",
		label: "Twitter",
		handle: "@0x16e8bea",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:mikkel.mogensen.work@gmail.com",
		label: "Email",
		handle: "Work Email",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/0x16e8bea",
		label: "Github",
		handle: "0x16e8bea",
	},
];

export default function Example() {
	return (
		<div className="bg-white">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card> 
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16 border"
							>

								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-800 group-hover:text-white group-hover:bg-zinc-900 border-zinc-800">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-800 font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-800">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
