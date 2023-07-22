"use client";
import {
	motion,
	useMotionTemplate,
	useSpring,
	useTransform
} from "framer-motion";

import { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
	backgroundImage?: string;
}

const calc = (x: number, y: number) => [-(y) / 100, (x) / 100, 1.1];


export const Card: React.FC<CardProps> = ({ children, backgroundImage }) => {
    const springConfig = { stiffness: 500, damping: 50 };

    const x = useSpring(0, springConfig);
    const y = useSpring(0, springConfig);
    const s = useSpring(1, springConfig);
  
	const transformStyle = useTransform(
		[x, y, s],
		([latestX, latestY, latestS]) => `perspective(600px) rotateX(${latestX}deg) rotateY(${latestY}deg) scale(${latestS})`
	  );
	

	const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
	const mouseY = useSpring(0, { stiffness: 500, damping: 100 });


	function onMouseMove({ currentTarget, clientX, clientY }: any) {
		const { left, top, width, height } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
		
		// Calculate based on the card's dimensions
		const calculated = calc(clientX - left - width / 2, clientY - top - height / 2);
	
		x.set(calculated[0]);
		y.set(calculated[1]);
		s.set(calculated[2]);
	
		}

	function onMouseLeave() {
		x.set(0);
		y.set(0);
		s.set(1);
	}
	

	let maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, red, transparent)`;
	let style = { maskImage, WebkitMaskImage: maskImage };
	
	const classNames = `animated-card overflow-hidden relative border-2 rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-300 border-zinc-200 ${backgroundImage ? 'card-bg-image' : ''} hover:z-10`;

    return (
        <div onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
            <motion.div style={{ transform: transformStyle }} className={classNames} >
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
            </motion.div>
        </div>
    );
}
