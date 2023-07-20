"use client";
import {
	motion,
	useMotionTemplate,
	useSpring,
} from "framer-motion";

import { MouseEventHandler, PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
	backgroundImage?: string;
}

export const Card: React.FC<CardProps> = ({ children, backgroundImage }) => {
	const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
	const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

	function onMouseMove({ currentTarget, clientX, clientY }: any) {
		const { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}
	let maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, red, transparent)`;
	let style = { maskImage, WebkitMaskImage: maskImage };
	
	const classNames = `overflow-hidden relative duration-700 border rounded-xl bg-white hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-800 border-zinc-400 ${backgroundImage ? 'card-bg-image' : ''}`;

	return (
		<div onMouseMove={onMouseMove} className={classNames}>
		  {backgroundImage && (
			<motion.div
			  className="relative square-img" 
			  style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center', backgroundSize: 'cover'}}
			>
			  <div className="pointer-events-none">
				<div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
				<motion.div
				  className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
				  style={style}
				/>
				<motion.div
				  className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
				  style={style}
				/>
			  </div>
			</motion.div>
		  )}
		  <div className="z-10 p-4">
			{children}
		  </div>
		</div>
	  );
	};