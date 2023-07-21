import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";
import { Eye, View } from "lucide-react";

type Props = {
	project: Project;
	views: number;
};

export const Article: React.FC<Props> = ({ project, views }) => {
	return (
		<Link href={`/projects/${project.slug}`}>
			<article className="p-4 md:p-8">
				<div className="flex justify-between gap-2 items-center">
					<span className="text-xs duration-1000 text-zinc-950 group-hover:text-zinc-950 group-hover:border-zinc-200 drop-shadow-black">
						{project.date ? (
							<time dateTime={new Date(project.date).toISOString()}>
								{Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
									new Date(project.date),
								)}
							</time>
						) : (
							<span>SOON</span>
						)}
					</span>
					<span className="text-zinc-950 text-xs  flex items-center gap-1">
						<Eye className="w-4 h-4" />{" "}
						{Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
					</span>
				</div>
				<h2 className="z-20 text-l font-bold duration-1000 lg:text-l text-zinc-950 group-hover:text-zinc-950 [font-stretch:extra-expanded] ">
					{project.title}
				</h2>
				<p className="z-20 mt-0 mb-5 text-sm  duration-1000 text-zinc-950 group-hover:text-zinc-950">
					{project.description}
				</p>
				{Array.isArray(project.tags) && (
					<div className="z-20 mt-2 flex flex-wrap text-xs text-zinc-950 group-hover:text-zinc-950 py-2">
						{project.tags.map((tag) => (
							<span className="mr-2 mb-2 py-1 px-2 bg-gray-300 text-gray-600 rounded-full whitespace-nowrap" key={tag.name}>{tag.name}</span>
						))}
					</div>
				)}
			</article>
		</Link>
	);
};
