import Format from "../components/layout/format";
import LatestSection from "../components/home/latest-section";
import TrendingSection from "../components/home/trending-section";

export default function Home() {
	return (
		<Format>
			<TrendingSection />
			<LatestSection />
		</Format>
	);
}
