import Image from "next/image";
import Link from "next/link";

import Author from "../common/children/author";
import PostInfo from "../common/children/post-info";

export default function Slide() {
	return (
		<div className="grid md:grid-cols-2 gap-8 items-center">
			<div className="image">
				<Link href={"/"}>
					<a>
						<Image
							src={"/images/img1.jpg"}
							width={600}
							height={600}
							alt={"trending-blog-image"}
							className="object-cover"
						/>
					</a>
				</Link>
			</div>
			<div className="info flex justify-center flex-col">
				<PostInfo />
				<div className="title">
					<Link href={"/"}>
						<a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
							Your most unhappy customers are your greatest source of learning
						</a>
					</Link>
				</div>
				<p className="text-gray-500 py-3">
					Even the all-powerful Pointing has no control about the blind texts it is an almost
					unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
					decided to leave for the far World of Grammar.
				</p>
				<Author />
			</div>
		</div>
	);
}
