import "../global.css";
import { Commissioner } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
	title: {
		default: "moon-realm.vercel.app",
		template: "%s | moon-realm.vercel.app",
	},
	description: "Software engineer at www.replayinstitute.com",
	openGraph: {
		title: "moon-realm.vercel.app",
		description:
			"Software engineer at upstash.com and founder of planetfall.io",
		url: "https://moon-realm.vercel.app/",
		siteName: "moon-realm.vercel.app",
		images: [
			{
				url: "https://moon-realm.vercel.app/og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "0x16e8bea",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const mona = LocalFont({
	src: "../public/fonts/Mona-Sans.woff2",
	variable: "--font-monasans",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[mona.variable, calSans.variable].join(" ")}>
			<head>
				<Analytics />
			</head>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				{children}
			</body>
		</html>
	);
}
