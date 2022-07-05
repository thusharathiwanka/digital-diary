import Link from "next/link";

export default function PostInfo() {
	return (
		<div className="cat flex">
			<Link href={"/"}>
				<a className="font-semibold text-orange-600 hover:text-orange-700">Business, Travel</a>
			</Link>
			<p className="font-semibold text-gray-600 hover:text-gray-700">&nbsp; - Jul 04, 2022</p>
		</div>
	);
}
