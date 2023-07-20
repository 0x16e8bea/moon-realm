import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from 'next/image'; // Import Image from next/image
import dynamic from 'next/dynamic';

const ClientAnimeComponent = dynamic(() => import('./components/ClientAnimeComponent'), { ssr: false });

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-neutral-100">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 transition-all ease-in-out transform hover:scale-110"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				<ClientAnimeComponent />
			</h1>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-zinc-500 ">
					Hi, my name is Mikkel. I am a creative developer, currently
					based in Copehagen, Denmark. I currently the lead developer at {" "}
					<Link
						target="_blank"
						href="https://www.replayinstitute.com/"
						className="underline duration-500 hover:text-zinc-300"
					>
						Replay Institute
					</Link>
					<br />
					and working on several hobby projects including a game in my spare time.
				</h2>
			</div>
		</div>
	);
}
