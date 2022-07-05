import CategoryBlogCard from "./category-blog-card";

export default function CategorySection() {
	return (
		<section className="container mx-auto py-16 md:px-20">
			<div className="grid lg:grid-cols-2 gap-2">
				<div className="item">
					<h1 className="font-bold text-4xl py-10">Business</h1>
					<div className="flex flex-col gap-6">
						<CategoryBlogCard />
						<CategoryBlogCard />
						<CategoryBlogCard />
						<CategoryBlogCard />
					</div>
				</div>
				<div className="item">
					<h1 className="font-bold text-4xl py-10">Travel</h1>
					<div className="flex flex-col gap-6">
						<CategoryBlogCard />
						<CategoryBlogCard />
						<CategoryBlogCard />
						<CategoryBlogCard />
					</div>
				</div>
			</div>
		</section>
	);
}
