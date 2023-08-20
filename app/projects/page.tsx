"use client";

import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import JobTimeline from "../components/JobTimeline";
import { useState, useEffect } from 'react';
import { Project } from "contentlayer/generated";
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';
import { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { NodeToyMaterial, NodeToyTick } from '@nodetoy/react-nodetoy'
import { Mesh } from "three";
import { useThree, ThreeElements } from '@react-three/fiber';
import {PerspectiveCamera, OrbitControls, Environment, useGLTF, Float, PivotControls, QuadraticBezierLine, Backdrop, ContactShadows } from '@react-three/drei'




export default function ProjectsPage() {
	const cameraRef = useRef<{ position: { x: number; y: number; z: number; }; } | null>(null);
	const [scrollY, setScrollY] = useState(0);

	// Initialize state for filter and projects
	const [filter, setFilter] = useState<string>("");
	const [projects, setProjects] = useState<Project[]>([]);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		// Set visibility to false to animate out items
		setVisible(false);

		// Set a timeout for the exit animation to complete (use the same duration as your exit animation)
		const timeoutId = setTimeout(() => {
			// Update the projects to animate in items
			const allData = allProjects;
			const sortedByDate = allData.filter((project) => project.published).sort((a, b) => {
				const aDate = a.date ? new Date(a.date) : new Date(0);
				const bDate = b.date ? new Date(b.date) : new Date(0);
				return bDate.getTime() - aDate.getTime();
			});
			const filteredProjects = filter ? sortedByDate.filter((project) => project.category === filter) : sortedByDate;
			setProjects(filteredProjects);

			// Set a timeout to delay the appearance of new cards
			const timeoutId2 = setTimeout(() => {
				// Set visibility back to true after projects have been updated
				setVisible(true);
			}, 500); // Assuming your animation duration is 500ms

			// Cleanup the inner timeout when the component unmounts or when the filter changes
			return () => {
				clearTimeout(timeoutId2);
			};
		}, 500); // Assuming your animation duration is 500ms

		// Cleanup the outer timeout when the component unmounts or when the filter changes
		return () => {
			clearTimeout(timeoutId);
		};
	}, [filter]);

	function moveObj() {
		// Adjust this value to change the speed at which the camera moves relative to the scroll speed
		const scrollSpeedFactor = -0.008;
	
		if (cameraRef.current) {
			// Update the camera's position based on the current scroll position
			cameraRef.current.position.y = scrollY * scrollSpeedFactor;
		}
	}

	function TurntableCamera() {
		const { camera, clock } = useThree();
	
		// Assign the camera to our ref
		useEffect(() => {
			cameraRef.current = camera;
		}, [camera]);
	
		useFrame(() => {
			const elapsedTime = clock.getElapsedTime();

			
		});
	
		return null;
	}

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		// Attach the scroll event listener
		window.addEventListener('scroll', handleScroll);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		// Call the moveObj function every time the scroll position changes
		moveObj();
	}, [scrollY]);




	
	function Scene(props: JSX.IntrinsicElements['mesh']) {
		const ref = useRef<THREE.Mesh>(null!)
		const fileUrl = "/Scene.glb";
		const gltf = useLoader(GLTFLoader, fileUrl);

		// Rotate mesh using deltaTime in Three
		useFrame(({ clock }) => {
			if (ref.current) {
				ref.current.rotation.y = clock.getElapsedTime() * 0.1;
			}
		});

		return (
			<mesh
			ref={ref}
			{...props}
			>
				
				{/* Iterate through the children of the loaded scene */}
				{gltf.scene.children.map((child, index) => {
					if (child instanceof Mesh) {
						const clonedChild = child.clone();
						return (

								<primitive object={clonedChild}>
        						<NodeToyMaterial url={"https://draft.nodetoy.co/OWgHCLwwpu2p1cCc"} />

								</primitive>


						);
					}
				})}
			</mesh>
		);
	}

	



	// Function to update filter
	const changeFilter = (newFilter: string) => {
		setFilter(newFilter);
	};

	const breakpointColumnsObj = {
		default: 4,
		1100: 3,
		700: 2,
		500: 1
	};


	// First element should be a background div that takes up the entire screen with absolute positioning
	return (
		<div className="relative pb-16">



			<Canvas 
				resize={{scroll: false}}
				// Make the canvas absolute positioned so it fills the entire screen. The canvas should always stick to the page, even when scrolling
				style={{
					width: '100%',
						height: '100vh',
					// Center align
					position: 'fixed',
					zIndex: -1,
				}}>

				<PerspectiveCamera position={[0, 0, -5]}>

				<directionalLight position={[-10, -10, -5]} intensity={2} />
				<ambientLight intensity={1} />
				<Scene />

				<Environment preset="dawn" />
				</PerspectiveCamera>
				<TurntableCamera/>

			</Canvas>



			<Navigation />

			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="mx-auto lg:mx-0">

					<div className="relative items-center justify-center w-full min-w-xl py-16 mx-auto lg:py-24 max-w-xl">
						<Card>

							<div className="relative bg-white bg-opacity-50 text-white h-64 backdrop-blur">
								<div className="flex items-center justify-center h-full px-5">
									<img className="h-32 w-32 rounded-full object-cover" src="/profile.jpg" alt="User" />
									<div className="ml-4">
										<h2 className="[font-stretch:extra-expanded] lg:text-2xl font-medium text-neutral-950 sm:text-xl">Mikkel Mogensen</h2>
										<p className="text-xs sm:text-sm [font-stretch:extra-expanded] text-neutral-950 flex flex-col sm:flex-row space-x-2"><span className="font-bold">Date of Birth:</span> <span>24-02-1994</span></p>
										<p className="text-xs sm:text-sm [font-stretch:extra-expanded] text-neutral-950 flex flex-col sm:flex-row space-x-2"><span className="font-bold">Organization:</span> <span>Replay Institute</span></p>
										<p className="text-xs sm:text-sm [font-stretch:extra-expanded] text-neutral-950 flex flex-col sm:flex-row space-x-2"><span className="font-bold">Title:</span> <span>Tech Lead</span></p>
										<p className="text-xs sm:text-sm [font-stretch:extra-expanded] text-neutral-950 flex flex-col sm:flex-row space-x-2"><span className="font-bold">Valid From:</span> <span>02-23</span></p>
										<p className="text-xs sm:text-sm [font-stretch:extra-expanded] text-neutral-950 flex flex-col sm:flex-row space-x-2"><span className="font-bold">ID:</span> <span>0x16e8bea</span></p>
									</div>
								</div>
							</div>

						</Card>
					</div>



					<h2 className="block tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950 font-light [font-stretch:extra-expanded]">
						Work Experience
					</h2 >

					<JobTimeline />

					<h2 className="block tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950 [font-stretch:extra-expanded]">
						Projects
					</h2 >
					<p className="mt-4 text-zinc-500">
						Here is an overview of projects I have worked on profesionally.
					</p>
				</div>

				{/* Flex layout with gap-4 aligned to the right side of the page. Make sure it fills 100% of width */}
				<div className="flex justify-end rounded-md " role="group">
					{/* Align the filter text in the middle vertically and nothing more */}
					<div className="flex items-center px-2 py-1 [font-stretch:extra-expanded]">
						Filters:
					</div>
					<button className="[font-stretch:extra-expanded] px-4 py-1 text-sm font-medium text-gray-100 bg-transparent border border-black rounded-l-lg hover:bg-gray-100 hover:text-white focus:z-10 focus:ring-1 focus:ring-gray-100 focus:bg-gray-100 focus:text-white dark:border-black dark:text-black dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700" onClick={() => changeFilter('')}>All</button>
					<button className="[font-stretch:extra-expanded] px-4 py-1 text-sm font-medium text-gray-100 bg-transparent border-t border-b border-black hover:bg-gray-100 hover:text-white focus:z-10 focus:ring-1 focus:ring-gray-100 focus:bg-gray-100 focus:text-white dark:border-black dark:text-black dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700" onClick={() => changeFilter('work')}>Work</button>
					<button className="[font-stretch:extra-expanded] px-4 py-1 text-sm font-medium text-gray-100 bg-transparent border border-black rounded-r-md hover:bg-gray-100 hover:text-white focus:z-10 focus:ring-1 focus:ring-gray-100 focus:bg-gray-100 focus:text-white dark:border-black dark:text-black dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700" onClick={() => changeFilter('personal')}>Personal</button>
				</div>


				<hr
					style={{
						background: "rgb(229, 231, 235)",
						height: "2px",
						border: "none",
						marginTop: "1rem",
					}}
				/>

				<Masonry
					breakpointCols={breakpointColumnsObj}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column"
				>

					{visible && projects.map((project) => (

						<motion.div key={project.slug}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.9 }}
							transition={{ duration: 0.5 }}
						>
							<Card backgroundImage={project.coverImage} >
								<Article project={project} />
							</Card>

						</motion.div>

					))}
				</Masonry>
			</div>



		</div>
	);

}
