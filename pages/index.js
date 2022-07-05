import CategorySection from "../components/home/category-section";
import Format from "../components/layout/format";
import LatestSection from "../components/home/latest-section";
import PopularSection from "../components/home/popular-section";
import TrendingSection from "../components/home/trending-section";

export default function Home() {
	return (
		<Format>
			<TrendingSection />
			<LatestSection />
			<PopularSection />
			<CategorySection />
		</Format>
	);
}
