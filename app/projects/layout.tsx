export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen">
			<div className="absolute inset-0 bg-white -z-10" /> {/* background div */}
			{children}
		</div>
	);
}
