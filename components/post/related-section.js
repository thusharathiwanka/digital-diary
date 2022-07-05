import CategoryBlogCard from "../home/category-blog-card";

export default function RelatedSection() {
	return (
		<section className="pt-20">
			<h1 className="font-bold text-3xl py-10">Related Posts</h1>
			<div className="pb-5">
				<CategoryBlogCard />
			</div>
			<div className="pb-5">
				<CategoryBlogCard />
			</div>
			<div className="pb-5">
				<CategoryBlogCard />
			</div>
		</section>
	);
}
