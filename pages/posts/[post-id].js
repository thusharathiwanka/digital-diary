import Image from "next/image";

import Author from "../../components/common/children/author";
import Layout from "../../components/layout/layout";
import PostInfo from "../../components/common/children/post-info";
import RelatedSection from "../../components/post/related-section";

export default function PostPage() {
	return (
		<Layout>
			<div className="container mx-auto py-16 px-8 lg:w-1/2 md:w-2/3 w-full">
				<div className="flex justify-center">
					<Author />
				</div>
				<div className="post py-10">
					<h1 className="text-3xl md:text-5xl font-bold text-gray-800 pb-8 text-center">
						Your most unhappy customers are your greatest source of learning
					</h1>
					<div className="pb-5">
						<Image
							src={"/images/img1.jpg"}
							width={900}
							height={600}
							alt={"trending-blog-image"}
							className="object-cover"
						/>
					</div>
					<PostInfo />
					<div className="text-gray-600 py-3 text-justify text-lg flex flex-col gap-4 pt-4">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit modi recusandae quidem
							placeat sit. Facere, dolore tempora ab harum explicabo laudantium? Fuga eius quia,
							praesentium nam dignissimos adipisci tenetur voluptates? Officia officiis, voluptatum
							dolorem, error, laboriosam recusandae rerum quia natus facere libero est corporis
							doloribus! Debitis maxime beatae libero, quod incidunt reiciendis laudantium aliquam
							est deserunt id quidem enim a tempore explicabo natus, eveniet sint vitae, iusto
							neque. Dolor deleniti sapiente vel consectetur placeat blanditiis rem nihil ipsa
							itaque facere tempore ducimus, nesciunt ipsam, quibusdam iusto explicabo. Dolorem at
							ipsam neque dignissimos sunt laboriosam sapiente nostrum. Quaerat ipsam esse aperiam
							suscipit reiciendis est, commodi ipsum tenetur reprehenderit quae fuga non officiis
							molestias quibusdam ab error et perferendis ex excepturi. Alias odio quis possimus
							iure optio aperiam, quam praesentium minima quaerat, perspiciatis harum impedit
							repellat porro dicta atque maxime voluptas voluptatem soluta quae illo maiores nobis
							magnam accusamus quas! Aliquid modi provident delectus fuga voluptate impedit
							voluptatibus totam, natus assumenda voluptatum magni rem adipisci sunt aperiam
							cupiditate illum odio inventore suscipit?
						</p>
						<p>
							Laborum officia nobis magnam velit nisi provident porro inventore vero nihil. Tempora
							quas voluptatem et aliquam ex, reiciendis error, sit temporibus rem reprehenderit at
							distinctio possimus! Earum illo dolorum nihil? Lorem, ipsum dolor sit amet consectetur
							adipisicing elit. Sequi, cum pariatur molestiae deserunt sapiente officia rerum porro
							tempora animi facere earum facilis voluptatum sunt. Illo similique accusamus optio
							quaerat beatae quo sapiente nostrum commodi adipisci excepturi explicabo aliquam quia
							quam eaque unde distinctio veritatis consequatur, quis id suscipit amet quidem
							doloremque? Dolore ipsam libero, maxime et atque, quas vero provident aut quia
							asperiores rerum sequi veniam nemo exercitationem cupiditate a, doloremque esse alias
							unde architecto dolorem minus laborum veritatis! Explicabo quia consequuntur nemo cum
							provident. Minima sapiente quia, perferendis quisquam numquam incidunt. Iusto ipsam
							recusandae quam exercitationem repudiandae voluptate cum.
						</p>
					</div>
				</div>
				<RelatedSection />
			</div>
		</Layout>
	);
}
