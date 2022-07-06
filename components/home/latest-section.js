import LatestBlogCard from "./latest-blog-card";
import Spinner from "../common/children/spinner";

import useFetcher from "../../hooks/useFetcher";

export default function LatestSection() {
	const { data, isLoading, isError } = useFetcher("posts");

	if (isLoading) return <Spinner />;
	if (isError) return <p>Error!</p>;

	return (
		<section className="container mx-auto md:px-20 py-10 px-8">
			<h1 className="font-bold text-4xl text-center py-10">Latest Posts</h1>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
				{data && data.map(post => <LatestBlogCard key={post.id} post={post} />)}
			</div>
		</section>
	);
}
