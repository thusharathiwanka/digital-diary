import Link from "next/link";
import Image from "next/image";

import Author from "../children/author";

export default function CategoryBlogCard() {
	return (
		<div className="flex gap-5">
			<div className="image flex flex-col justify-start">
				<Link href={"/"}>
					<a>
						<Image
							src={"/images/img1.jpg"}
							width={300}
							height={250}
							alt={"latest-blog-image"}
							className="object-cover rounded"
						/>
					</a>
				</Link>
			</div>
			<div className="info flex justify-center flex-col">
				<div className="cat">
					<Link href={"/"}>
						<a className="font-semibold text-orange-600 hover:text-orange-700">Business, Travel</a>
					</Link>
					<Link href={"/"}>
						<a className="font-semibold text-gray-600 hover:text-gray-700"> - Jul 04, 2022</a>
					</Link>
				</div>
				<div className="title">
					<Link href={"/"}>
						<a className="text-xl font-bold text-gray-800 hover:text-gray-600">
							Your most unhappy customers are your greatest source of learning
						</a>
					</Link>
				</div>
				<Author />
			</div>
		</div>
	);
}
