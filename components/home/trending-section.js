import Image from "next/image";
import Link from "next/link";

export default function TrendingSection() {
	return (
		<section className="py-6">
			<div className="container mx-auto md:px-20">
				<h1 className="font-bold text-4xl text-center pb-12">Trending</h1>
				<div className="grid md:grid-cols-2">
					<div className="image">
						<Link href={"/"}>
							<a>
								<Image
									src={"/images/img1.jpg"}
									width={600}
									height={600}
									alt={"trending-blog-image"}
								/>
							</a>
						</Link>
					</div>
					<div className="info flex justify-center flex-col">
						<div className="cat">
							<Link href={"/"}>
								<a className="font-semibold text-orange-600 hover:text-orange-700">
									Business, Travel
								</a>
							</Link>
							<Link href={"/"}>
								<a className="font-semibold text-gray-600 hover:text-gray-700"> - Jul 04, 2022</a>
							</Link>
							<div className="title">
								<Link href={"/"}>
									<a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
										Your most unhappy customers are your greatest source of learning
									</a>
								</Link>
							</div>
							<p className="text-gray-500 py-3">
								Even the all-powerful Pointing has no control about the blind texts it is an almost
								unorthographic life One day however a small line of blind text by the name of Lorem
								Ipsum decided to leave for the far World of Grammar.
							</p>
							<h1>Author</h1>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
