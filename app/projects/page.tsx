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
import Head from 'next/head';
import Spline from '@splinetool/react-spline';
import { useRef } from 'react';


export default function ProjectsPage() {
    const splineObj = useRef<{ position: { x: number; y: number; z: number; }; } | null>(null);
    const [scrollY, setScrollY] = useState(0);

	// Initialize state for filter and projects
	const [filter, setFilter] = useState<string>("");
	const [projects, setProjects] = useState<Project[]>([]);
	const [visible, setVisible] = useState(true);

    function onLoad(spline : any) {
		const obj = spline.findObjectByName('Group');
		splineObj.current = obj;
	}

	function moveObj() {
		// Adjust this value to change the speed at which the object moves relative to the scroll speed
		const scrollSpeedFactor = 0.8;

		if (splineObj.current) {
			// Update the position based on the current scroll position
			splineObj.current.position.y = scrollY * scrollSpeedFactor;
		}
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
			
    	<Spline className="iframeBackground" scene="https://prod.spline.design/roeFDYkdQExzyV4I/scene.splinecode"
		onLoad={onLoad}
				/>
  			);	

			<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="mx-auto lg:mx-0">
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
								<Article project={project} views={/*views[project.slug] ??*/ 0} />
							</Card>

						</motion.div>

					))}
				</Masonry>
			</div>
		</div>
	);
	
}
