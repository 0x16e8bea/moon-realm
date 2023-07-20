"use client";

import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";
import JobTimeline from "../components/JobTimeline";
import { useState, useEffect } from 'react';
import { Project } from "contentlayer/generated";

export default function ProjectsPage() {

    // Initialize state for filter and projects
    const [filter, setFilter] = useState<string>("");
    const [projects, setProjects] = useState<Project[]>([]);

    // Fetch data on initial component mount and when filter changes
    useEffect(() => {
        
        // Assuming allProjects is a static data, you can replace this with data fetching if necessary
        const allData = allProjects;

        // Fetch pageviews from redis and sort/filter data based on current filter
        (async function fetchData() {

            // Sort all projects by date in descending order (newest first)
            const sortedByDate = allData.filter((project) => project.published).sort((a, b) => {
                const aDate = a.date ? new Date(a.date) : new Date(0); // defaults to 1970-01-01 if date is undefined
                const bDate = b.date ? new Date(b.date) : new Date(0); // defaults to 1970-01-01 if date is undefined
            
                return bDate.getTime() - aDate.getTime(); // sort in descending order
            });

            // Get all projects where the category (string) is equal to current filter. Or if filter is empty, return all projects
            const filteredProjects = filter ? sortedByDate.filter((project) => project.category === filter) : sortedByDate;
        
            // Set the projects state to the filtered and sorted projects
            setProjects(filteredProjects);

        })();

    }, [filter]); // Run useEffect when filter state changes

    // Function to update filter
    const changeFilter = (newFilter: string) => {
        setFilter(newFilter);
    };
	
	return (
		<div className="relative pb-16">
			<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="mx-auto lg:mx-0">
					<JobTimeline/>

					<h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
						Projects
					</h2>
					<p className="mt-4 text-zinc-500">
						Here is an overview of projects I have worked on profesionally.
					</p>
				</div>

				{/* Flex layout with buttons spaced out */}
				<div className="flex flex-wrap justify-center gap-4">
				<button onClick={() => changeFilter('')}>All</button>
				<button onClick={() => changeFilter('virsabi')}>Work</button>
				<button onClick={() => changeFilter('personal')}>Personal</button>
				</div>


				<div className="hidden w-full h-px md:block bg-zinc-800" />

				<div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-4">
					<div className="grid grid-cols-1 gap-4">
						{projects
							.filter((_, i) => i % 4 === 0)
							.map((project) => (
								<Card key={project.slug} backgroundImage={project.coverImage}>
									<Article project={project} views={/*views[project.slug] ??*/ 0} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{projects
							.filter((_, i) => i % 4 === 1)
							.map((project) => (
								<Card key={project.slug} backgroundImage={project.coverImage}>
									<Article project={project} views={/*views[project.slug] ??*/ 0} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4" >
						{projects
							.filter((_, i) => i % 4 === 2)
							.map((project) => (
								<Card key={project.slug} backgroundImage={project.coverImage}>
									<Article project={project} views={/*views[project.slug] ??*/ 0} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4" >
						{projects
							.filter((_, i) => i % 4 === 3)
							.map((project) => (
								<Card key={project.slug} backgroundImage={project.coverImage}>
									<Article project={project} views={/*views[project.slug] ??*/ 0} />
								</Card>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}
