import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
	const views = (
		await redis.mget<number[]>(
			...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
		)
	).reduce((acc, v, i) => {
		acc[allProjects[i].slug] = v ?? 0;
		return acc;
	}, {} as Record<string, number>);

	// Sort all projects by date in descending order (newest first)
	const sortedByDate = allProjects.filter((project) => project.published).sort((a, b) => {
		const aDate = a.date ? new Date(a.date) : new Date(0); // defaults to 1970-01-01 if date is undefined
		const bDate = b.date ? new Date(b.date) : new Date(0); // defaults to 1970-01-01 if date is undefined

		return bDate.getTime() - aDate.getTime(); // sort in descending order
	});

	// Find the first project where featured is true, else default to the most recent project
	const featured = sortedByDate.find((project) => project.featured === true) || sortedByDate[0];

	// Filter out the featured project from the remaining projects
	const otherProjects = sortedByDate.filter((project) => project.slug !== featured.slug);

	// Select the first two projects as top2 and top3
	const top2 = otherProjects[0];
	const top3 = otherProjects[1];


	const sorted = allProjects
		.filter((p) => p.published)
		.filter(
			(project) =>
				(!featured || project.slug !== featured.slug) &&
				project.slug !== top2.slug &&
				project.slug !== top3.slug,
		)

	return (
		<div className="relative pb-16">
			<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Projects
					</h2>
					<p className="mt-4 text-zinc-400">
						Here is an overview of projects I have worked on profesionally.
					</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
					<Card backgroundImage={featured.coverImage}>
						<Link href={`/projects/${featured.slug}`}>
							<article className="relative w-full h-full p-4 md:p-8">
								<div className="flex items-center justify-between gap-2">
									<div className="text-xs text-zinc-100">
										{featured.date ? (
											<time dateTime={new Date(featured.date).toISOString()}>
												{Intl.DateTimeFormat(undefined, {
													dateStyle: "medium",
												}).format(new Date(featured.date))}
											</time>
										) : (
											<span>SOON</span>
										)}
									</div>
									<span className="flex items-center gap-1 text-xs text-zinc-500">
										<Eye className="w-4 h-4" />{" "}
										{Intl.NumberFormat("en-US", { notation: "compact" }).format(
											views[featured.slug] ?? 0,
										)}
									</span>
								</div>

								<h2
									id="featured-post"
									className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
								>
									{featured.title}
								</h2>
								<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
									{featured.description}
								</p>

								<div className="absolute bottom-4 md:bottom-8">

									<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
										{Array.isArray(featured.tags) && (
											<div className="z-20 mt-2 flex flex-wrap text-sm text-zinc-400 group-hover:text-zinc-200 py-2">
												<span>
													{featured.tags.map((tag) => (
														<span className="mr-2 mb-2 py-1 px-2 bg-blue-500 text-white rounded-md" key={tag.name}>{tag.name}</span>
													))}
												</span>
											</div>
										)}
										Read more <span aria-hidden="true">&rarr;</span>

									</p>
								</div>
							</article>
						</Link>
					</Card>

					<div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
						{[top2, top3].map((project) => (
							<Card key={project.slug} backgroundImage={project.coverImage}>
								<Article project={project} views={views[project.slug] ?? 0} />
							</Card>
						))}
					</div>
				</div>
				<div className="hidden w-full h-px md:block bg-zinc-800" />

				<div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 0)
							.map((project) => (
								<Card key={project.slug} backgroundImage={project.coverImage}>
									<Article project={project} views={views[project.slug] ?? 0} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 1)
							.map((project) => (
								<Card key={project.slug} backgroundImage={project.coverImage}>
									<Article project={project} views={views[project.slug] ?? 0} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4" >
						{sorted
							.filter((_, i) => i % 3 === 2)
							.map((project) => (
								<Card key={project.slug} backgroundImage={project.coverImage}>
									<Article project={project} views={views[project.slug] ?? 0} />
								</Card>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}
