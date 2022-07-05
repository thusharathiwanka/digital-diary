import LatestBlogCard from "./latest-blog-card";

export default function LatestSection() {
	return (
		<section className="container mx-auto md:px-20 py-10">
			<h1 className="font-bold text-4xl text-center py-10">Latest Posts</h1>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
				<LatestBlogCard />
				<LatestBlogCard />
				<LatestBlogCard />
				<LatestBlogCard />
				<LatestBlogCard />
				<LatestBlogCard />
			</div>
		</section>
	);
}
