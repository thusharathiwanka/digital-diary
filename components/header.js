import Link from "next/link";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";

export default function Header() {
	return (
		<header className="bg-gray-50">
			<div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3 sm:px-3">
				<div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
					<input
						type="text"
						name="search"
						id="search"
						placeholder="Search..."
						className="input-text"
					/>
				</div>
				<div className="shrink w-80 sm:order-2">
					<Link href="/">
						<a className="font-bold text-3xl">Design</a>
					</Link>
				</div>
				<div className="w-96 order-3 flex justify-center">
					<div className="flex gap-6">
						<a href="https://facebook.com" rel="noopener noreferrer" target="_blank">
							<ImFacebook />
						</a>
						<a href="https://twitter.com" rel="noopener noreferrer" target="_blank">
							<ImTwitter />
						</a>
						<a href="https://youtube.com" rel="noopener noreferrer" target="_blank">
							<ImYoutube />
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}
